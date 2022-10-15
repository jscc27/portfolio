
document.getElementById("aboutBtn").addEventListener("click", getAbout);

document.getElementById("projectsBtn").addEventListener("click", getProjects);

document.getElementById("servicesBtn").addEventListener("click", getServices);

document.getElementById("contactBtn").addEventListener("click", getContact);

function getAbout(){
    res.render('about', { title: 'About Me' });
}

function getProjects(){
    router.get('/projects', function(req, res, next) {
        res.render('projects', { title: 'Projects' });
      });
}

function getServices(){
    res.render('index', { title: 'Home' });
}

function getContact(){
    res.render('index', { title: 'Home' });
}
