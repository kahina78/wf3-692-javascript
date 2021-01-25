window.onload= function () {
//avant
    var p = document.getElementsByTagName ('p');
    var div = document.getElementsByTagName ('p');
    var greenP = document.getElementsById ('green');
     var p1=document.getElementsById ('p1');
    console.log("greenP:" , greenP, "div:", div, "all paragraph:", p, "p1:" )
}
//AUJOURD'HUI
var pWithQuerySelectorByTagName= document.querySelector('p');
var pWithQuerySelectorById= document.querySelector('#green');
var pWithQuerySelectorByClassName= document.querySelector('.p1');

console.log("pWithQuerySelector:", pWithQuerySelectorByTagName);
console.log("pWithQuerySelectorId:", pWithQuerySelectorById);
console.log("pWithQuerySelectorClassName:", pWithQuerySelectorByClasseName);
// Pour pouvoir recuperer plusieurs éléments avec querySelector
//il faut utiliser querySelector()
var getAllParagraphWithQuerySelectorAll= document.pWithQuerySelectorAll('p');
console.log("getAllParagraphWithQuerySelectorAll:", getAllParagraphWithQuerySelectorAl)