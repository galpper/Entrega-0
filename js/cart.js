let arrayProduct = [];

function showArt(arrayProduct){
    let contenido = "";
    
        contenido += `
        <td>${arrayProduct.images[0]}</td>
    <td>${arrayProduct.name}</td>
    <td>${arrayProduct.cost}</td>
    <td><label for=""><input type="text"></label></td>
    <td></td>
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

        }
    });
});