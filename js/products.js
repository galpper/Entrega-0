let url101 = "https://japceibal.github.io/emercado-api/cats_products/101.json";

fetch(url101)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch(error => console.log(error))

const mostrarData = (data) => {
    console.log(data)
    let listado101 = ``;
    for(let i = 0; i < data.products.length; i++){ 
        listado101 += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + data.products[i].image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ data.products[i].name +` - `+data.products[i].currency+` `+data.products[i].cost+`</h4> 
                        <p> `+ data.products[i].description +`</p> 
                        </div>
                        <small class="text-muted">` + data.products[i].soldCount + ` artículos</small> 
                    </div>
                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = listado101;         
    }
}

