window.onload = function(){//Permet d'éxecuter le html en premier
    // Avant
    var p = document.getElementsByTagName('p');
    var div = document.getElementsByTagName('div');
    var greenP = document.getElementById('green');
    var p1 = document.getElementsByClassName('p1');
    console.log("greenP: ",greenP, "div: ", div, "all paragraph: ", p, "p1: ", p1);
    // Aujourd'hui. Un querySelctor ne séléctionne qu'un élément à la fois
    var pWithQuerySelectorByTagName = document.querySelector('p');
    var pWithQuerySelectorById = document.querySelector('#green');
    var pWithQuerySelectorByClassName =  document.querySelector('.p1');
    console.log("pWithQuerySelector: ", pWithQuerySelectorByTagName); 
    console.log("pWithQuerySelectorById: ", pWithQuerySelectorById);
    console.log("pWithQuerySelectorByClassName: ", pWithQuerySelectorByClassName);
    
    // Pour pouvoir récupérer plusieurs éléments avec querySelector
    // Il faut utiliser querySelectorAll()
    var getAllParagrapheWithQuerySelectorAll = document.querySelectorAll('p');
    console.log("getAllParagrapheWithQuerySelectorAll: ", getAllParagrapheWithQuerySelectorAll)

    //Exercice
    //Récuperer des éléments html
    //Par nom de balise
    var Ddiv = document.getElementsByTagName("div");
    // Par Classe
    var classDiv = document.getElementsByClassName("card");
    // Par Id
    var idDiv = document.getElementById("card");
    // Afficher dans la console
    console.log("classDiv: ", classDiv, "idDiv: ", idDiv);

    // Récupérer des éléments html par les QuerrySelector
    // Par classe
    var dQuerrySelectorByClassName = document.querySelector(".card");
    // Par Id
    var dQuerrySelectorById = document.querySelector("#card");
    // Par nom de Balise
    var dQuerrySelectorByTagName = document.querySelector("div");
    //Sélectionner tous les paragraphes
    var ttParagraph = document.querySelectorAll("p");
    // Afficher dans la console
    console.log("dQuerrySelectorByClassName: ", dQuerrySelectorByClassName, "dQuerrySelectorById: ", dQuerrySelectorById, "dQuerrySelectorByTagName: ", dQuerrySelectorByTagName, "ttParagraph: ", ttParagraph);

    // Les types:
    var a = 1; //un nombre
    var b = ""; // chaine de caractère
    var c = [];// un tableau
    var d ={        // un objet est un ensemble d'éléments de tous les types (comme un tableau)
        color: "red",
        number: 1,
        tableau: [],
        obj: {},
        fonction: function(){},
        bool1: true,
        bool2: false

    };
    console.log(typeof d.bool1, typeof d.bool2, typeof d.fonction, typeof d.number, typeof d.tableau, typeof d.obj);//typeof permet de retourner le type de l'élément. 
    //On appelle l'élément d'un objet par leNomDeLobjet.leNomDeLélément
    var e = function(){}; // une fonction
    var f = true || false; // un booléen
//Les boucles for
for(var i=0; i<=10; i++){
    console.log("boucle for ", i);
}

//boucle while
var j= 0;
while(j<= 10){
    console.log("boucle while ", j);
    j++;
}

//Les tableaux
var tableau = ["hello", "world!"];
console.log("valeur 0 du tableau est: ", tableau[0]);
console.log("valeur 1 du tableau est: ", tableau[1]);

//afficher les éléments du tableau à l'aide d'une boucle for
for(i=0; i<2;i++){
    console.log("la valeur ",i , "du tableau est: ", tableau[i]);  
}
//exo 2
 var color =["red", "blue", "white", "black", "orange","tomato","yellow"];
 for(i=0; i<color.length; i++){
     //taille du tableau est donnée par la fonction length (nomDuTableau.length)
    console.log("la valeur d'indice ",i , "du tableau color est: ", color[i]); 
 }

 var tab2 = ["foo", "bar", "foo", "baz"];
 for(var valeur of tab2){
     console.log(" les éléments du tableau sont: ",valeur);
 }

 var objet2 = {
     foo: "bar",
     hello:"world",
     age: 30
    }
    for(var keyobj in objet2){
        console.log("la clé de l'objet2: ", keyobj, "a pour valeur :", objet2[keyobj]);
    }

    //exo3
    var fruits ={
        pomme: 4,
        poire: 0,
        banane: 10,
        tomate :6
    }
    // Itérer sur les objets fruits:
    /**
     * On s'attendra alors à
     * output console: key: pomme value: 4
     * output console: key: poire value: 0
     * etc
     */

     for(i in fruits){
         console.log("key: ",i,"value: ",fruits[i]);
     }

     // comment ajouter/supprimer un élément dans un tableau

     var tab3 = [];
     console.log("le tableau est vide", tab3);
     tab3[5] = "tomate";
     console.log("le tableau après ajout: ", tab3);
     console.log("afficher l'élément d'indice 5",tab3[5]);
     // Ajouter un élément à la fin avec push
     tab3.push("banane");//ajoute un élément à la fin du tableau
     console.log("Ajouter un élément à la fin ",tab3);
     //ajouter un élément au début avec unshift
     tab3.unshift("poire");
     console.log("ajouter un élément au début ",tab3); 
    // supprimer un élément
    tab3.pop();//supprime le dernier élément
    console.log("supprime le dernier élément ",tab3);

     tab3.shift();//supprime le premier élément
     console.log("supprime le premier élément ",tab3);

    /**Exo1
     * Traduire en code ceci : faire une liste 12 fruits et légumes qui s'appelera fruitsLegumes.

        Traduire en code ceci: faire une liste qui référence tous ce que vous avez mis dans un panier, ce panier doit être vide au départ.
    */

    var fruitsLegumes = ["pomme", "banane", "poire", "orange", "fraise", "cerise", "poireau", "poivron", "tomate", "carrotte", "laitue", "asperge"];
    var panier = [];

       // for(var valeur of fruitsLegumes){
            for(i=fruitsLegumes.length; i>0;i--){
            
        
            x = fruitsLegumes.shift();
            panier.push(x);
            console.log("le panier se remplie avec ",panier);
            
            console.log("fruitsLegumes se vide de ",fruitsLegumes);
            }
        //}

        /**Exo 2
         * Traduir en code ceci: créer une liste renseignant le nom du fruit,la quantité et le prix à l'unité
         * Essayer d'accéder à une propriété d'un objet
         * Une fois que savez accéder à une propriété d'un objet procéder un calcul entre la propriété quantité et la propriété prix unitaire pour obtenir le prix total.
         */
        var objet = {
            nomFruit : "fraise",
            quantite : 12,
            prixU : 4
        }
        for(i in objet){
       // console.log(i, objet[i]);//afficher la clé et la valeur
        console.log(objet.prixU); //pour afficher la valeur de la clé prixU
        console.log(objet.quantite); //pour afficher la valeur de la clé quantite
        var total=  objet.prixU*objet.quantite; 
        

        } 
        console.log(total);  
        /**Exo 3
         * Traduire en code ceci: nous avons un panier qui est une liste d'un ensemble d'article qui référence le nom de l'article, le prix, la quantité

         * Traduire en code ceci: dans votre panier il doit y avoir au moins 4 articles
         */
        var panier1 = [{
            nomFruit : "fraise",
            quantite : 12,
            prixU : 4
        },
            {
               nomFruit : "pomme",
               quantite : 8,
               prixU : 3
            },
               {
                   nomFruit : "banane",
                   quantite : 5,
                   prixU : 2
               },
               {nomFruit : "orange",
               quantite : 7,
               prixU : 3}
            ];
            var prix = 0;
            for(article of panier1){
                console.log("prix total:", article.prixU*article.quantite);
                prix = prix + article.prixU*article.quantite;
                console.log(prix);
            }
            
            
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
            resultat += article.prixU*article.quantite;// resultat = resultat + prix*quantite
           
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

       // LES FONCTIONS
       function sayHello(){
           console.log("bonjour");// declarer la fonction
           var x = "hello";
           return x;
       }
       //lancer la fonction:
       sayHello();

       var maVariableFonction = function(){ // fonction anonyme
           console.log("maVariableFonction")
           return "hello world";
       }
       //lancer la fonction anonyme
       var monResultat = maVariableFonction();
       console.log(monResultat);
       //fonction avec parametres
       function FaireCrepe(oeuf,farine,lait){
        console.log("ingrédients recettes: ",oeuf,",",farine,",",lait);
    }
    // appeler la fonction
    FaireCrepe("3 oeufs ","1kg de farine ", "2 briques de lait ");
    //appeler la fonction avec des objets en parametre
    FaireCrepe({oeuf:3},{farine:1},{lait:2});
    //appeler la fonction avec des nombres
    FaireCrepe(3,1,2);

    //convertir une chaine de caractere en nombre
    var nombreString = "2";
    console.log("type ",typeof nombreString, "valeur ", nombreString);
    var nombreNumber = parseInt(nombreString,10);
    console.log("type ",typeof nombreNumber, "valeur ", nombreNumber);

    //interaction avec le DOM (document object model)
    var createDiv = document.createElement("div");
    var createP = document.createElement("p");
    console.log(createDiv, createP);
    createDiv.setAttribute("class", "square");
    // Assigner un texte à notre paragraphe
    createP.innerText = "Hello World !";
    //ajouter un element enfnt
    createDiv.appendChild(createP);
    var test = document.querySelector("#toto");
    test.appendChild(createDiv);


        // exo
        /**
         * **Convertir en code ceci: Faire une fonction qui vous permettra de créer n'importe quel éléments HTML qui retournera cet élément html**
         */
        function ElementHtml(balise) {
            var element = document.createElement(balise);
            return  element;
          }
          var resultat = ElementHtml("p");
          console.log(resultat);//on affiche dans la console
  
          //Reprendre l'étape du dessus et au lieu de l'afficher dans la console il faut cette fois-ci l'afficher dans le DOM
  
          var bodyHtml = document.querySelector("body");
          bodyHtml.appendChild(resultat);
          
          console.log(bodyHtml);
  
          //Convertir en code ceci: Faire une fonction qui va créer un élément div et qui va créer un enfant tel qu'un paragraphe et ce paragraphe doit contenir votre prénom
          //Cette élément div doit avoir une class square et le paragraphe doit avoir une class paragraph1
          function DivP(div,p,Text){
              var divHtml = document.createElement(div);
              var pHtml = document.createElement(p);
              divHtml.appendChild(pHtml);
              pHtml.innerText = Text;
              divHtml.setAttribute("class", "square");
              pHtml.setAttribute("class", "paragraph1");
              console.log(divHtml,pHtml);
      }
          var resultat1 = DivP("div", "p", "kahina");

          //Convertir en code ceci: Faire une fonction permettant de créer en une seul fois les élements suivant: p, div, span, section et faire un console.log de ce qui a été crée
//Convertir en code ceci: Pour les élément crée précédement leurs donner un enfant qui sera un élément html qui sera un p.      
        function elementHTML(p,div,span,section){
            var Pp = document.querySelector("p");
            var tab = [p,div,span,section];
            for(var elem of tab){
               var elemHtml= document.createElement(elem);
                elemHtml.appendChild(Pp);
                console.log(elemHtml);
            }
        }
        
        var resultat2 = elementHTML("p","div", "span", "section");
        
/**Convertir en code ceci: Faire une fonction qui va créer 3 élément html (div) c'est trois div auront des attributs différent qui seront: id div1, id div2 et id div3 ainsi qu'une class square pour chaque div créer plus une class color1, color2, color3, une fois fais l'afficher dans la console

Pour chacune div créer précédemment, leur donner un enfant qui sera un paragraphe html qui aura pour class paragraphe1, paragraphe2, paragraphe3 et qui contiendra simplement 3 prénom de la class
  
 */
function creeDiv(){
    for(var i=1;i<=3;i++){
        var DivH = document.createElement("div");
        DivH.setAttribute("class","square color"+i);
        DivH.setAttribute("id","div"+i);
        console.log(DivH);
    }
}
   var resultat3 = creeDiv();

   //autre façon

   //var three = function(){
    for(i=0; i<3; i++){
        var IdElementHtml = "div" + (i+1);
        var colorElementHtml = "color" + (i + 1);
        var threediv = document.createElement('div');
        threediv.setAttribute("class","square " + colorElementHtml);
        threediv.setAttribute("id",IdElementHtml);
        
        console.log(threediv);
     }
    
}

    three();

   
             
         
         
              
        
         



         
        




}
          
























