import 'focus-within-polyfill';

import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import carousel from './common/carousel';
import svgInjector from './global/svg-injector';

export default class Global extends PageManager {
    onReady() {
        const { cartId, secureBaseUrl } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch();
        currencySelector(cartId);
        foundation($(document));
        quickView(this.context);
        carousel(this.context);
        menu();
        mobileMenuToggle();
        svgInjector();
        
        // Check if we need to switch currency
        this.checkAndSwitchCurrency();
    }

    async getBcToken() {
        try {
            let response = await fetch('/customer/current.jwt?app_client_id=dl7c39mdpul6hyc489yk0vzxl6jesyx', {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then((response) => response.json())
            .then((data) => {
                return data.token;
            })
            .catch((error) => {
                console.error('Error:', error);
            });

            return await response;

        } catch(error) {
            console.log(error)
        }
    }

    async getB2BToken() {
        try {
            const bcCustomerToken = await this.getBcToken();
            
            // Get data from DOM attributes since context might not be available
            const customerId = $('header').attr('data-customer-id') || $('meta[name="customer-id"]').attr('content');
            const storeHash = $('meta[name="store-hash"]').attr('content') || 'default';
            const channelId = $('meta[name="channel-id"]').attr('content') || '1';
            
            console.log('🔍 Using customerId:', customerId);
            console.log('🔍 Using storeHash:', storeHash);
            console.log('🔍 Using channelId:', channelId);
            
            let response = await fetch('https://api-b2b.bigcommerce.com/api/v2/login', {
                method: 'POST',
                headers: {
                    'accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    'bcToken': bcCustomerToken,
                    'customerId': customerId,
                    'storeHash': storeHash,
                    'channelId': channelId
                })
            })
            .then((response) => response.json())
            .then((data) => {
                return data;
            })
            .catch((error) => {
                console.error('Error:', error);
            });

            return await response;

        } catch(error) {
            console.log(error);
        }
    }

    async getB3UserId() {
        try {
            const authToken = await this.getB2BToken();
            
            if(authToken?.data?.token === undefined){
                console.log("B2B User doesn't exist.. Most likely B2C user..");
                return null;
            } 

            // Get customer ID from DOM since context might not be available
            const customerId = $('header').attr('data-customer-id') || $('meta[name="customer-id"]').attr('content');
            
            let response = await fetch(`https://api-b2b.bigcommerce.com/api/v2/users/${customerId}?isBcId=1`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authToken': authToken.data.token
                    
                }
            })
            .then((response) => response.json())
            .then((data) => {
                return data.data.userId;
            })
            .catch((error) => {
                console.error('Error:', error);
            });

            return await response;

        } catch(error) {
            console.log(error)
        }
    }

    async getCompaniesOfUser() {
        try {
            const userId = await this.getB3UserId();
            
            if(userId === null){
                console.log("Didn't receive a B2B User ID, most likely B2C user..");
                return null;
            }
            
            console.log("User ID:"+userId)
            const authToken = await this.getB2BToken();
            let response = await fetch(`https://api-b2b.bigcommerce.com/api/v2/customers/${userId}/companies`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authToken': authToken.data.token
                }
            });
            
            const companyData = await response.json();
            console.log("🏢 B2B Company Data:", companyData);
            
            return companyData;

        } catch(error) {
            console.error("❌ Error in getCompaniesOfUser:", error);
            return null;
        }
    }

    async checkAndSwitchCurrency() {
        const userEmail = sessionStorage.getItem('sessionUserEmail');
        console.log('🔍 Checking currency switch for user:', userEmail);
        
        if (!userEmail) {
            console.log('ℹ️ No user email in sessionStorage, skipping currency switch');
            return;
        }

        // Remove sessionStorage item immediately when email is found
        sessionStorage.removeItem('sessionUserEmail');
        console.log('🧹 Removed sessionUserEmail from sessionStorage');

        // Get current storefront currency from DOM
        const currentCurrency = $('header').attr('data-currency-selector');
        console.log('💱 Current Storefront Currency:', currentCurrency);
        
        // Get user's company currency from B2B API
        console.log('🏢 Fetching company currency...');
        const companyData = await this.getCompaniesOfUser();
        
        if (companyData && companyData.data && companyData.data.extraFields && companyData.data.extraFields.length > 0) {
            const userCurrency = companyData.data.extraFields[0].fieldValue;
            console.log('💰 User Company Currency:', userCurrency);
            
            // Check if user's currency matches storefront currency
            if (userCurrency && userCurrency.toUpperCase() !== currentCurrency?.toUpperCase()) {
                console.log(`🔄 Currency mismatch: User (${userCurrency}) != Storefront (${currentCurrency})`);
                console.log(`💱 Switching to user's preferred currency: ${userCurrency}`);
                this.switchToCurrency(userCurrency.toUpperCase());
            } else {
                console.log('✅ User currency matches storefront currency - no switch needed');
            }
        } else {
            console.log('⚠️ No company currency found, using customer group logic');
            
            // Fallback to customer group logic
            const customerGroupId = $('header').attr('data-customer-group-id');
            console.log('👥 Customer Group ID:', customerGroupId);
            
            if (this.shouldUseUSD(customerGroupId, userEmail)) {
                if (currentCurrency !== 'USD') {
                    console.log('🔄 Switching to USD based on customer group...');
                    this.switchToCurrency('USD');
                } else {
                    console.log('✅ Already using USD');
                }
            } else {
                console.log('ℹ️ No currency switch needed for this customer group');
            }
        }
    }

    shouldUseUSD(customerGroupId, userEmail) {
        // Add your logic here to determine if user should use USD
        // Examples:
        // - Check customer group ID
        // - Check email domain
        // - Check other conditions
        
        // Example: Customer group 2 should use USD
        if (customerGroupId === '2') {
            console.log('💵 Customer group 2 should use USD');
            return true;
        }
        
        // Example: Specific email should use USD
        if (userEmail === 'maverik_90@hotmail.com') {
            console.log('💵 Specific user should use USD');
            return true;
        }
        
        // Example: Customer group name contains "Dollar"
        // Note: We can't easily get customer group name from DOM, so skip this for now
        // const customerGroupName = this.context.customer?.customer_group_name;
        // if (customerGroupName && customerGroupName.includes('Dollar')) {
        //     console.log('💵 Dollar customer group should use USD');
        //     return true;
        // }
        
        return false;
    }

    switchToCurrency(currencyCode) {
        console.log(`� Switching to currency: ${currencyCode}`);
        
        // get active currency
        const activeCurrencyId = $('meta[name=active-currency-id]').attr('content');
        const activeCurrencyName = $(`a[href*="setCurrencyId=${activeCurrencyId}"]`).attr('data-currency-code');
        console.log('Active Currency Name:', activeCurrencyName);
        
        if(activeCurrencyName === currencyCode){
            console.log('Active currency is already ' + currencyCode);
            return;
        }
        // Find currency link for the specified currency
        const currencyLink = $(`[data-currency-code="${currencyCode}"]`);
        
        if (currencyLink.length > 0) {
            // Try direct URL first
            const directUrl = currencyLink.attr('href');
            
            if (directUrl && directUrl !== '#') {
                console.log(`🔄 Using direct URL redirect to ${currencyCode}...`);
                window.location.href = directUrl;
                return;
            }
            
            // Fall back to form submission
            const switchUrl = currencyLink.data('cart-currency-switch-url');
            if (switchUrl) {
                console.log(`📤 Using form submission for ${currencyCode}...`);
                
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = switchUrl;
                
                // Try the most common parameter names
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = 'currency_code';  // Try underscore version
                input.value = currencyCode;
                
                form.appendChild(input);
                document.body.appendChild(form);
                
                form.submit();
            } else {
                console.log(`❌ No valid URL found for ${currencyCode} switch`);
            }
        } else {
            console.log(`❌ ${currencyCode} currency link not found`);
            console.log('Available currencies:', $('[data-currency-code]').map((i, el) => $(el).data('currency-code')).get());
        }
    }
}
