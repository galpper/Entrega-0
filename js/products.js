let categoriesArray = [];

function showCategoriesList(array){
    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){ 
        let category = array[i];
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + category.image + `" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4>`+ category.name +` - `+category.currency+` `+category.cost+`</h4> 
                        <p> `+ category.description +`</p> 
                        </div>
                        <small class="text-muted">` + category.soldCount + ` artículos</small> 
                    </div>
                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;         
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    getJSONData(URL101).then((resultObj)=>{
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data.products;
            console.log(categoriesArray);
            showCategoriesList(categoriesArray);           
        }
    });
    let usuario = sessionStorage.getItem("user");
    if (usuario==null){
        Swal.fire({
            position: 'center',
            icon: 'warning',
            title: 'Desea iniciar sesión?',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonColor: 'rgb(55, 217, 50)',
            cancelButtonColor: '#d33',
            confirmButtonText:"Iniciar sesión",
            cancelButtonText:"En otro momento",
        }).then((result) => {
    if (result.isConfirmed) {
    location.href="login.html";
    }})
    document.getElementById("navbarNav").innerHTML += `<ul class="navbar-nav w-100 justify-content-between">
          <li class="nav-item">
            <a class="nav-link active" href="index.html">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="categories.html">Categorías</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="sell.html">Vender</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="login.html">Iniciar sesión</a>
          </li>
        </ul>`
    } else {
        document.getElementById("navbarNav").innerHTML += `<ul class="navbar-nav w-100 justify-content-between">
        <li class="nav-item">
          <a class="nav-link active" href="index.html">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="categories.html">Categorías</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="sell.html">Vender</a>
        </li>
        </ul>`
    };
});

