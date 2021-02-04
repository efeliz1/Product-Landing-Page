(function (document, $) {
    if (window['OptiMonkPreloadStarted'] || typeof localStorage !== 'object') {
        return;
    }

    window.OptiMonkPreloadStarted = true;

    var acc = '93950';
    var optimonkUrl = 'https://front.optimonk.com';
    var assetsVersion = '213';

    function reloadCart(){var t;if("undefined"!=typeof $&&$.fn&&$.fn.getJSON&&$.fn.each)t=$;else{if(void 0===OptiMonk.$)return;t=OptiMonk.$}t.getJSON("/cart.js",function(e){var n=OptiMonk.Visitor.createAdapter();n.Cart.clear(),t.each(e.items,function(e,t){n.Cart.add(t.id,{handle:t.handle,quantity:t.quantity,price:t.price/100,line_price:t.line_price/100,product_id:t.product_id,product_title:t.product_title,sku:t.sku,title:t.title,url:t.url})})})}function addListener(e,t,n){e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent?e.attachEvent("on"+t,function(){n.apply(e,new Array(window.event))}):e["on"+t]=n}function addListenerToHtml(e,t){addListener(document.querySelector("html"),e,t)}function runPreload(){"undefined"!=typeof $&&$.fn&&$.fn.ajaxComplete?($(document).on("optimonk#ready",reloadCart),$(document).ajaxComplete(function(e,t,n){n&&("/cart/add.js"===n.url&&"POST"===n.type||/^\/cart\/add\.js/.exec(n.url)&&"GET"===n.type)&&reloadCart()})):document.querySelector("html").addEventListener("optimonk#ready",function(){reloadCart(),OptiMonk.$(document).ajaxComplete(function(e,t,n){n&&("/cart/add.js"===n.url&&"POST"===n.type||/^\/cart\/add\.js/.exec(n.url)&&"GET"===n.type)&&reloadCart()})});var e=optimonkUrl+"/public/"+acc+"/js/preload.js",t=document.createElement("script");t.type="text/javascript",t.charset="utf-8",t.async=!0,t.src=e+"?"+assetsVersion,document.querySelector("head").appendChild(t)}
    var body = document.querySelector('body');
    if (body) {
        var styleTag = document.createElement('style')
        styleTag.innerText = 'html.wf-loading,html.wf-active,html.wf-inactive{visibility: visible;opacity: 1}'
        body.appendChild(styleTag)
    }

    if (document.readyState === "complete") {
        runPreload();
    } else {
        addListener(window, 'load', function () {
            runPreload();
        });
    }
    // checkout and Checkout are seperate objects
    var isCheckoutPage = window.Shopify && Shopify.Checkout && Shopify.Checkout.page === 'thank_you'
    if (isCheckoutPage) {
        var filledCookieMatch = document.cookie.match(new RegExp('omLastFilled=([^;]+)'));
        if (filledCookieMatch) {
            var filledCookieData = JSON.parse(decodeURIComponent(filledCookieMatch[1]))
            params = {
                accountId: acc,
                creativeId: filledCookieData.creativeId,
                showedTs: filledCookieData.ts,
                orderId: Shopify.checkout.order_id,
                totalPrice: Shopify.checkout.total_price,
                currency: Shopify.checkout.currency,
                href: window.location.href
            }
            const http = new XMLHttpRequest()
            http.open('POST', optimonkUrl + '/shopify/checkout')
            http.setRequestHeader('Content-type', 'application/json')
            http.send(JSON.stringify(params))
        } else {
            console.log('no om session found')
        }
    }

}(document, window.jQuery));
