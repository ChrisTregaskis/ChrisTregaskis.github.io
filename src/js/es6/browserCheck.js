function detectMSIE() {
    var browser= window.navigator.userAgent;
    console.log (browser);
    if (browser.indexOf('MSIE ') > 0) {
        console.log('It is IE');
        window.location.href = "ieBrowserCatch.html";
    } else if (browser.indexOf('Trident/') > 0) {
        console.log('It is IE');
        window.location.href = "ieBrowserCatch.html";
    } else {
        console.log ('not IE')
    }
}
detectMSIE();