fetch('../projects.json')
    .then((data) => {
        return data.json()
    })
    .then((fetchedProjects) => {
        fetch('hand.hbs')
            .then((handData) => {
                return handData.text()
            })
            .then((handData) => {
                let hbsTemplate = Handlebars.compile(handData);

                var projects = hbsTemplate(fetchedProjects);
                document.querySelector('#main-projects-box').innerHTML = projects;
            })
    });