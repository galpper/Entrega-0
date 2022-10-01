let arrayProduct = [];
let arrayComment = [];

function setCatID(id) {
  localStorage.setItem("productID", id);
  window.location = "product-info.html"
}

function showProductDetail(arrayProduct){
    let htmlContentToAppend = "";
    
        htmlContentToAppend += `
        <div>
        <div class="container-fluid" style=" background-color: #fff; padding: 11px; height: 580px;">
            <div class="row">
                <div class="col-lg-4 order-lg-2 order-1 tamaño">
                    <div class="image_selected"><div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src="${arrayProduct.images[0]}" class="d-block w-100" alt="${arrayProduct.images[0]}">
                      </div>
                      <div class="carousel-item">
                        <img src="${arrayProduct.images[1]}" class="d-block w-100" alt="${arrayProduct.images[1]}">
                      </div>
                      <div class="carousel-item">
                        <img src="${arrayProduct.images[2]}" class="d-block w-100" alt="${arrayProduct.images[2]}">
                      </div>
                      <div class="carousel-item">
                        <img src="${arrayProduct.images[3]}" class="d-block w-100" alt="${arrayProduct.images[2]}">
                      </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div></div>
                </div>
                <div class="col-lg-6 order-3">
                    <div class="product_description margin">
                        <div class="product_name"><h1>${arrayProduct.name}</h1></div>
                        <div class="product-rating"><span class="badge badge-success"><i class="fa fa-star"></i> 4.5 Star</span> <span class="rating-review">${arrayProduct.soldCount} Vendidos</span></div>
                        <div> <span class="product_price">${arrayProduct.currency} ${arrayProduct.cost}</span> </div>
                        <hr class="singleline">
                        <div> <span class="product_info">Descripción: ${arrayProduct.description}<span><br><span class="product_info">Categoria: ${arrayProduct.category}<span></div>
                        <hr class="singleline">
                        <div class="row row-underline">
                <div class="col-md-6"> <span class=" deal-text">Productos relacionados</span> </div>
                <div class="col-md-6"> <a href="#" data-abc="true"> <span class="ml-auto view-all"></span> </a> </div>
            </div><div class="col-md-5">
            <div class="row padding-2">
                <div class="col-md-5 padding-0 recom">
                    <div class="bbb_combo">
                        <div onclick="setCatID(${arrayProduct.relatedProducts[0].id})" class="bbb_combo_image" ><img class="bbb_combo_image" src="${arrayProduct.relatedProducts[0].image}" alt=""></div>
                        <div class="product_name bbb_combo_image"><h4>${arrayProduct.relatedProducts[0].name}</h4></div>
                    </div>
                </div>
                <div class="col-md-5 padding-0">
                    <div class="bbb_combo">
                        <div onclick="setCatID(${arrayProduct.relatedProducts[1].id})" class="bbb_combo_image"><img class="bbb_combo_image" src="${arrayProduct.relatedProducts[1].image}" alt=""></div>
                        <div class="product_name bbb_combo_image"><h4>${arrayProduct.relatedProducts[1].name}</h4></div>
                    </div>
                    
                </div>
            </div> 
            </div>
            <div id="coment">
            </div>
            </div>
               
            </div>
            
        `
        document.getElementById("contenido").innerHTML = htmlContentToAppend;         
    }

    function estrellas(array){
      var estrella="";
      for (let i = 1; i <= 5; i++) {
        if(i<=array){
          estrella += `<i class="fas fa-star yellow"></i>`;
        } else {
          estrella += `<i class="far fa-star yellow"></i>`;
        }
      }
      return estrella;
    }

   function showComment(array){
      let comment = "";
      for (let i = 0; i < array.length; i++) {
        const com = array[i];
        comment += `
        <li>
      <div class="col" style="height: 100px;
      width: 100%;
      margin-bottom: 10px;">
          <div class="card shadow-sm center" >
            <div class="card-body" >
            <h5 class="card-title">${com.user}${estrellas(com.score)}</h5>
              <p class="card-text">${com.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <small class="text-muted">${com.dateTime}</small>
              </div>
            </div>
          </div>
        </div>
        </li>
         `
      }
      document.getElementById("comentarios").innerHTML = comment;
    }
    
    
    

      



document.addEventListener("DOMContentLoaded", ()=>{

    getJSONData(URLINFO).then((resultObj)=>{
        if (resultObj.status === "ok")
        {
            arrayProduct = resultObj.data;
            console.log(arrayProduct);
            showProductDetail(arrayProduct);   

        }
    });

    getJSONData(URLCOMMENTS).then((resultObj)=>{
        if (resultObj.status === "ok")
        {
            arrayComment = resultObj.data;
            console.log(arrayComment);  
            showComment(arrayComment);

        }
    });
});