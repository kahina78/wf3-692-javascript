var fruits = {
    pomme: 4,
    poire: 0,
    banane: 10,
    tomate: 6
}

// Itérer sur l'objet fruits
/**
 * On s'attendra alors à
 * Output console: key: pomme value: 4
 * Output console: key: poire: value: 0 
 * Output console: key: banane value: 10
 * Output console: key: pomme value: 6
 */

 // @ToDo 
 
 for(var fruit in fruits){
    console.log("key: ",fruit, "value: ", fruits[fruit]);
 }