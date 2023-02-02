function getLocalStorage(){
  let canapLocalStorage = JSON.parse(localStorage.getItem("cart"));
  return canapLocalStorage;
}
getLocalStorage();

async function productFromApi(id){
  let res = await fetch("http://localhost:3000/api/products/" + idProduct);
    return await res.json();
}


/*const positionEmptyCart = document.querySelector("#cart__items");
if(canapLocalStorage === null){
    //Si le panier est vide
    const emptyCart = `<p> Le panier est vide </p>`;
    positionEmptyCart.innerHTML = emptyCart;
    // Si le panier n'est pas vide
} else {
        for (let cart of canapLocalStorage){
            document.getElementById("cart__items").innerHTML = canapLocalStorage.map((article) =>   `<article class="cart__item" data-id="${cart.id}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src=${article.imageUrl} alt=${article.altTxt}>
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>${cart.nameArticle}</h2>
                    <p>${cart.colorArticle} </p>
                    <p>${article.price} €</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${cart.quantityArticle}>
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Supprimer</p>
                    </div>
                  </div>
                </div>
              </article>`)
            };
      }*/



    /*// Insertion de l'élément "article"
        let canapArticle = document.createElement("article");
        document.querySelector("#cart__items").appendChild(canapArticle);
        canapArticle.className = "cart__item";
        canapArticle.setAttribute('data-id', canapLocalStorage[cart].idArticle);

        // Insertion de l'élément "div"
        let productDivImg = document.createElement("div");
        canapArticle.appendChild(productDivImg);
        productDivImg.className = "cart__item__img";
    
        // Insertion de l'image
        let productImg = document.createElement("img");
        productDivImg.appendChild(productImg);
        productImg.src = `fetch("http://localhost:3000/api/products/${imageUrl}")`
        productImg.alt = `fetch("http://localhost:3000/api/products/${altTxt}"`*/
    





/* const positionEmptyCart = document.querySelector("#cart__items");
// Si le panier est vide
 function getPost(){
    if (canapLocalStorage === null || canapLocalStorage == 0) {
        const emptyCart = `<p>Votre panier est vide</p>`;
        positionEmptyCart.innerHTML = emptyCart;
    } else {
    for (let cart in canapLocalStorage){
        // Insertion de l'élément "article"
        let productArticle = document.createElement("article");
        document.querySelector("#cart__items").appendChild(productArticle);
        productArticle.className = "cart__item";
        productArticle.setAttribute('data-id', canapLocalStorage[cart].id);
    
        // Insertion de l'élément "div"
        let productDivImg = document.createElement("div");
        productArticle.appendChild(productDivImg);
        productDivImg.className = "cart__item__img";
    
        // Insertion de l'image
        let productImg = document.createElement("img");
        productDivImg.appendChild(productImg);
        productImg.src = product.imageUrl;
        productImg.alt = product.altTxt;
        
        // Insertion de l'élément "div"
        let productItemContent = document.createElement("div");
        productArticle.appendChild(productItemContent);
        productItemContent.className = "cart__item__content";
    
        // Insertion de l'élément "div"
        let productItemContentTitlePrice = document.createElement("div");
        productItemContent.appendChild(productItemContentTitlePrice);
        productItemContentTitlePrice.className = "cart__item__content__titlePrice";
        
        // Insertion du titre h3
        let productTitle = document.createElement("h2");
        productItemContentTitlePrice.appendChild(productTitle);
        productTitle.innerHTML = canapLocalStorage[cart].name;
    
        // Insertion de la couleur
        let productColor = document.createElement("p");
        productTitle.appendChild(productColor);
        productColor.innerHTML = canapLocalStorage[cart].color;
        productColor.style.fontSize = "20px";
    
        // Insertion du prix
        let productPrice = document.createElement("p");
        productItemContentTitlePrice.appendChild(productPrice);
        productPrice.innerHTML = canapLocalStorage[cart].price + " €";
    
        // Insertion de l'élément "div"
        let productItemContentSettings = document.createElement("div");
        productItemContent.appendChild(productItemContentSettings);
        productItemContentSettings.className = "cart__item__content__settings";
    
        // Insertion de l'élément "div"
        let productItemContentSettingsQuantity = document.createElement("div");
        productItemContentSettings.appendChild(productItemContentSettingsQuantity);
        productItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";
        
        // Insertion de "Qté : "
        let productQte = document.createElement("p");
        productItemContentSettingsQuantity.appendChild(productQte);
        productQte.innerHTML = "Qté : ";
    
        // Insertion de la quantité
        let productQuantity = document.createElement("input");
        productItemContentSettingsQuantity.appendChild(productQuantity);
        productQuantity.value = canapLocalStorage[cart].quantity;
        productQuantity.className = "itemQuantity";
        productQuantity.setAttribute("type", "number");
        productQuantity.setAttribute("min", "1");
        productQuantity.setAttribute("max", "100");
        productQuantity.setAttribute("name", "itemQuantity");
    
        // Insertion de l'élément "div"
        let productItemContentSettingsDelete = document.createElement("div");
        productItemContentSettings.appendChild(productItemContentSettingsDelete);
        productItemContentSettingsDelete.className = "cart__item__content__settings__delete";
    
        // Insertion de "p" supprimer
        let productSupprimer = document.createElement("p");
        productItemContentSettingsDelete.appendChild(productSupprimer);
        productSupprimer.className = "deleteItem";
        productSupprimer.innerHTML = "Supprimer";
    }
    }}
    getPost();*/
