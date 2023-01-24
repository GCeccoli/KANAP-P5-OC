let canapLocalStorage = JSON.parse(localStorage.getItem("article"));
console.log(canapLocalStorage);
const positionArticle = document.getElementById("cart__items");

// En cas de panier vide
function getCanap(){
    if(canapLocalStorage === null || canapLocalStorage == 0) {
        const emptyArticle = `<p> Panier vide </p>`;
        positionArticle.innerHTML = emptyArticle;
    }else{
    for (let article in canapLocalStorage){
        // Creation element article
        let creationArticle = document.createElement("article");
        document.querySelector("#cart__items")
            .appendChild(creationArticle);
        creationArticle.setAttribute("data-id", canapLocalStorage[article].idArticle);
        creationArticle.className = "cart__item";

        // Creation element div
        let articleDivImg = document.createElement("div");
        creationArticle.appendChild(articleDivImg);
        articleDivImg.className = "cart__item__img";

        // insertion element image
        let articleImg = document.createElement("img");
        articleDivImg.appendChild(articleImg);
        articleImg.src = canapLocalStorage[article].imageArticle;
        articleImg.altTxt = canapLocalStorage[article].altTxtArticle;

        // insertion div "cart item content"
        let articleDivContent = document.createElement("div");
        creationArticle.appendChild(articleDivContent);
        articleDivContent.className = "cart__item__content";

        //insertion element div card item content description
        let articleDivDescription = document.createElement("div");
        articleDivContent.appendChild(articleDivDescription)
        articleDivDescription.className = "cart__item__content__description";

        //Insertion du h2
        let articleTitle = document.createElement("h2");
        articleDivDescription.appendChild(articleTitle);
        articleTitle.innerHTML = canapLocalStorage[article].nameArticle;

        //Insertion du nom du produit
        let articleColor = document.createElement("p");
        articleTitle.appendChild(articleColor);
        articleColor.innerHTML = canapLocalStorage[article].colorArticle;

        //Insertion du prix
        let articlePrice = document.createElement("p");
        articleDivDescription.appendChild(articlePrice)
        articlePrice.innerHTML = canapLocalStorage[article].priceArticle + " €";

        // Insertion div card item content settings
        let articleItemsContentSettings = document.createElement("div");
        articleDivContent.appendChild(articleItemsContentSettings)
        articleItemsContentSettings.className = "cart__item__content__settings";

        // Insertion div card iten content settings quantity
        let articleItemsQuantity = document.createElement("div");
        articleItemsContentSettings.appendChild(articleItemsQuantity)
        articleItemsQuantity.className = "cart__item__content__settings__quantity";

        //Insertion de la quantité (base)
        let articleQuantity = document.createElement("p");
        articleItemsQuantity.appendChild(articleQuantity);
        articleQuantity.innerHTML = "Qté : ";

        //Insertion de la quantité (utilisateur)
        let articleQuantityUser = document.createElement("input");
        articleItemsQuantity.appendChild(articleQuantityUser);
        articleQuantityUser.value = canapLocalStorage[article].quantityArticle;
        articleQuantityUser.className = "itemQuantity";
        articleQuantityUser.setAttribute("type", "number");
        articleQuantityUser.setAttribute("min", "1");
        articleQuantityUser.setAttribute("max", "100");
        articleQuantityUser.setAttribute("name", "itemQuantity");

        //Insertion div delete
        let articleDelete = document.createElement("div");
        articleItemsContentSettings.appendChild(articleDelete);
        articleDelete.className = "cart__item__content__settings__delete";

        // Insertion delete
        let articleDelItem = document.createElement("p");
        articleItemsContentSettings.appendChild(articleDelItem);
        articleDelItem.className = "deleteItem";
        articleDelItem.innerHTML = "Supprimer";
    }
    }
}
getCanap();

