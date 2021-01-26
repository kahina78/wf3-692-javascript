var panier = [
    {
        fruit: 'pomme',
        quantity: 8,
        prixUniter: 1.90
    },
    {
        fruit: 'banane',
        quantity: 9,
        prixUniter: 1.50
    },
    {
        fruit: 'mangue',
        quantity: 10,
        prixUniter: 1.30
    }
];

var prixTotalLegumes = [];

for(var article of panier){
    prixTotalLegumes.push(article.quantity * article.prixUniter);
}

console.log(prixTotalLegumes);
var prixTotal = 0;
for(var i = prixTotalLegumes.length; i > 0; i--){
    var prixLegume = prixTotalLegumes.shift();
    prixTotal += prixLegume;    
}

console.log(prixTotal);
console.log(prixTotalLegumes);


