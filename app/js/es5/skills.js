"use strict";

$(document).ready(function () {
  //amended defaults for ChartJS framework
  Chart.defaults.global.defaultFontColor = '#222';
  Chart.defaults.global.defaultFontFamily = '\'Nanum Gothic\', sans-serif'; //commonly used colours / entities

  var bgColorMain = "rgba(39,174,96,0.5)";
  var bgColorSecondary = "rgba(83,100,130,0.5)";
  var borderWidthMain = 0;
  var pointStyleMain = 'cross';
  var fillMain = true;
  var typeMain = 'radar'; //canvas skill ids to pass as param

  var overviewID = document.getElementById('radar-chart-overview');
  var jsID = document.getElementById('radar-chart-js');
  var phpID = document.getElementById('radar-chart-php');
  var toolsID = document.getElementById('radar-chart-tools');
  var attributesID = document.getElementById('radar-chart-attributes'); //canvas skill configs to pass as param

  var configOverview = {
    type: typeMain,
    data: {
      labels: ["JS", "PHP", "Tools", "Attributes", "HTML", "CSS"],
      datasets: [{
        label: "Current Confidence & Skill",
        fill: fillMain,
        backgroundColor: bgColorSecondary,
        borderWidth: borderWidthMain,
        pointStyle: pointStyleMain,
        data: [50, 40, 30, 40, 65, 60]
      }, {
        label: "Interest",
        fill: fillMain,
        backgroundColor: bgColorMain,
        borderWidth: 0,
        pointStyle: pointStyleMain,
        data: [70, 65, 40, 20, 30, 55]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Skills Overview'
      },
      maintainAspectRatio: true,
      scale: {
        ticks: {
          beginAtZero: true,
          max: 70
        }
      }
    }
  };
  var configJS = {
    type: typeMain,
    data: {
      labels: ["jQuery", "node", "babel", "npm", "API", "vanilla", "typeScript", "chart.js"],
      datasets: [{
        label: "Current Confidence & Skill",
        fill: fillMain,
        backgroundColor: bgColorMain,
        borderWidth: borderWidthMain,
        pointStyle: pointStyleMain,
        data: [60, 25, 50, 50, 40, 65, 45, 40]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'JavaScript Skills'
      },
      maintainAspectRatio: true,
      scale: {
        ticks: {
          beginAtZero: true,
          max: 70
        }
      }
    }
  };
  var configPHP = {
    type: typeMain,
    data: {
      labels: ["mySQL", "DIC & Factories", "mongoDB", "composer", "OOP", "Function"],
      datasets: [{
        label: "Current Confidence & Skill",
        fill: fillMain,
        backgroundColor: bgColorMain,
        borderWidth: borderWidthMain,
        pointStyle: pointStyleMain,
        data: [50, 10, 10, 30, 50, 65]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'PHP Skills'
      },
      maintainAspectRatio: true,
      scale: {
        ticks: {
          beginAtZero: true,
          max: 70
        }
      }
    }
  };
  var configTools = {
    type: typeMain,
    data: {
      labels: ["Docker", "gulp", "github", "terminal", "postman"],
      datasets: [{
        label: "Current Confidence & Skill",
        fill: fillMain,
        backgroundColor: bgColorMain,
        borderWidth: borderWidthMain,
        pointStyle: pointStyleMain,
        data: [40, 45, 60, 45, 30]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Developer Tool Skills'
      },
      maintainAspectRatio: true,
      scale: {
        ticks: {
          beginAtZero: true,
          max: 70
        }
      }
    }
  };
  var configAttributes = {
    type: typeMain,
    data: {
      labels: ["SOLID", "DRY", "Agile", "Scrum", "Customer Service"],
      datasets: [{
        label: "Current Confidence & Skill",
        fill: fillMain,
        backgroundColor: bgColorMain,
        borderWidth: borderWidthMain,
        pointStyle: pointStyleMain,
        data: [25, 35, 40, 40, 70]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Attribute Skills'
      },
      maintainAspectRatio: true,
      scale: {
        ticks: {
          beginAtZero: true,
          max: 70
        }
      }
    }
  }; //Generate Initial Chart

  var overviewChart = new Chart(overviewID, configOverview);
  var jsChart = new Chart(jsID, configJS);
  var phpChart = new Chart(phpID, configPHP);
  var toolsChart = new Chart(toolsID, configTools);
  var attributeChart = new Chart(attributesID, configAttributes); //Skill Button Click Events

  document.getElementById('skill-overview-btn').addEventListener('click', function (e) {
    e.preventDefault();
    overviewChart.destroy();
    overviewChart = new Chart(overviewID, configOverview);
  });
  document.getElementById('skill-js-btn').addEventListener('click', function (e) {
    e.preventDefault();
    jsChart.destroy();
    jsChart = new Chart(jsID, configJS);
  });
  document.getElementById('skill-php-btn').addEventListener('click', function (e) {
    e.preventDefault();
    phpChart.destroy();
    phpChart = new Chart(phpID, configPHP);
  });
  document.getElementById('skill-tools-btn').addEventListener('click', function (e) {
    e.preventDefault();
    toolsChart.destroy();
    toolsChart = Chart(toolsID, configTools);
  });
  document.getElementById('skill-attributes-btn').addEventListener('click', function (e) {
    e.preventDefault();
    attributeChart.destroy();
    attributeChart = new Chart(attributesID, configAttributes);
  });
});