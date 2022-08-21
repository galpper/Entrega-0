document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("autos").addEventListener("click", function() {
        localStorage.setItem("catID", 101);
        window.location = "products.html"
    });
    document.getElementById("juguetes").addEventListener("click", function() {
        localStorage.setItem("catID", 102);
        window.location = "products.html"
    });
    document.getElementById("muebles").addEventListener("click", function() {
        localStorage.setItem("catID", 103);
        window.location = "products.html"
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
}
});
