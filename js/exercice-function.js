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
        //// Assigner un texte à notre paragraphe
        //createP.innerText = "Hello World !";
        // Assigner un attribut à notre élément p
        //3_createP.setAttribute('class', 'color');
        //3_console.log('createP: ', createP);

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
     creeDiv(); //on a pas besoin de fair var resultat







}
