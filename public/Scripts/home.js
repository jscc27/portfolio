
document.getElementById("aboutBtn").addEventListener("click", getAbout);

document.getElementById("projectsBtn").addEventListener("click", getProjects);

document.getElementById("servicesBtn").addEventListener("click", getServices);

document.getElementById("contactBtn").addEventListener("click", getContact);

function getAbout(){
    res.render('about', { title: 'Home' });
}

function getProjects(){
    res.render('index', { title: 'Home' });
}

function getServices(){
    res.render('index', { title: 'Home' });
}

function getContact(){
    res.render('index', { title: 'Home' });
}
