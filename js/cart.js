let arrayProduct = [];
let en1 = 15;
let en2 = 7;
let en3 = 5;
let envioTotal = 0;
let costoEnvio = 0;
let total = 0;


function suma(array) {
    let cant = document.getElementById("cant").value;
    let resultado = arrayProduct.currency + " " + (array.cost * cant);
    costoEnvio = (array.cost * cant);
    document.getElementById("result").innerHTML = resultado;
    document.getElementById("subTotal").innerHTML = resultado;
    
  }

function envio (array, array2){
envioTotal = "USD "+((array*array2) /100);
document.getElementById("envio").innerHTML = envioTotal;
document.getElementById("total").innerHTML = (resultado+array*array2);
};



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
                            <td><input onchange="suma(arrayProduct);" id="cant" class="form-control" type="number" placeholder="Cant." value="1" style="display: initial; width: 30%;"></td>
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








document.addEventListener("DOMContentLoaded", () => {

    getJSONData(PRODUCT_INFO_URL + 50921 + EXT_TYPE).then((resultObj) => {
        if (resultObj.status === "ok") {
            arrayProduct = resultObj.data;
            console.log(arrayProduct);
            showArt(arrayProduct);
            costo = arrayProduct.cost;
            suma(arrayProduct);
            console.log(subTotal)
            envio(en1, costoEnvio);
        }
    });


    document.getElementById("en1").addEventListener("change", ()=>{
        envio(en1, costoEnvio);
    });

    document.getElementById("en2").addEventListener("change", ()=>{
        envio(en2, costoEnvio);
    });

    document.getElementById("en3").addEventListener("change", ()=>{
        envio(en3, costoEnvio);
    });

        
    
});