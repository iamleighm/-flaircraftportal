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
        
        // Check if we need to switch currency to USD
        this.checkAndSwitchToUSD();
    }

    checkAndSwitchToUSD() {
        const userEmail = sessionStorage.getItem('sessionUserEmail');
        console.log('🔍 Checking currency switch for user:', userEmail);
        
        if (!userEmail) {
            console.log('ℹ️ No user email in sessionStorage, skipping currency switch');
            return;
        }

        // Remove sessionStorage item immediately when email is found
        sessionStorage.removeItem('sessionUserEmail');
        console.log('🧹 Removed sessionUserEmail from sessionStorage');

        // Get customer group from header data attribute
        const customerGroupId = $('header').attr('data-customer-group-id');
        const currentCurrency = $('header').attr('data-currency-selector');
        
        console.log('👥 Customer Group ID:', customerGroupId);
        console.log('💱 Current Currency:', currentCurrency);
        
        // Check if customer should use USD (you can customize this logic)
        if (this.shouldUseUSD(customerGroupId, userEmail)) {
            if (currentCurrency !== 'USD') {
                console.log('🔄 Switching currency to USD...');
                this.switchToUSD();
            } else {
                console.log('✅ Already using USD');
            }
        } else {
            console.log('ℹ️ No USD switch needed for this user');
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
        const customerGroupName = $('header').attr('data-customer-group-name');
        if (customerGroupName && customerGroupName.includes('Dollar')) {
            console.log('💵 Dollar customer group should use USD');
            return true;
        }
        
        return false;
    }

    switchToUSD() {
        console.log('🚀 Initiating USD currency switch...');
        
        // Find USD currency link
        const usdCurrencyLink = $('[data-currency-code="USD"]');
        
        if (usdCurrencyLink.length > 0) {
            // Try the switch URL first
            const switchUrl = usdCurrencyLink.data('cart-currency-switch-url');
            const directUrl = usdCurrencyLink.attr('href');
            
            console.log('🔗 Available URLs:');
            console.log('  Switch URL:', switchUrl);
            console.log('  Direct URL:', directUrl);
            
            // Try direct URL redirect first (simpler)
            if (directUrl && directUrl !== '#') {
                console.log('🔄 Using direct URL redirect...');
                sessionStorage.removeItem('sessionUserEmail');
                window.location.href = directUrl;
                return;
            }
            
            // Fall back to form submission
            if (switchUrl) {
                console.log('📤 Using form submission...');
                
                const form = document.createElement('form');
                form.method = 'POST';
                form.action = switchUrl;
                
                // Try the most common parameter names
                const input = document.createElement('input');
                input.type = 'hidden';
                input.name = 'currency_code';  // Try underscore version
                input.value = 'USD';
                
                form.appendChild(input);
                document.body.appendChild(form);
                
                sessionStorage.removeItem('sessionUserEmail');
                form.submit();
            } else {
                console.log('❌ No valid URL found for USD switch');
                sessionStorage.removeItem('sessionUserEmail');
            }
        } else {
            console.log('❌ USD currency link not found');
            console.log('Available currencies:', $('[data-currency-code]').map((i, el) => $(el).data('currency-code')).get());
            sessionStorage.removeItem('sessionUserEmail');
        }
    }
}
