let arrayProduct = [];
let en1 = 15;
let en2 = 7;
let en3 = 5;
let envioTotal = 0;
let costoEnvio = 0;
let total = 0;
let algo = document.getElementsByClassName("cant"); // algo.cant.value
let radio1 = "";
let radio2 = "";

// funcion de validacion
function validar(){
    let cantidad = document.getElementById("cant");
    let envio1 = document.getElementById("envio1");
    let envio2 = document.getElementById("envio2");
    let envio3 = document.getElementById("envio3");
    let calle = document.getElementById("calle");
    let num = document.getElementById("numcasa");
    let esq = document.getElementById("esq");
    let modalcredito = document.getElementById("credito");
    let modalbanco = document.getElementById("banco");
    let reultadoValidacion = true;
   
    if (cantidad.value>=1){
        cantidad.setCustomValidity("");
    }else{
        cantidad.setCustomValidity(false);
        reultadoValidacion=false;
    }
    if (calle.innerHTML == ""){
        calle.setCustomValidity("");
    }else{
        calle.setCustomValidity(false);
        reultadoValidacion=false;
    }
    if (esq.innerHTML == ""){
        esq.setCustomValidity("");
    }else{
        esq.setCustomValidity(false);
        reultadoValidacion=false;
    }
    if (num.innerHTML == ""){
        num.setCustomValidity("");
    }else{
        num.setCustomValidity(false);
        reultadoValidacion=false;
    }
    if (!modalcredito.checked || !modalbanco.checked){
      document.getElementById("btnfinal").classList.add("invalid-color");
      document.getElementById("feedback-modal-terminos").style.display = "inline";
    }else{
        document.getElementById("btnfinal").classList.remove("invalid-color");
        document.getElementById("feedback-modal-terminos").style.display = "none";
    }
   if (envio1.checked || envio2.checked || envio3.checked ){
    envio1.setCustomValidity("");
    envio2.setCustomValidity("");
    envio3.setCustomValidity("");
    }else{
        envio1.setCustomValidity(false);
        envio2.setCustomValidity(false);
        envio3.setCustomValidity(false);
        reultadoValidacion=false;
    }
    console.log('Validado!!!!')
    return reultadoValidacion
    
}

//suma Cantidad y valor del articulo
function suma(array) {
    let cant = document.getElementById("cant").value;
    let resultado = arrayProduct.currency + " " + (array.cost * cant);
    costoEnvio = (array.cost * cant);
    document.getElementById("result").innerHTML = resultado;
    document.getElementById("subTotal").innerHTML = resultado;
    envio(sessionStorage.getItem("carrito"), costoEnvio);
    sumaTotal();
  }

// Porcentaje envio
function envio(array, array2){
envioTotal = ((array*array2) /100);
document.getElementById("envio").innerHTML = "USD "+envioTotal;
sumaTotal();
};

//suma el Envio y el valor "final" del producto
function sumaTotal(){
    total = costoEnvio+envioTotal;
    document.getElementById("total").innerHTML = "USD "+ total
}

//Muestra el articulo
function showArt(arrayProduct) {
    let contenido = "";
    contenido += `
        <div class="list-group-item list-group-item-action">
            <div class="row ms-2 me-2">
            <img src="${arrayProduct.images[0]}" alt="product image" class="d-flex flex-row mt-1 img-thumbnail" style="width: 25%;">
                <table class="text-center fs-5" style="width: 72%;">                
                        <tr>                            
                            <td><strong>Articulo</strong></td>
                            <td><strong>Costo</strong></td>
                            <td><strong>Cantidad</strong></td>
                            <td><strong>Subtotal</strong></td>
                        </tr>
                        <tr>                            
                            <td>${arrayProduct.name} </td>
                            <td>${arrayProduct.currency} ${arrayProduct.cost}</td>
                            <td><input onchange="suma(arrayProduct);" id="cant" class="cant form-control" type="number" placeholder="Cant." value="1" style="display: initial; width: 30%;"></td>
                            <td><p id="result"></p></td>
                        </tr>
                </table>                
            </div>
        </div>
        `
        /* 
        
        */

    document.getElementById("art").innerHTML = contenido;
}

// Seleccionar tipo de pago
function tipoCredito(radio1, radio2) {
 radio1 = document.getElementById("credito").checked;
 radio2 = document.getElementById("banco").checked;

    if (radio1==true) {
        document.getElementById("tarjeta").innerHTML = `
        <div class="col-5">
        <label for="">Número de tarjeta:
        <input id="numtarjeta" required class="form-control" type="text"></label>
        </div>
        <div class="col-4">
        <label for="">Codigo seg.:<input id="codigo" required class="form-control" type="text"></label>
        </div>
        <div class="col-5">
        <label for="">Vencimiento (MM/AA): <input id="vencimiento" required class="form-control" type="text"></label>
        </div>
        `;
        document.getElementById("numbanco").innerHTML = "";
        } else if (radio2==true) {
            document.getElementById("numbanco").innerHTML =  `
            <label for="">Número de cuenta: <input id="numbanco" required class="form-control" type="text"></label>
            `;
            document.getElementById("tarjeta").innerHTML = "";
        } else if (radio1==false){
            document.getElementById("tarjeta").innerHTML = "";
        }
}


document.addEventListener("DOMContentLoaded", () => {

    getJSONData(PRODUCT_INFO_URL + 50921 + EXT_TYPE).then((resultObj) => {
        if (resultObj.status === "ok") {
            arrayProduct = resultObj.data;
            console.log(arrayProduct);
            showArt(arrayProduct);
            costo = arrayProduct.cost;
            suma(arrayProduct);
            console.log(subTotal)
        }
    });


    document.getElementById("envio1").addEventListener("change", ()=>{
        envio(en1, costoEnvio);
        sessionStorage.setItem("carrito", en1);
    });

    document.getElementById("envio2").addEventListener("change", ()=>{
        envio(en2, costoEnvio);
        sessionStorage.setItem("carrito", en2);
    });

    document.getElementById("envio3").addEventListener("change", ()=>{
        envio(en3, costoEnvio);
        sessionStorage.setItem("carrito", en3);
    });

    document.getElementById("credito").addEventListener("click", ()=>{
        tipoCredito(radio1, radio2);
    });

    document.getElementById("banco").addEventListener("click", ()=>{
        tipoCredito(radio1, radio2);
    });

    document.getElementById('formcart').addEventListener('submit', evento=>{
 
        if( !validar() || !this.checkValidity() ){
            evento.preventDefault();
            evento.stopPropagation();
        }
        
        document.body.classList.add('was-validated');
      
        let eventos=['change', 'input'];
        
        eventos.forEach( evento=> {document.body.addEventListener(evento, validar)})
         
      
      })
    
});