document.addEventListener("DOMContentLoaded", () => {
    var numberOfCards = 3; 
    
    var cardContainer = document.getElementById('cardContainer');
    for (var i = 0; i < numberOfCards; i++) {
        var cardComponent = document.createElement('card-component');
        cardContainer.appendChild(cardComponent);
    }  
});