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
  if(canapLocalStorage == 0 || canapLocalStorage === null){
    const emptyCart = `<p> Panier vide</p>`;
    positionEmptyCart.innerHTML = emptyCart;
    console.log(emptyCart);
  } else {
      for (let cart in canapLocalStorage){
      // Insertion de l'élément "article"
      const canapArticle = document.createElement("article");
      document.querySelector("#cart__items").appendChild(canapArticle);
      canapArticle.className = "cart__item";
      canapArticle.setAttribute('data-id', canapLocalStorage[cart].idKanap);

      // Insertion de l'élément "div"
      const canapDivImg = document.createElement("div");
      canapArticle.appendChild(canapDivImg);
      canapDivImg.className = "cart__item__img";
  
      // Insertion de l'image
      const canapImg = document.createElement("img");
      canapDivImg.appendChild(canapImg);
      canapImg.src = canapLocalStorage[cart].imageKanap;
      canapImg.alt = canapLocalStorage[cart].altKanap;
      
      // Insertion de l'élément "div"
      const canapItemContent = document.createElement("div");
      canapArticle.appendChild(canapItemContent);
      canapItemContent.className = "cart__item__content";
  
      // Insertion de l'élément "div"
      const canapItemContentTitlePrice = document.createElement("div");
      canapItemContent.appendChild(canapItemContentTitlePrice);
      canapItemContentTitlePrice.className = "cart__item__content__titlePrice";

      // Insertion du titre h3
      const canapName = document.createElement("h2");
      canapItemContentTitlePrice.appendChild(canapName);
      canapName.innerHTML = canapLocalStorage[cart].nameKanap;

      // Insertion de la couleur
      const canapColor = document.createElement("p");
      canapName.appendChild(canapColor);
      canapColor.innerHTML = canapLocalStorage[cart].colorKanap;
  
      // Insertion du prix
      const canapPrice = document.createElement("p");
      canapItemContentTitlePrice.appendChild(canapPrice);
      canapPrice.innerHTML = canapLocalStorage[cart].priceKanap + " €";

      // Insertion de l'élément "div"
      const canapItemContentSettings = document.createElement("div");
      canapItemContent.appendChild(canapItemContentSettings);
      canapItemContentSettings.className = "cart__item__content__settings";
  
      // Insertion de l'élément "div"
      const canapItemContentSettingsQuantity = document.createElement("div");
      canapItemContentSettings.appendChild(canapItemContentSettingsQuantity);
      canapItemContentSettingsQuantity.className = "cart__item__content__settings__quantity";
      
      // Insertion de "Qté : "
      const canapQte = document.createElement("p");
      canapItemContentSettingsQuantity.appendChild(canapQte);
      canapQte.innerHTML = "Qté : ";
  
      // Insertion de la quantité
      const canapQuantity = document.createElement("input");
      canapItemContentSettingsQuantity.appendChild(canapQuantity);
      canapQuantity.value = canapLocalStorage[cart].quantityKanap;
      canapQuantity.className = "itemQuantity";
      canapQuantity.setAttribute("type", "number");
      canapQuantity.setAttribute("min", "1");
      canapQuantity.setAttribute("max", "100");
      canapQuantity.setAttribute("name", "itemQuantity");

      // Insertion de l'élément "div"
      const canapDeleteSettings = document.createElement("div");
      canapItemContentSettings.appendChild(canapDeleteSettings);
      canapDeleteSettings.className = "cart__item__content__settings__delete";
  
      // Insertion de "p" supprimer
      const canapDelete = document.createElement("p");
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
  const deleteBtn = document.querySelectorAll(".deleteItem");

  // Création d'une boucle qui parcourt le tableau
  for (let i = 0; i < deleteBtn.length; i++){
      //On écoute l'évenement
      deleteBtn[i].addEventListener("click" , () => {
          //On selectionne le produit via son id et sa couleur
          let deleteCanap = canapLocalStorage[i].idKanap;
          let colorDelete = canapLocalStorage[i].colorKanap;

          //On selectionne les éléments à garder et on supprime l'élément en cliquant sur le bouton
          canapLocalStorage = canapLocalStorage.filter( el => el.idKanap !== deleteCanap || el.colorKanap !== colorDelete );
          
          //Mise à jour du panier
          updateCart();

          //Alerte produit supprimé et on rafraichit la page
          alert("Votre produit à bien été supprimé.");
          location.reload();
      })
  }
}
deleteCanap();

// Récupération de la quantité de produit

function getTotals(){

  // Récupération du total des quantités
  const canapQuantityTotal = document.getElementsByClassName('itemQuantity');
  totalQuantity = 0;

  for (let i = 0; i < canapQuantityTotal.length; ++i) {
    totalQuantity += canapQuantityTotal[i].valueAsNumber;
  }

  let productTotalQuantity = document.getElementById('totalQuantity');
  productTotalQuantity.innerHTML = totalQuantity;
  console.log(totalQuantity);

  // Récupération du prix total
  totalPrice = 0;

  for (let i = 0; i < canapQuantityTotal.length; ++i) {
      totalPrice += (canapQuantityTotal[i].valueAsNumber * canapLocalStorage[i].priceKanap);
  }

  let productTotalPrice = document.getElementById('totalPrice');
  productTotalPrice.innerHTML = totalPrice;
  console.log(totalPrice);
}
getTotals();

function updateQuantity() {
  // Récupération de l'élément
  let quantityModified = document.querySelectorAll(".itemQuantity");

  //Boucle pour itérer le tableau
  for (let k = 0; k < quantityModified.length; k++){
    // Ecoute de l'évènement
    quantityModified[k].addEventListener("change" , (event) => {
          // Annulation du comportement par defaut
          event.preventDefault();

          //Récupération de la quantité de base
          let quantityModif = canapLocalStorage[k].quantityKanap;
          // Récupération de la nouvelle quantité
          let qttModifValue = quantityModified[k].valueAsNumber;
          // Récupération de l'id
          let idItem = canapLocalStorage[k].idKanap;
          
          //Création d'une variable qui prend en compte la nouvelle quantité et l'id du produit
          const resultFind = canapLocalStorage.find((el) => el.qttModifValue !== quantityModif && el.idKanap === idItem);

          //Enregistrement de la nouvelle quantité
          resultFind.quantityKanap = qttModifValue;
          canapLocalStorage[k].quantityKanap = resultFind.quantityKanap;

          // Mise à jour du local storage
          updateCart();
      
          // Rafraîchissement rapide de la page
          location.reload();
      })
  }
}
updateQuantity();

// Partie Validation du formulaire avec Regex

function getForm(){
  let form = document.querySelector(".cart__order__form");

  //Création des expressions régulières
  
}