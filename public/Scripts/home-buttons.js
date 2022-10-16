
document.getElementById("aboutBtn").addEventListener("click", getAbout);
document.getElementById("projectsBtn").addEventListener("click", getProjects);
document.getElementById("servicesBtn").addEventListener("click", getServices);
document.getElementById("contactBtn").addEventListener("click", getContact);

function getAbout(){
    location.href = '/about';
}

function getProjects(){
    location.href = '/projects';
}

function getServices(){
    location.href = '/services';
}

function getContact(){
    location.href = '/contact';
}