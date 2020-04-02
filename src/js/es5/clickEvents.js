"use strict";

$(document).ready(function () {
  var opacityTransitionTime = 'opacity 1s';
  var skillImages_JS = $('#skills-js-box');
  var skillImages_PHP = $('#skills-php-box');
  var skillImages_FE = $('#skills-fe-box');
  var skillImages_Tools = $('#skills-tools-box'); //About me

  document.getElementById('anchor-about-me').addEventListener('click', function () {
    document.scrollingElement.scrollTop = 551;
    return document.scrollingElement.scrollTop;
  });
  document.getElementById('menu-about').addEventListener('click', function () {
    document.scrollingElement.scrollTop = 551;
    return document.scrollingElement.scrollTop;
  }); //Skills

  document.getElementById('skill-btn').addEventListener('click', function () {
    document.scrollingElement.scrollTop = 1440;
    return document.scrollingElement.scrollTop;
  });
  document.getElementById('menu-skills').addEventListener('click', function () {
    document.scrollingElement.scrollTop = 1440;
    return document.scrollingElement.scrollTop;
  }); //Top of page

  document.getElementById('back-to-top').addEventListener('click', function () {
    document.scrollingElement.scrollTop = 0;
    return document.scrollingElement.scrollTop;
  });
  document.getElementById('menu-top').addEventListener('click', function () {
    document.scrollingElement.scrollTop = 0;
    return document.scrollingElement.scrollTop;
  });
  document.getElementById('skill-js-btn').addEventListener('click', function () {
    skillImages_JS.css('display', 'block');
    skillImages_JS.css('opacity', '1');
    skillImages_JS.css('transition', opacityTransitionTime);
    skillImages_PHP.css('opacity', '0');
    skillImages_PHP.css('transition', opacityTransitionTime);
    skillImages_FE.css('opacity', '0');
    skillImages_FE.css('transition', opacityTransitionTime);
    skillImages_Tools.css('opacity', '0');
    skillImages_Tools.css('transition', opacityTransitionTime);
    skillImages_PHP.css('display', 'none');
    skillImages_FE.css('display', 'none');
    skillImages_Tools.css('display', 'none');
  });
  document.getElementById('skill-php-btn').addEventListener('click', function () {
    skillImages_PHP.css('display', 'block');
    skillImages_PHP.css('opacity', '1');
    skillImages_PHP.css('transition', opacityTransitionTime);
    skillImages_JS.css('opacity', '0');
    skillImages_JS.css('transition', opacityTransitionTime);
    skillImages_FE.css('opacity', '0');
    skillImages_FE.css('transition', opacityTransitionTime);
    skillImages_Tools.css('opacity', '0');
    skillImages_Tools.css('transition', opacityTransitionTime);
    skillImages_JS.css('display', 'none');
    skillImages_FE.css('display', 'none');
    skillImages_Tools.css('display', 'none');
  });
  document.getElementById('skill-fe-btn').addEventListener('click', function () {
    skillImages_FE.css('display', 'block');
    skillImages_FE.css('opacity', '1');
    skillImages_FE.css('transition', opacityTransitionTime);
    skillImages_JS.css('opacity', '0');
    skillImages_JS.css('transition', opacityTransitionTime);
    skillImages_PHP.css('opacity', '0');
    skillImages_PHP.css('transition', opacityTransitionTime);
    skillImages_Tools.css('opacity', '0');
    skillImages_Tools.css('transition', opacityTransitionTime);
    skillImages_JS.css('display', 'none');
    skillImages_PHP.css('display', 'none');
    skillImages_Tools.css('display', 'none');
  });
  document.getElementById('skill-tools-btn').addEventListener('click', function () {
    skillImages_Tools.css('display', 'block');
    skillImages_Tools.css('opacity', '1');
    skillImages_Tools.css('transition', opacityTransitionTime);
    skillImages_JS.css('opacity', '0');
    skillImages_JS.css('transition', opacityTransitionTime);
    skillImages_PHP.css('opacity', '0');
    skillImages_PHP.css('transition', opacityTransitionTime);
    skillImages_FE.css('opacity', '0');
    skillImages_FE.css('transition', opacityTransitionTime);
    skillImages_JS.css('display', 'none');
    skillImages_PHP.css('display', 'none');
    skillImages_FE.css('display', 'none');
  });
});