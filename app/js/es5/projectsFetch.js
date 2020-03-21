"use strict";

fetch('../projects.json').then(function (data) {
  return data.json();
}).then(function (fetchedProjects) {
  fetch('hand.hbs').then(function (handData) {
    return handData.text();
  }).then(function (handData) {
    var hbsTemplate = Handlebars.compile(handData);
    var projects = hbsTemplate(fetchedProjects);
    document.querySelector('#main-projects-box').innerHTML = projects;
  });
});