 // Карта

 var linkMap = document.querySelector(".map-ankor");
 var closeMap = document.querySelector(".modal-close-map");
 var popupMap = document.querySelector(".modal-map");

 linkMap.addEventListener("click", function(evn){
   evn.preventDefault();
   popupMap.classList.add("modal-show");
 });

 closeMap.addEventListener("click", function(evn){
   evn.preventDefault();
   popupMap.classList.remove("modal-show");
 });

 window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popupMap.classList.remove("modal-show");
        }
    }
});