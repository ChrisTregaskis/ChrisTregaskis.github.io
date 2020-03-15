$(document).ready(function() {

    //amended defaults for ChartJS framework
    Chart.defaults.global.defaultFontColor = '#222';
    Chart.defaults.global.defaultFontFamily = '\'Nanum Gothic\', sans-serif';
    Chart.defaults.global.defaultFontSize = 14;

    //consistently used styling options
    var bgColorMain = "rgba(39,174,96,0.5)";
    var bgColorSecondary = "rgba(83,100,130,0.5)";
    var borderWidthMain = 0;
    var pointStyleMain = 'cross';
    var fillMain = true;
    var typeMain = 'radar';
    var labelMain = 'Confidence & Skill';
    var opacityTransitionTime = 'opacity 1s';

    //canvas skill ids to pass as param and amend display on click
    let overviewID = document.getElementById('radar-chart-overview');
    let jsID = document.getElementById('radar-chart-js');
    let phpID = document.getElementById('radar-chart-php');
    let cssID = document.getElementById('radar-chart-css');
    let toolsID = document.getElementById('radar-chart-tools');
    let attributesID = document.getElementById('radar-chart-attributes');

    //canvas skill configs to pass as param
    let configOverview = {
        type: typeMain,
        data: {
            labels: ["JS", "PHP", "Tools", "Attributes", "HTML", "CSS"],
            datasets: [
                {
                    label: labelMain,
                    fill: fillMain,
                    backgroundColor: bgColorMain,
                    borderWidth: borderWidthMain,
                    pointStyle: pointStyleMain,
                    data: [50, 40, 30, 40, 65, 60]
                }, {
                    label: "Interest",
                    fill: fillMain,
                    backgroundColor: 'rgb(244,241,208,0.8)',
                    borderWidth: 0,
                    pointStyle: pointStyleMain,
                    data: [70, 65, 40, 20, 30, 55]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Skills Overview'
            },
            responsive: true,
            maintainAspectRatio: false,
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 70
                }
            }
        }
    };

    let configJS = {
        type: typeMain,
        data: {
            labels: ["jQuery", "node", "babel", "npm", "API", "vanilla", "typeScript", "chart.js"],
            datasets: [
                {
                    label: labelMain,
                    fill: fillMain,
                    backgroundColor: bgColorMain,
                    borderWidth: borderWidthMain,
                    pointStyle: pointStyleMain,
                    data: [60,25,50,50,40,65,45,40]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'JavaScript Skills'
            },
            responsive: true,
            maintainAspectRatio: false,
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 70
                }
            }
        }
    };

    let configPHP = {
        type: typeMain,
        data: {
            labels: ["mySQL", "DIC & Factories", "mongoDB", "composer", "OOP", "Functional P."],
            datasets: [
                {
                    label: labelMain,
                    fill: fillMain,
                    backgroundColor: bgColorMain,
                    borderWidth: borderWidthMain,
                    pointStyle: pointStyleMain,
                    data: [50, 10, 10, 30, 50, 65]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'PHP Skills'
            },
            responsive: true,
            maintainAspectRatio: false,
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 70
                }
            }
        }
    };

    let configCSS = {
        type: typeMain,
        data: {
            labels: ["CSS5", "Bootstrap", "Lax", "SASS"],
            datasets: [
                {
                    label: labelMain,
                    fill: fillMain,
                    backgroundColor: bgColorMain,
                    borderWidth: borderWidthMain,
                    pointStyle: pointStyleMain,
                    data: [65, 45, 30, 55]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'CSS5 Skills'
            },
            responsive: true,
            maintainAspectRatio: false,
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 70
                }
            }
        }
    };

    let configTools = {
        type: typeMain,
        data: {
            labels: ["Docker", "gulp", "github", "terminal", "postman"],
            datasets: [
                {
                    label: labelMain,
                    fill: fillMain,
                    backgroundColor: bgColorMain,
                    borderWidth: borderWidthMain,
                    pointStyle: pointStyleMain,
                    data: [40, 45, 60, 45, 30]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Developer Tool Skills'
            },
            responsive: true,
            maintainAspectRatio: false,
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 70
                }
            }
        }
    }

    let configAttributes = {
        type: typeMain,
        data: {
            labels: ["Customer Service", "DRY", "Agile", "SOLID", "Scrum"],
            datasets: [
                {
                    label: labelMain,
                    fill: fillMain,
                    backgroundColor: bgColorMain,
                    borderWidth: borderWidthMain,
                    pointStyle: pointStyleMain,
                    data: [70,35,40,25,40]
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'Attribute Skills'
            },
            responsive: true,
            maintainAspectRatio: false,
            scale: {
                ticks: {
                    beginAtZero: true,
                    max: 70
                }
            }
        }
    };

    //Generate Initial Chart
    let overviewChart = new Chart(overviewID, configOverview);
    let jsChart = new Chart(jsID, configJS);
    let phpChart = new Chart(phpID, configPHP);
    let cssChart = new Chart(cssID, configCSS);
    let toolsChart = new Chart(toolsID, configTools);
    let attributeChart = new Chart(attributesID, configAttributes);

    //Skill Button Click Events
    document.getElementById('skill-overview-btn').addEventListener('click', function() {
        overviewChart.destroy();
        overviewChart = new Chart(overviewID, configOverview);

        $('.overview-box').css('visibility', 'visible');
        $('.overview-box').css('opacity', '1');
        $('.overview-box').css('transition', opacityTransitionTime);

        $('.js-box').css('opacity', '0');
        $('.js-box').css('transition', opacityTransitionTime);
        $('.php-box').css('opacity', '0');
        $('.php-box').css('transition', opacityTransitionTime);
        $('.css-box').css('opacity', '0');
        $('.css-box').css('transition', opacityTransitionTime);
        $('.tools-box').css('opacity', '0');
        $('.tools-box').css('transition', opacityTransitionTime);
        $('.attributes-box').css('opacity', '0');
        $('.attributes-box').css('transition', opacityTransitionTime);

        $('.js-box').css('visibility', 'hidden');
        $('.php-box').css('visibility', 'hidden');
        $('.css-box').css('visibility', 'hidden');
        $('.tools-box').css('visibility', 'hidden');
        $('.attributes-box').css('visibility', 'hidden');
    });

    document.getElementById('skill-js-btn').addEventListener('click', function() {
        jsChart.destroy();
        jsChart = new Chart(jsID, configJS);

        $('.js-box').css('visibility', 'visible');
        $('.js-box').css('opacity', '1');
        $('.js-box').css('transition', opacityTransitionTime);

        $('.overview-box').css('opacity', '0');
        $('.overview-box').css('transition', opacityTransitionTime);
        $('.php-box').css('opacity', '0');
        $('.php-box').css('transition', opacityTransitionTime);
        $('.css-box').css('opacity', '0');
        $('.css-box').css('transition', opacityTransitionTime);
        $('.tools-box').css('opacity', '0');
        $('.tools-box').css('transition', opacityTransitionTime);
        $('.attributes-box').css('opacity', '0');
        $('.attributes-box').css('transition', opacityTransitionTime);

        $('.overview-box').css('visibility', 'hidden');
        $('.php-box').css('visibility', 'hidden');
        $('.css-box').css('visibility', 'hidden');
        $('.tools-box').css('visibility', 'hidden');
        $('.attributes-box').css('visibility', 'hidden');
    });

    document.getElementById('skill-php-btn').addEventListener('click', function() {
        phpChart.destroy();
        phpChart = new Chart(phpID, configPHP);

        $('.php-box').css('visibility', 'visible');
        $('.php-box').css('opacity', '1');
        $('.php-box').css('transition', opacityTransitionTime);

        $('.overview-box').css('opacity', '0');
        $('.overview-box').css('transition', opacityTransitionTime);
        $('.js-box').css('opacity', '0');
        $('.js-box').css('transition', opacityTransitionTime);
        $('.css-box').css('opacity', '0');
        $('.css-box').css('transition', opacityTransitionTime);
        $('.tools-box').css('opacity', '0');
        $('.tools-box').css('transition', opacityTransitionTime);
        $('.attributes-box').css('opacity', '0');
        $('.attributes-box').css('transition', opacityTransitionTime);

        $('.overview-box').css('visibility', 'hidden');
        $('.js-box').css('visibility', 'hidden');
        $('.css-box').css('visibility', 'hidden');
        $('.tools-box').css('visibility', 'hidden');
        $('.attributes-box').css('visibility', 'hidden');
    });

    document.getElementById('skill-css-btn').addEventListener('click', function() {
        cssChart.destroy();
        cssChart = new Chart(cssID, configCSS);

        $('.css-box').css('visibility', 'visible');
        $('.css-box').css('opacity', '1');
        $('.css-box').css('transition', opacityTransitionTime);

        $('.overview-box').css('opacity', '0');
        $('.overview-box').css('transition', opacityTransitionTime);
        $('.js-box').css('opacity', '0');
        $('.js-box').css('transition', opacityTransitionTime);
        $('.php-box').css('opacity', '0');
        $('.php-box').css('transition', opacityTransitionTime);
        $('.tools-box').css('opacity', '0');
        $('.tools-box').css('transition', opacityTransitionTime);
        $('.attributes-box').css('opacity', '0');
        $('.attributes-box').css('transition', opacityTransitionTime);

        $('.overview-box').css('visibility', 'hidden');
        $('.js-box').css('visibility', 'hidden');
        $('.php-box').css('visibility', 'hidden');
        $('.tools-box').css('visibility', 'hidden');
        $('.attributes-box').css('visibility', 'hidden');
    });

    document.getElementById('skill-tools-btn').addEventListener('click', function () {
        toolsChart.destroy();
        toolsChart = new Chart(toolsID, configTools);

        $('.tools-box').css('visibility', 'visible');
        $('.tools-box').css('opacity', '1');
        $('.tools-box').css('transition', opacityTransitionTime);

        $('.overview-box').css('opacity', '0');
        $('.overview-box').css('transition', opacityTransitionTime);
        $('.js-box').css('opacity', '0');
        $('.js-box').css('transition', opacityTransitionTime);
        $('.php-box').css('opacity', '0');
        $('.php-box').css('transition', opacityTransitionTime);
        $('.css-box').css('opacity', '0');
        $('.css-box').css('transition', opacityTransitionTime);
        $('.attributes-box').css('opacity', '0');
        $('.attributes-box').css('transition', opacityTransitionTime);

        $('.overview-box').css('visibility', 'hidden');
        $('.js-box').css('visibility', 'hidden');
        $('.php-box').css('visibility', 'hidden');
        $('.css-box').css('visibility', 'hidden');
        $('.attributes-box').css('visibility', 'hidden');
    });

    document.getElementById('skill-attributes-btn').addEventListener('click', function () {
        attributeChart.destroy();
        attributeChart = new Chart(attributesID, configAttributes);

        $('.attributes-box').css('visibility', 'visible');
        $('.attributes-box').css('opacity', '1');
        $('.attributes-box').css('transition', opacityTransitionTime);

        $('.overview-box').css('opacity', '0');
        $('.overview-box').css('transition', opacityTransitionTime);
        $('.js-box').css('opacity', '0');
        $('.js-box').css('transition', opacityTransitionTime);
        $('.php-box').css('opacity', '0');
        $('.php-box').css('transition', opacityTransitionTime);
        $('.css-box').css('opacity', '0');
        $('.css-box').css('transition', opacityTransitionTime);
        $('.tools-box').css('opacity', '0');
        $('.tools-box').css('transition', opacityTransitionTime);

        $('.overview-box').css('visibility', 'hidden');
        $('.js-box').css('visibility', 'hidden');
        $('.php-box').css('visibility', 'hidden');
        $('.css-box').css('visibility', 'hidden');
        $('.tools-box').css('visibility', 'hidden');
    })


});