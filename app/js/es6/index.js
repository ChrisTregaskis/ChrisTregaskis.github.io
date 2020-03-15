$(document).ready(function() {

    position = 0;

    $(window).scroll(function() {
        console.log(document.scrollingElement.scrollTop)
        var scroll = document.scrollingElement.scrollTop;

        //header -- 1
        if(scroll > position) {
            if(scroll > 500) {
                $('.headers-1').css('opacity', '0');
                $('.headers-1').css('transition', 'opacity 0.6s');
                $('.headers-2').css('opacity', '1');
                $('.headers-2').css('transition', 'opacity 0.6s');
            }
        } else {
            $('.headers-1').css('opacity', '1');
            $('.headers-1').css('transition', 'opacity 0.6s');
            $('.headers-2').css('opacity', '0');
            $('.headers-2').css('transition', 'opacity 0.6s');
            $('.title-about-me').css('margin', '0');
            $('.title-about-me').css('transition', 'margin 1s');
        }

        position = scroll;

        //header -- 2
        if(scroll > 500) {
            $('.header-content-2').css('visibility', 'visible');
        }

        if(scroll > 550) {
            $('.header-content-2').css('opacity', '1');
            $('.header-content-2').css('transition', 'opacity 2s');
            $('.title-about-me').css('margin', '10px 0');
            $('.title-about-me').css('transition', 'margin 1s');
            $('.chrisPicMain').css('transform', 'scale(1)');
            $('.chrisPicMain').css('transition', 'transform 1s');
        }

        if(scroll < 400) {
            $('.header-content-2').css('visibility', 'hidden');
        }

        if(scroll < 549) {
            $('.header-content-2').css('opacity', '0');
            $('.header-content-2').css('transition', 'opacity 2s');
        }

        if(scroll > 900) {
            $('.wave').css('position', 'absolute');
            $('.wave').css('transition', 'position 2s');
            $('.wave-animation').css('bottom', 'auto');
            $('.header-content').css('z-index', '0');
        }

        if(scroll < 899) {
            $('.wave').css('position', 'fixed');
            $('.wave').css('transition', 'position 2s');
            $('.header-content').css('z-index', '20');

        }

        if(scroll > 1150) {
            $('.headers-1').css('opacity', '0');
            $('.headers-1').css('transition', 'opacity 0.6s');
            $('.headers-2').css('opacity', '0');
            $('.headers-2').css('transition', 'opacity 0.6s');
        }

        //progress bar --
        var scrollView = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height();
        scrollPercent = (scrollView / (dh-wh)) * 100;
        $('#progressBar1').css('height', scrollPercent + '%');

    });

    //Click events for header 1 & 2
    document.getElementById('anchor-about-me').addEventListener('click', function() {
        document.scrollingElement.scrollTop = 551;
        return document.scrollingElement.scrollTop
    });

    document.getElementById('skill-btn').addEventListener('click', function() {
        document.scrollingElement.scrollTop = 1525;
        return document.scrollingElement.scrollTop
    });

    
});