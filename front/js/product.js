const queryString_url_id = window.location.search;
const url = new URLSearchParams(queryString_url_id);
const idProduct = url.get("id");
console.log(idProduct);
let product = "";

let choiceColor = document.getElementById("colors");
let choiceQuantity = document.getElementById("quantity");

getProduct();

// Fonction qui récupère les produits à partir de l'API
function getProduct() {
    fetch("http://localhost:3000/api/products/" + idProduct)
    .then ((response) => {
        return response.json();
    })
    .then(async function (apiResult){
        product = await apiResult;
        if(product){
            getPost(product);
        }
    })
}

function getPost(product) {
    //Intégration de l'image + texte alternatif
    let productImg = document.createElement("img");
    document.querySelector(".item__img").appendChild(productImg);
    productImg.src = product.imageUrl;
    productImg.alt = product.altTxt;
    // Integration du titre du produit
    let productName = document.getElementById("title");
    productName.innerHTML = product.name;
    //Integration du prix
    let productPrice = document.getElementById("price");
    productPrice.innerHTML = product.price;
    //Integration de la description
    let productDescription = document.getElementById("description");
    productDescription.innerHTML = product.description;
    // Insertion des options de couleurs
    for (let colors of product.colors){
        let productColors = document.createElement("option");
        document.getElementById("colors").appendChild(productColors);
        productColors.value = colors;
        productColors.innerHTML = colors;
    }
    addItemToCart(product);
}

//Panier
function addItemToCart(product){
    const sendToCart = document.getElementById("addToCart");
    // Ecouter le panier
    sendToCart.addEventListener("click", ()=> {
        if (choiceQuantity.value > 0 && choiceQuantity.value <= 100 && choiceQuantity != 0){
            //Choix de la couleur
            let canapColor = choiceColor.value;
            //Choix de la quantité
            let canapQuantity = choiceQuantity.value;
            //Options de l'article
            let optionsCanap = {
                colorArticle: canapColor,
                quantityArticle: Number(canapQuantity),
                nameArticle: product.name,
                idArticle: idProduct,
                descriptionArticle: product.description,
                imageArticle: product.imageUrl,
                altTxtArticle: product.altTxt,
                priceArticle: product.price 
            };
        //Stockage des données
        let canapLocalStorage = JSON.parse(localStorage.getItem("article"));

        // Fenêtre popup de confirmation d'ajout au panier.
        function popupConfirm() { window.confirm(`Commande pour ${canapQuantity} ${canapColor} ${product.name} ajoutée au panier. Cliquez sur OK pour voir le panier !`);
        window.location.href = "../html/cart.html";
        };
        
        // Importation dans le local storage
        //Condition si le panier comporte un article
        if (canapLocalStorage){
            const resFind = canapLocalStorage.find(
                (element) => element.idArticle === idProduct && element.colorArticle === canapColor 
            );
            popupConfirm();
        // Produit commandé déjà dans le panier
        if (resFind) {
            let newQuantity = parseInt(optionsCanap.quantityArticle) + parseInt(resFind.quantityArticle);
            resFind.quantityArticle = newQuantity;
            window.localStorage.setItem("produit", canapLocalStorage);
            popupConfirm();
        }else{
        // Produit commandé non présent dans le panier
        canapLocalStorage.push(optionsCanap);
        window.localStorage.setItem("produit", canapLocalStorage);
        popupConfirm();    
        }   
        }else{
        //Si le panier est vide
        canapLocalStorage = [];
        canapLocalStorage.push(optionsCanap);
        window.localStorage.setItem("produit", canapLocalStorage);
        popupConfirm();
        }
    }
    })
}





