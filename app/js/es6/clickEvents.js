$(document).ready(function() {

    //** For skills section click events, refer to skills.js **//

    //Click events for header 1 & 2
    document.getElementById('anchor-about-me').addEventListener('click', function() {
        document.scrollingElement.scrollTop = 551;
        return document.scrollingElement.scrollTop
    });

    document.getElementById('skill-btn').addEventListener('click', function() {
        document.scrollingElement.scrollTop = 1440;
        return document.scrollingElement.scrollTop
    });

    document.getElementById('back-to-top').addEventListener('click', function () {
        document.scrollingElement.scrollTop = 0;
        return document.scrollingElement.scrollTop
    })


});