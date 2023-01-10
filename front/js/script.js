function collecteProduits(){
    return (fetch("http://localhost:3000/api/products")
    .then (details => details.json())
    .then ((promiseDetails) => {
        detailsProduits = promiseDetails;
        console.log(detailsProduits);
        })
    );
};

async function donneesProduit(){
    await collecteProduits();
    const donneesProduits = detailsProduits;
    document.getElementById("items").innerHTML = donneesProduits.map((produits) => `<a hrerf="./product.html?id=${produits._id}"> <article> <img src="${produits.imageUrl}" alt="${produits.altTxt}"> <h3 class="productName">${produits.name}</h3> <p class="productDescription">${produits.description}></p> </article> </a>`).join("")
};
donneesProduit();
