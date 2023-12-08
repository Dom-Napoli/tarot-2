//VAR - class= .card-container | container
let container = document.querySelector(".card-container");
//console.log references card container divs
console.log(container);

//function to access Array for object-elements per card
function loadCards(cardObjectsArray) {
    let cards = cardObjectsArray;
    console.log(cards);
    //console.log not displaying the Array?

    for (let i = 0; i < cards.length; i++) {
        if (cards[i].deck_id === 1) {
            console.log(cards[i]);
            //console.log not diplaying total/all cards?
        }
    }

}




