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
//Cerrar sesion
function logout(){
    sessionStorage.removeItem("user")
};

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
    <div class="nav-item dropdown">
    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
      <img src="/img/user.jpg" alt="" width="32" height="32" class="rounded-circle me-2">
      <strong>${usuario}</strong>
    </a>
    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
      <li><a class="dropdown-item" href="cart.html">Mi carrito</a></li>
      <li><a class="dropdown-item" href="my-profile.html">Mi perfil</a></li>
      <li><hr class="dropdown-divider"></li>
      <li onclick="logout()"><a class="dropdown-item" href="index.html">Cerrar sesión</a></li>
    </ul>
  </div>
</div> 
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
  