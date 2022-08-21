
function login(){
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
 if(user==="" || pass===""){
    document.getElementById("user").classList.add("error");
    document.getElementById("pass").classList.add("error");
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'Debe rellenar los campos',
      showConfirmButton: false,
      timer: 1500
    })
 } else {
   Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Has iniciado sesión',
      showConfirmButton: false,
      timer: 1500
    })
    sessionStorage.setItem("user", user);
    location.href="index.html";
 }   
}

document.addEventListener("DOMContentLoaded",()=>{
   document.getElementById("ingresar").addEventListener("click", ()=>{
      let usuario = sessionStorage.getItem(user);
    document.getElementById("user").innerHTML=usuario;
    login();
})})

