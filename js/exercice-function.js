// Exo Panier

// Cet exercice aura pour but de vous faire pratiquer l'ensemble des exercices qui ont pu être abordé

//Pour mener à bien cet exercice commencer à créer votre fichier js et l'associer à une page html. Une fois fais vous devrez mettre en place tous les éléments nécessaire que je vais citer afin de le convertir en code.

//Voici les éléments dont vous aurez besoin.

//**Convertir en code ceci: Faire une fonction qui vous permettra de créer n'importe quel éléments HTML qui retournera cet élément html**
// exo
        /**
         * **Convertir en code ceci: Faire une fonction qui vous permettra de créer n'importe quel éléments HTML qui retournera cet élément html**
         */
        //façon1
        function ElementHtml(balise) {
            var element = document.createElement(balise);
            return  element;
          }
          var resultat = ElementHtml("p");
          console.log(resultat);

        //façon2
        var createElement = function(balise){
        console.log(document.createElement(balise));
         createElement('p');

          
        //Reprendre l'étape du dessus et au lieu de l'afficher dans la console il faut cette fois-ci l'afficher dans le DOM
        // Afficher l'élement dans notre page html
        //var test = document.querySelector('#test');
        //test.appendChild(createDivElement);

          var bodyHtml=document.querySelector("body");
          element.appendchild(resultat);

        //Convertir en code ceci: Faire une fonction qui va créer un élément div et qui va créer un enfant tel qu'un paragraphe et ce paragraphe doit contenir votre prénom
        //1_Création des éléments
        //1_var createDivElement = document.createElement('div');
        //Assigner des attributs à notre élément div
        //2_createDivElement.setAttribute('class', 'square');
        //2_var createP = document.createElement('p');
        // Assigner un attribut à notre élément p
        //3_createP.setAttribute('class', 'color');
        //3_console.log('createP: ', createP);

        var createDivElement= document.creatElement("div");
        var creatP= document.creatElement("p");
        var creatP= setAttribute('class', 'kahina');
        console.log('creatP', 'creatP');

        // Assigner un texte à notre paragraphe
        //createP.innerText = "Hello World !";
        //console.log('createDivElement: ', createDivElement);

