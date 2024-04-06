// import {getCount} from "backend/mongodb.js";
document.addEventListener("DOMContentLoaded", () => {
    var numberOfCards = 2; 
    
    var cardContainer = document.getElementById('cardContainer');
    for (var i = 0; i < numberOfCards; i++) {
        var cardComponent = document.createElement('card-component');
        cardContainer.appendChild(cardComponent);
    }  
});

