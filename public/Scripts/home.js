
document.getElementById("aboutBtn").addEventListener("click", getHome);

function getHome(){
    res.render('index', { title: 'Home' });
}
