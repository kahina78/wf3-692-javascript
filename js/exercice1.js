var idCard = document.getElementById('card');
    var classCard =  document.getElementsByClassName('card');
    var divTagName = document.getElementsByTagName('div');
    var pTagName = document.getElementsByTagName('p');

    console.log("idCard: ", idCard);
    console.log("classCard: ", classCard);
    console.log("TagNameDiv: ", divTagName);
    console.log("pTagName: ", pTagName);

    var idCardQuerySelector = document.querySelector("#card");
    var classCardQuerySelector = document.querySelector(".card");
    var divTagNameQuerySelector = document.querySelector("div");
    var paragrapheQuerySelectorAll = document.querySelectorAll('p');

    console.log('idCardQuerySelector: ', idCardQuerySelector);
    console.log('classCardQuerySelector: ', classCardQuerySelector);
    console.log('divTagNameQuerySelector: ', divTagNameQuerySelector);
    console.log('paragrapheQuerySelectorAll: ', paragrapheQuerySelectorAll);