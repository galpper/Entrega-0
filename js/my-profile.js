let dataUser = JSON.parse(localStorage.getItem(`user`));

function rellenarCampos(a){
document.getElementById(`name`).value = a["nombre"];
document.getElementById(`name2`).value = a["nombre2"];
document.getElementById(`lastname`).value = a["apellido"];
document.getElementById(`lastname2`).value = a["apellido2"];
document.getElementById(`email`).value = a["email"];
}


function valProfile(){
    let email = document.getElementById('email')
    let resultadoValidacion = true;
    let exprecionRegularEmail =/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (exprecionRegularEmail.test(email.value)){
        email.setCustomValidity("");
    }else{
        email.setCustomValidity(false);
        resultadoValidacion=false;
    }
   
    return resultadoValidacion
}


function user (){
let name = document.getElementById(`name`).value;
let name2 = document.getElementById(`name2`).value;
let lastname = document.getElementById(`lastname`).value;
let lastname2 = document.getElementById(`lastname2`).value;
let correo = document.getElementById(`email`).value;

let usuario = {
    nombre: name,
    nombre2: name2,
    apellido: lastname,
    apellido2: lastname2,
    email: correo,
}
localStorage.setItem("user", JSON.stringify(usuario))
}






document.addEventListener("DOMContentLoaded", () => {
    console.log(dataUser)
    rellenarCampos(dataUser);
  
  
  
  
    document.getElementById('formprofile').addEventListener('submit', evento=>{
        user();
        
        if( !valProfile() || !this.checkValidity() ){
            evento.preventDefault();
            evento.stopPropagation();
            
        }
        
        
        document.body.classList.add('was-validated');
       
        let eventos=['change', 'input'];

        eventos.forEach( evento=> {document.body.addEventListener(evento, validar)})
        
        
      })   
});

