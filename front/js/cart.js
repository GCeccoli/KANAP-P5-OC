// Récupère les données de mon stockage local
let canapLocalStorage = JSON.parse(localStorage.getItem("cart"));
console.log(canapLocalStorage);

//Fonction de mise à jour du panier
function updateCart (){
  localStorage.setItem("cart", JSON.stringify(canapLocalStorage));
};

// Insérer les éléments dans le html
const positionEmptyCart = document.querySelector("#cart__items");
function addCart(){
  if(canapLocalStorage == 0){
    const emptyCart = `<p> Panier vide</p>`;
    positionEmptyCart.innerHTML = emptyCart;
    console.log(emptyCart);
  } else {
      for (let cart in canapLocalStorage){
      // Insertion de l'élément "article"
      let canapArticle = document.createElement("article");
      document.querySelector("#cart__items").appendChild(canapArticle);
      canapArticle.className = "cart__item";
      canapArticle.setAttribute('data-id', canapLocalStorage[cart].idKanap);

      // Insertion de l'élément "div"
      let canapDivImg = document.createElement("div");
      canapArticle.appendChild(canapDivImg);
      canapDivImg.className = "cart__item__img";
  
      // Insertion de l'image
      let canapImg = document.createElement("img");
      canapDivImg.appendChild(canapImg);
      canapImg.src = canapLocalStorage[cart].imageKanap;
      canapImg.alt = canapLocalStorage[cart].altKanap;
      
      // Insertion de l'élément "div"
      let canapItemContent = document.createElement("div");
      canapArticle.appendChild(canapItemContent);
      canapItemContent.className = "cart__item__content";
  
      // Insertion de l'élément "div"
      let canapItemContentTitlePrice = document.createElement("div");
      canapItemContent.appendChild(canapItemContentTitlePrice);
      canapItemContentTitlePrice.className = "cart__item__content__titlePrice";

      // Insertion du titre h3
      let canapName = document.createElement("h2");
      canapItemContentTitlePrice.appendChild(canapName);
      canapName.innerHTML = canapLocalStorage[cart].nameKanap;

      // Insertion de la couleur
      let canapColor = document.createElement("p");
      canapName.appendChild(canapColor);
      canapColor.innerHTML = canapLocalStorage[cart].colorKanap;
  
      // Insertion du prix
      let canapPrice = document.createElement("p");
      canapItemContentTitlePrice.appendChild(canapPrice);
      canapPrice.innerHTML = canapLocalStorage[cart].priceKanap + " €";

      // Insertion de l'élément "div"
      let canapItemContentSettings = document.createElement("div");
      canapItemContent.appendChild(canapItemContentSettings);
      canapItemContentSettings.className = "cart__item__content__settings";
  
      // Insertion de l'élément "div"
      let canapItemContentSettingsQuantity = document.createElement("div");
      canapItemContentSettings.appendChild(canapItemContentSettingsQuantity);
      canapItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";
      
      // Insertion de "Qté : "
      let canapQte = document.createElement("p");
      canapItemContentSettingsQuantity.appendChild(canapQte);
      canapQte.innerHTML = "Qté : ";
  
      // Insertion de la quantité
      let canapQuantity = document.createElement("input");
      canapItemContentSettingsQuantity.appendChild(canapQuantity);
      canapQuantity.value = canapLocalStorage[cart].quantityKanap;
      canapQuantity.className = "itemQuantity";
      canapQuantity.setAttribute("type", "number");
      canapQuantity.setAttribute("min", "1");
      canapQuantity.setAttribute("max", "100");
      canapQuantity.setAttribute("name", "itemQuantity");

      // Insertion de l'élément "div"
      let canapDeleteSettings = document.createElement("div");
      canapItemContentSettings.appendChild(canapDeleteSettings);
      canapDeleteSettings.className = "cart__item__content__settings__delete";
  
      // Insertion de "p" supprimer
      let canapDelete = document.createElement("p");
      canapDeleteSettings.appendChild(canapDelete);
      canapDelete.className = "deleteItem";
      canapDelete.innerHTML = "Supprimer";
    }
  }
}
addCart();

// Suppression d'un produit
function deleteCanap() {
  // On récupère le bouton supprimer
  let deleteBtn = document.querySelectorAll(".deleteItem");

  // Création d'une boucle qui parcourt le tableau
  for (let i = 0; i < deleteBtn.length; i++){
      //On écoute l'évenement
      deleteBtn[i].addEventListener("click" , (event) => {
          // On annule le comportement par défaut de l'event.
          event.preventDefault();

          //On selectionne le produit via son id et sa couleur
          let deleteCanap = canapLocalStorage[i].idKanap;
          let colorDelete = canapLocalStorage[i].colorKanap;

          canapLocalStorage = canapLocalStorage.filter( el => el.idKanap !== deleteCanap || el.colorKanap !== colorDelete );
          
          //Mise à jour du panier
          updateCart();

          //Alerte produit supprimé et refresh
          alert("Votre produit à bien été supprimé.");
          location.reload();
      })
  }
}
deleteCanap();




