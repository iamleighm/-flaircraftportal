export default class CategoryInfiniteScroll {

    constructor() {
        this.init();
    }

    init() {
        this.infinitConfig();
    }

    infinitConfig(){
        var paginationWrapper = document.querySelector('nav.pagination');
        if (paginationWrapper) {
            /* Config Local Pagination */
            var getCurrentPage = document.querySelector('.pagination-list .pagination-item--current .pagination-link').textContent;
            paginationWrapper.setAttribute('data-current-page', getCurrentPage);

              document.body.onscroll = () => {
                const getPageHeight = document.body.offsetHeight;
                const getWindowHeight = window.innerHeight;
                const getFooterHeight = document.querySelector('footer.footer').offsetHeight;

                var getTriggerPoint = parseInt(getPageHeight) - parseInt(getWindowHeight) - parseInt(getFooterHeight) + 200;
                var topYPoint = window.scrollY;

                if (topYPoint > getTriggerPoint) {
                    //console.log('Infinite scroll trigger point reached');
                    var paginationWrapper = document.querySelector('nav.pagination');
                    var getCurrentPage = paginationWrapper.getAttribute('data-current-page');
                    var lastPage = paginationWrapper.querySelector('.pagination-list .pagination-item:nth-last-child(2) .pagination-link').textContent;

                    var getNextPage = parseInt(getCurrentPage) + 1;

                    if(getNextPage <= lastPage){
                        /* Add Loader */
                        var productGrid = document.querySelector('#product-listing-container .productGrid');
                        if(!productGrid.classList.contains('loading')){
                            productGrid.classList.add('loading');

                            var getCurrentLocation = location.href;
                            console.log('Current location:', getCurrentLocation);
                            console.log('Next page:', getNextPage);
                            
                            // Remove any existing page parameter from URL
                            var baseUrl = getCurrentLocation.split('?')[0];
                            var existingParams = getCurrentLocation.split('?')[1] || '';
                            
                            // Build new URL with page parameter
                            var newTargetLocation = baseUrl + '?page=' + getNextPage;
                            if (existingParams) {
                                // Remove existing page parameter if present
                                var params = existingParams.split('&').filter(param => !param.startsWith('page='));
                                if (params.length > 0) {
                                    newTargetLocation += '&' + params.join('&');
                                }
                            }
                            console.log('New target location:', newTargetLocation);
                            this.getProductGrid(getNextPage, newTargetLocation);
                        }
                    }
                }
            }
        }
    }

    getProductGrid(pageId, newTargetLocation){
        fetch(newTargetLocation)
        .then(response => {
            return response.text()
        })
        .then(html => {
            const parser = new DOMParser()
        
            const doc = parser.parseFromString(html, "text/html")
            var getSourceProductGrid = doc.querySelector('#product-listing-container .productGrid').innerHTML

            var productGrid = document.querySelector('#product-listing-container .productGrid');
            productGrid.insertAdjacentHTML('beforeend', getSourceProductGrid);

            setTimeout(function(){
                /* Update Local Pagination */
                var paginationWrapper = document.querySelector('nav.pagination');
                paginationWrapper.setAttribute('data-current-page', pageId);

                var productGrid = document.querySelector('#product-listing-container .productGrid');
                productGrid.classList.remove('loading');
            },100);
        })
        .catch(error => {
            console.error('Failed to fetch page: ', error)
        })
    }


}