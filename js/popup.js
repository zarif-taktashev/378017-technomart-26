var link = document.querySelector(".entrance-list-link");
var close = document.querySelector(".modal-close");
var popup = document.querySelector(".modal-login");
var login = popup.querySelector("[name=login]");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");

var storage = "";
var isSupportStorage = true;

try{
    storage = localStorage.getItem("login");
}catch(err){
    isSupportStorage = false;
}

link.addEventListener("click", function(evn){
    evn.preventDefault();
    popup.classList.add("modal-show");
    if(storage){
        login.value = storage;
        email.focus();
    }else{
        login.focus();
    }
});

close.addEventListener("click", function(evn){
    evn.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt){
    if(!login.value || !email.value){
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }else{
        localStorage.setItem("login", login.value);
    }
});

window.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27){
        evt.preventDefault();
        if (popup.classList.contains("modal-show")){
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error"); 
            popupMap.classList.remove("modal-show");
        }
    }
});