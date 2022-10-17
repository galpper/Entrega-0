let arrayProduct = [];


function suma(arrayProduct){
    let cant = document.getElementById("cant").value;
     let resultado = arrayProduct.cost * cant;
    document.getElementById("result").innerHTML = resultado;
}



function showArt(arrayProduct){
    let contenido = "";
    
        contenido += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="${arrayProduct.images[0]}" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex justify-content-start text-center">
                        <h4> ${arrayProduct.name} - ${arrayProduct.currency} ${arrayProduct.cost} <input class="form-control" type="number" placeholder="Cant." id="cant"></h4> <p id="result"></p>
                    </div>
            </div>
        </div>
                `
        /*       
         <td><img src="${arrayProduct.images[0]}" class="imgcarro" alt="" ></td>
         <td>${arrayProduct.name}</td>
         <td>${arrayProduct.cost}</td>
         <td><input class="form-control" type="number" placeholder="Cant." id="cant"></td>
         <td id="result"></td> 
        */
        

        document.getElementById("art").innerHTML = contenido;         
}








document.addEventListener("DOMContentLoaded", ()=>{

    getJSONData(PRODUCT_INFO_URL+50921+EXT_TYPE).then((resultObj)=>{
        if (resultObj.status === "ok")
        {
            arrayProduct = resultObj.data;
            console.log(arrayProduct);
            showArt(arrayProduct);  
            costo = arrayProduct.cost;
            cantidad = document.getElementById("cant").value;
        }
    });

    
    document.getElementById("cant").addEventListener("onchange", ()=>{
        suma(arrayProduct);
    });
});