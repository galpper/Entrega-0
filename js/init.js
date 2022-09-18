const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const ID = localStorage.getItem("catID");
const ID2= localStorage.getItem("productID");
const URLDEF = PRODUCTS_URL+ID+EXT_TYPE;
const URLINFO = PRODUCT_INFO_URL+ID2+EXT_TYPE;
const URLCOMMENTS = PRODUCT_INFO_COMMENTS_URL+ID2+EXT_TYPE;

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

document.addEventListener("DOMContentLoaded", ()=>{
  
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
  } else if (usuario != null){
    document.getElementById("navbarNav").innerHTML +=
    `<ul class="navbar-nav w-100 justify-content-between">
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
      <a class="nav-link" href="my-profile.html">${usuario}</a>
    </li>
    </ul>`
  }
  else {
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
  }
  });
  