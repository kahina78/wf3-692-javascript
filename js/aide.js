// Boucle pour itérer dans un objet(collection, dictionnaire)
var monObj = {
    foo: "bar",
    hello: "world",
    age: 30
}

for(var keyObject in monObj){
    console.log("key: ",keyObject, "value: ", monObj[keyObject]);
}

var tableau3 = [];
// Comment ajouter dans un tableau ?
console.log("Le tableau quand il est vide: ", tableau3);
tableau3[0] = "tomate";
console.log("Le tableau aprés un ajout: ", tableau3);
console.log(tableau3[0]);

// Ajoute à la fin du tableau
tableau3.push("banane");
console.log("Ajoute banane à la fin du tableau: ",tableau3[1]);

// Ajoute au début du tableau
tableau3.unshift("poire");
console.log("Ajoute poire au debut du tableau: ", tableau3);

// supprimer le dernière élément d'un tableau
tableau3.pop();
console.log("la méthode pop supprime banane à la fin du tableau : ", tableau3);

// supprimer le première élément d'un tableau
tableau3.shift();
console.log("la méthode shift supprime poire au début du tableau: ", tableau3);

}