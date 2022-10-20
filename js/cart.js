let arrayProduct = [];
let en1 = 0.15;
let en2 = 0.07;
let en3 = 0.05;
let total = 0;

// no funciona
function suma(array) {
    let cant = document.getElementById("cant").value;
    let resultado = arrayProduct.currency + " " + (array.cost * cant);
    let result = (array.cost * cant);
    document.getElementById("result").innerHTML = resultado;
    total= result;
}

function envio (envio){
let subTotal = document.getElementById("result");
total = (envio*subTotal)+subTotal;
document.getElementById("total").innerHTML = total;
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
                            <td id="result"></td>
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
            cantidad = document.getElementById("cant").value;
            suma(arrayProduct);
        }
    });

    document.getElementById("en1").addEventListener("change", ()=>{
        envio(en1);
    });

    document.getElementById("en2").addEventListener("change", ()=>{
        envio(en2);
    });

    document.getElementById("en3").addEventListener("change", ()=>{
        envio(en3);
    });
    
});