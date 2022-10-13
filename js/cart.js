let arrayProduct = [];


function suma(item){
    item*costo;
 return
}



function showArt(arrayProduct){
    let contenido = "";
    
        contenido += `
        <td><img src="${arrayProduct.images[0]}" class="imgcarro" alt="" ></td>
    <td>${arrayProduct.name}</td>
    <td>${arrayProduct.cost}</td>
    <td><label for=""><input id="cant" type="text"></label></td>
    <td id="suma"></td>
        `

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

    
    document.getElementById("cant").addEventListener("change", ()=>{
        document.getElementById("suma").innerHTML = cantidad * costo;
    });
});