
let contactForm = document.getElementsByTagName("form")[0];

contactForm.addEventListener("submit", submitForm);

function submitForm(){
    event.preventDefault();
    console.log("form submited");
    location.href = '/';
}