/**Exo4
         *  **Traduire en code ceci : faire une liste qui s'appelera panier, elle référencera à la fois le nom du légume ainsi que sont prix à l'unité**

- **Traduire en ceci: crée une liste qui s'appelera prixTotalsFruitsLegumes cette liste devra contenir le total pour chaque fruit&légume. Ce prix total sera variable par rapport à la quantité. (à noté que cette liste au début est vide).**

- **Traduire en code ceci : crée un résultat permettant de faire le total de prixTotalsFruitsLegumes.**

         */

        var panier2 = [{
            nomFruit : "fraise",
            quantite : 12,
            prixU : 4},
            {
               nomFruit : "pomme",
               quantite : 8,
               prixU : 3},
               {
                   nomFruit : "banane",
                   quantite : 5,
                   prixU : 2
               }];
        var prixtotalFruitsLegumes = [];
        var resultat = 0;
      
        for(var article of panier2){
            //console.log("les articles du panier: ", article);
            //console.log("le nom des articles: ", article.nomFruit);
            console.log("le prix unitaire des articles: ", article.prixU);
            console.log("la quantite des articles: ", article.quantite);
            // on additionne tous les prix
            resultat += article.prixU*article.quantite;
           
            //console.log("le prix total de tous les articles est: ",article.prixU*article.quantite);
             // on remplit le tableau avec le prix total et le nom de l'article
             prixtotalFruitsLegumes.push(article.nomFruit, article.prixU*article.quantite);
             console.log("prix total par article: ", prixtotalFruitsLegumes);
            }
            console.log("prix total: ", resultat);

            //autre methode avec boucle for avec itération
             var total= 0;
                for(var i = 0; i<panier2.length; i++){
                total += panier2[i].quantite*panier2[i].prixU;
                }
                console.log(total);
