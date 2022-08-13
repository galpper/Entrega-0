
function showAlertSuccess() {
   document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
   document.getElementById("alert-danger").classList.add("show");
}


function login(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
 if(user==="" || pass===""){
    document.getElementById("user").classList.add("error");
    document.getElementById("pass").classList.add("error");
    showAlertError();
 } else {
    showAlertSuccess();
    sessionStorage.setItem("user", user);
    location.href="index.html";
 }   
}

document.addEventListener("DOMContentLoaded",()=>{
   document.getElementById("ingresar").addEventListener("click", ()=>{
      let usuario = localStorage.getItem(user);
    document.getElementById("user").innerHTML=usuario;
    login();
})})

