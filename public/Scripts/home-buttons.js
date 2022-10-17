
document.getElementById("aboutBtn").addEventListener("click", getAbout);
document.getElementById("projectsBtn").addEventListener("click", getProjects);
document.getElementById("servicesBtn").addEventListener("click", getServices);
document.getElementById("contactBtn").addEventListener("click", getContact);

//Function to get the about page when the button is clicked
function getAbout(){
    location.href = '/about';
}

//Function to get the projects page when the button is clicked
function getProjects(){
    location.href = '/projects';
}

//Function to get the services page when the button is clicked
function getServices(){
    location.href = '/services';
}

//Function to get the contact page when the button is clicked
function getContact(){
    location.href = '/contact';
}