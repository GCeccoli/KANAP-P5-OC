//Initialisation du Local Storage + transformation en fichiere JSON
let canapLocalStorage = JSON.parse(localStorage.getItem("product"));
const positionArticle = document.getElementById("cart__items");

// En cas de panier vide
function getArticle(){
    if(canapLocalStorage === null) {
        const emptyArticle = `<p>Panier vide</p>`;
        positionArticle.innerHTML = emptyArticle;
    }else{
        // Creation element article
        let creationArticle = document.createElement("article");
        document.getElementsByClassName("cart__item")
            .appendChild("creationArticle");
        creationArticle.setAttribute("data-id", canapLocalStorage[product].idProduct);
        // Creation element div
        let articleDivImg = document.createElement("div");
        document.getElementsByClassName("cart__item__img")
            .appendChild(articleDivImg);
        // insertion element image
        let articleImg = document.createElement("img");
        articleDivImg.appendChild(articleImg);
        articleImg.src = canapLocalStorage[product].imageArticle;
        articleImg.altTxt = canapLocalStorage[product].altTxtArticle;
        // insertion div "cart item content"
        let articleDivContent = document.createElement("div");
        document.getElementsByClassName("cart__item__content")
            .appendChild(articleDivContent);
        //insertion element div card item content description
        let articleDivDescription = document.createElement("div");
        document.getElementsByClassName("cart__item__content__description")
            .appendChild(articleDivDescription);
        //Insertion du h2
        let articleTitle = document.createElement("h2");
        document.getElementsByTagName("h2")
            .appendChild(articleTitle);
        articleTitle.innerHTML = canapLocalStorage[product].nameArticle; 
    }
}