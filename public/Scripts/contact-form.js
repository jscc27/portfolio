
// Name: Juliano Souza Chaves Costa
// StudentID: 301222713
// Date: 2022-10-16

let contactForm = document.getElementsByTagName("form")[0];

contactForm.addEventListener("submit", submitForm);

function submitForm(){
    event.preventDefault();
    console.log("form submited");
    location.href = '/';
}