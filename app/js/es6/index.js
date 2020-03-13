$(document).ready(function() {

    position = 0;

    $(window).scroll(function() {
        console.log(document.scrollingElement.scrollTop)
        var scroll = document.scrollingElement.scrollTop;
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

        position = scroll

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

        var scrollView = $(window).scrollTop(),
            dh = $(document).height(),
            wh = $(window).height();
        scrollPercent = (scrollView / (dh-wh)) * 100;
        $('#progressBar1').css('height', scrollPercent + '%');

    });

    document.getElementById('anchor-about-me').addEventListener('click', function() {
        document.scrollingElement.scrollTop = 551;
        return document.scrollingElement.scrollTop
    })
});