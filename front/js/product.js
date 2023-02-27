const queryString_url_id = window.location.search;
const url = new URLSearchParams(queryString_url_id);
const idProduct = url.get("id");
let product = "";

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

getProduct();

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
}

let choiceQuantity = document.querySelector("#quantity");
let choiceColor = document.querySelector("#colors");
let sendToCart = document.querySelector("#addToCart");

sendToCart.addEventListener("click", ()=>{

    // Chercher le panier dans le LocalStorage
    function getCart(){
        return JSON.parse(localStorage.getItem("cart"));
    };
    let cart = getCart()||[];
    //console.log(cart);

    // On enregistre le panier dans le localStorage
    function saveCart(cart){
        localStorage.setItem("cart", JSON.stringify(cart))
    };

    // Fonction d'ajout au panier
    function addToCart (product){
        let addedItem = {
            idKanap: idProduct,
            colorKanap: choiceColor.value,
            quantityKanap: choiceQuantity.value,
            nameKanap: product.name,
            imageKanap: product.imageUrl,
            altKanap: product.altTxt,
            priceKanap: product.price
        };

        // On recherche si le produit est déjà dans le panier
        let foundProduct = cart.find(p => p.idKanap == idProduct && p.colorKanap == choiceColor.value);
        alert("Produit ajouté au panier");
        //console.log(foundProduct);

        // Si le produit n'est pas dans le panier on l'incrémente sinon, on crée un nouveau tableau.
        if (foundProduct !== undefined){
            foundProduct.quantityKanap = parseInt(foundProduct.quantityKanap) + parseInt(choiceQuantity.value);
        } else {
            cart.push(addedItem);
            
        }
        
        saveCart(cart);
    }
    addToCart(product);
});










