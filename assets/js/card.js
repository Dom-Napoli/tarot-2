const queryString = window.location.search;
console.log(queryString);
//code "to search"

const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
//code "where to search"

const cardId = parseInt(urlParams.get("card"));
console.log(typeof cardId);
//code "provide/query all cardIds"

//console.log to confirm card-objects.js location - "all-123 objects accessed"
console.log(cardObjects);
let selectedCardsObjects;
//VAR | assigned name "selectCardsObjects" 
//VAR | loop used to access objects and assign to individual card
//VAR | using card_id located in selectedCardObjects = (card-objects.js array) 
//VAR | will then gather and assign all objects in card-id and assign to individual cards

for (let i = 0; i < cardObjects.length; i++) {
    //console.log of cardObjects[i] confirms array accessed and assigned
    console.log(cardObjects[i]);
    if (cardObjects[i].id === cardId) {
        selectedCardsObjects = cardObjects[i];
    }
};
//console.log confirmed when click from main to individual card page
console.log(selectedCardsObjects);

let selectedDeck;
//VAR | assigned name "selectedDeck"
//VAR | loop used to access all three decks by name
//VAR | using deck id located in selectedCardObjects = (decks-cards.js array)
//VAR | will then gather and assign deck_id to individual cards
for (let i = 0; i < decks.length; i++) {
    //console.log of decks[i] confirms all three decks accessed in array
    console.log(decks[i]);
    if (decks[i].id  === selectedCardsObjects.deck_id) {
        selectedDeck = decks[i];
    }
}
// console.log confirms deck matches with card number
console.log(selectedDeck);

let selectedCard;
//VAR | assigned name "selectedCard"
//VAR | loop used to access all three decks by name
//VAR | using deck id located in selectedCardObjects = (decks-cards.js array)
//VAR | will then gather and assign card_id to individual cards
for (let i = 0; i < cards.length; i++){
    //console.log of decks[i] confirms all three decks accessed in array
    console.log(cards[i]);
    if(cards[i].id === selectedCardsObjects.card_id){
        selectedCard = cards[i];
    }
}
// console.log confirms card matches with card objects
console.log(selectedCard);