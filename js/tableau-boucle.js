var fruitsLegumes = ['banane', 'fraise', 'mangue', 'cerise'];
var panier = [];
// console.log(fruitsLegumes.length)
for(var i = fruitsLegumes.length; i > 0; i--){
    var fruitRemoved = fruitsLegumes.shift();
    panier.push(fruitRemoved);
    console.log(i);
}

console.log("panier: ",panier);