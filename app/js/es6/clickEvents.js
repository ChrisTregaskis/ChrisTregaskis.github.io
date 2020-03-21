$(document).ready(function() {

    //** For skills section click events, refer to skills.js **//

    //Click events for header 1 & 2
    document.getElementById('anchor-about-me').addEventListener('click', function() {
        document.scrollingElement.scrollTop = 551;
        return document.scrollingElement.scrollTop
    });

    document.getElementById('skill-btn').addEventListener('click', function() {
        document.scrollingElement.scrollTop = 1525;
        return document.scrollingElement.scrollTop
    });

    //Animate project Learn More event
    document.getElementById('learn-more-btn-1').addEventListener('click', function() {
        $('#poster-body-image-1').animate({opacity: '1'}, 600)
    });

    document.getElementById('project-close-btn-1').addEventListener('click', function() {
        $('#poster-body-image-1').animate({opacity: '0'}, 600)
    });

});