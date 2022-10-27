const ORDER_BY_PROD_COUNT = "Costo";
const ORDER_BY_PROD_COST_UP = [];
const ORDER_BY_PROD_COST_DOWN = [];
let productArray = [];
let currentSortCriteria = undefined;
let minCount = undefined;
let maxCount = undefined;
let algo = document.getElementsByClassName("algo");



function sortProduct(criteria, array){
    let result = [];
    if (criteria === ORDER_BY_PROD_COUNT){
        result = array.sort((a,b)=> b.soldCount - a.soldCount);
    } else if (criteria === ORDER_BY_PROD_COST_UP){
        result = array.sort((a,b)=> b.cost - a.cost);
        } else if (criteria === ORDER_BY_PROD_COST_DOWN){
        result = array.sort((a,b)=> a.cost - b.cost);
    }  
    return result;
}

function setCatID(id) {
    localStorage.setItem("productID", id);
    window.location = "product-info.html"
}

function showProductList(){
    let htmlContentToAppend = "";

    for(let i = 0; i < productArray.length; i++){ 
        let product = productArray[i];
        if (((minCount == undefined) || (minCount != undefined && parseInt(product.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(product.cost) <= maxCount))){
        htmlContentToAppend += `
        <div onclick="setCatID(${product.id})" class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="${product.image}" alt="product image" class="img-thumbnail">
                </div>
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <div class="mb-1">
                        <h4 class="algo">${product.name} - ${product.currency} ${product.cost} </h4> 
                        <p> ${product.description}</p> 
                        </div>
                        <small class="text-muted"> ${product.soldCount} artículos</small> 
                    </div>
                </div>
            </div>
        </div>
        `
        document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;         
    }
}
}

function sortAndShowProduct(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        productArray = productsArray;
    }

    productArray = sortProduct(currentSortCriteria, productArray);

    showProductList(productArray);
}

document.addEventListener("DOMContentLoaded", ()=>{
    console.log(URLDEF);
        
    getJSONData(URLDEF).then((resultObj)=>{
        if (resultObj.status === "ok")
        {
            productArray = resultObj.data.products;
            console.log(productArray);
            showProductList(productArray);           
        }
    });

    document.getElementById("sortByCount").addEventListener("click", ()=>{
        sortAndShowProduct(ORDER_BY_PROD_COUNT);
    });

    document.getElementById("sortByCostUp").addEventListener("click", ()=>{
        sortAndShowProduct(ORDER_BY_PROD_COST_UP);
    });

    document.getElementById("sortByCostDown").addEventListener("click", ()=>{
        sortAndShowProduct(ORDER_BY_PROD_COST_DOWN);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", ()=>{
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProductList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", ()=>{
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showProductList();
    });
});
