window.onload = function(){
    /* Event Listener
    var div1 = document.querySelector('#div1');
    console.log(div1);

    // div1.addEventListener("click", function(event){
    //     alert('votre element à été cliqué');
    //     console.log(event);
    // });

 divAll.addEventListner("click",function(event){
     alert("votre element a été clicker");
     console.log(event);

 });*/


 window.onload=function()
{
   
    var divAll= document.querySelectorAll(".square");
    for(var i=0; i<divAll.length;i++)
    {
    
        divAll[i].addEventListener("click", function(event)
        {
            alert("Votre element a été clické")
            console.log(event)
        })
        
    }
}


var divAll = document.querySelectorAll(".square");
console.log(divAll);

for(i=0;i<divAll.length;i++){
divAll[i].addEventListener("click", function(){
    alert("les div sont cliquable");
});
}




for(i=0; i< divQuatre.length; i++){
    var divQuatre = document.querySelectorAll(".square");
    divQuatre[i].onclick = function(){
        alert("cliquer !")
    }
}

for(i=0; i<4; i++){
    var DivAll=
}




}
