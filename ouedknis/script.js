var liste = [

    { tittle: "Nike j1", image: "jordan.png", description: "hidkkkkkkkkkdjdnjc ddcjndcjcnddcno dcnocdncdodncodnco", prix: "12$", },
    { tittle: "Nike", image: "image.png", description: "hidkkkkkkkk kdjdnjcddcjndcjcnddcnodcnoc dncdodncodncond", prix: "8$", },
    { tittle: "Nike gucci", image: "jordanlv.png", description: "hihidkkkk kkkkkdjdnjcddcjndc jcnddcnodcnocdncdodnco", prix: "12$", },
    { tittle: "Nike", image: "Runner.png", description: "hihidkkkkkkkkkdj dnjcddcjndcjcnddcnod cnocdncdodnco dncondocnoccokcokc", prix: "13$", },
    { tittle: "yeezy", image: "yeezy.png", description: "hihidkkk kkkkkkdjdnjcdd cjndcjcnddcnodc nocdncdodncodncondocnoccokcok", prix: "4$", },

]

for (let index = 0; index < liste.length; index++) {
    document.getElementById("product").innerHTML +=
        `
    <div class="carte">
        <img class="modele" src= ${liste[index].image}>
        <h1 class="tittle"> ${liste[index].tittle}</h1>
        <div class="details">
            <h1>${liste[index].prix}
            <p>${liste[index].description}
        </div>
    <div>
    `

}

function AjouterProduit(event) {
    // Evite d'avoir une actualisation de la page lors du click sur le button
    event.preventDefault();

    // On récupére les valeurs des inputs
    var nom = document.getElementById("nom").value;
    var prix = document.getElementById("prix").value;
    var description = document.getElementById("description").value;

    // On test si la récupération marche
    console.log(nom, prix, description);

    // La div où on veut afficher nos produits
    var contenuHTML = document.getElementById("product");

    // On change l'HTML intérieur de la section par la carte du produit
    contenuHTML.innerHTML += `
      <div class="carte">
        <img src="images/image.webp" />
        <h1>${nom}</h1>
        <p>${description}</p>
        <h6>${prix} $</h6>
      </div>
    `;
}