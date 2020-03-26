$(document).ready(function() {

    //** For skills section click events, refer to skills.js **//

    //About me
    document.getElementById('anchor-about-me').addEventListener('click', function() {
        document.scrollingElement.scrollTop = 551;
        return document.scrollingElement.scrollTop
    });

    document.getElementById('menu-about').addEventListener('click', function() {
        document.scrollingElement.scrollTop = 551;
        return document.scrollingElement.scrollTop
    });

    //Skills
    document.getElementById('skill-btn').addEventListener('click', function() {
        document.scrollingElement.scrollTop = 1440;
        return document.scrollingElement.scrollTop
    });

    document.getElementById('menu-skills').addEventListener('click', function() {
        document.scrollingElement.scrollTop = 1440;
        return document.scrollingElement.scrollTop
    });

    //Top of page
    document.getElementById('back-to-top').addEventListener('click', function() {
        document.scrollingElement.scrollTop = 0;
        return document.scrollingElement.scrollTop
    });

    document.getElementById('menu-top').addEventListener('click', function() {
        document.scrollingElement.scrollTop = 0;
        return document.scrollingElement.scrollTop
    });


});