var modalBuy = document.getElementsByClassName("btn-buy");
var closeBuy = document.querySelector(".modal-close-buy");
var popupBuy = document.querySelector(".modal-buy");

modalBuy.forEach = [].forEach;

modalBuy.forEach(function(elem){
    elem.addEventListener("click", function(evn){
        evn.preventDefault();
        popupBuy.classList.add("modal-show");
    });
});

closeBuy.addEventListener("click", function(evn){
    evn.preventDefault();
    popupBuy.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt){
    if(evt.keyCode === 27){
    evt.preventDefault();
    if(popupBuy.classList.contains("modal-show")){
        popupBuy.classList.remove("modal-show");
    }
  }
});