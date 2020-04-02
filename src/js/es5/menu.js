"use strict";

$(document).ready(function () {
  document.getElementById('menu-p').addEventListener('click', function () {
    var menu = $('#menu');
    $('.open-menu-div').css('display', 'none');
    menu.css('clip-path', 'none');
    menu.css('background-color', 'rgba(0, 0, 0, 0.5)');
    menu.css('height', '100vh');
    menu.css('width', '40%');
    menu.css('transition', 'clip-path 0.6s, background-color 0.6s, height 0.6s, width 0.6s');
    $('#menu-ul').css('opacity', '1');
    $('#menu-ul').css('transition', 'opacity 0.6s');
    $('#close-menu ion-icon').css('visibility', 'visible');
  });
  $('#close-menu').click(function () {
    closeMenu();
  });
  $('#menu-top').click(function () {
    closeMenu();
  });
  $('#menu-about').click(function () {
    closeMenu();
  });
  $('#menu-skills').click(function () {
    closeMenu();
  });
  $('#menu-projects').click(function () {
    closeMenu();
  });
  $('#menu-contact').click(function () {
    closeMenu();
  });

  function closeMenu() {
    var menu = $('#menu');
    $('.open-menu-div').css('display', 'block');
    menu.css('clip-path', 'polygon(0 0, 100% -100%, 100% 100%)');
    menu.css('background-color', '#000');
    menu.css('height', '60px');
    menu.css('width', '60px');
    menu.css('transition', 'clip-path 0.6s, background-color 0.6s, height 0.6s, width 0.6s');
    $('#menu-ul').css('opacity', '0');
    $('#menu-ul').css('transition', 'opacity 0.6s');
    $('#close-menu ion-icon').css('visibility', 'hidden');
  }
});