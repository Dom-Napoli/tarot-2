const queryString = window.location.search;
// console.log(queryString);
//code "to search"

const urlParams = new URLSearchParams(queryString);
// console.log(urlParams);
//code "where to search"

const cardId = parseInt(urlParams.get("card"));
// console.log(typeof cardId);
//code "provide/query all cardIds"

//console.log to confirm card-objects.js location - "all-123 objects accessed"
// console.log(cardObjects);

//assign cardObjects.js [array] to card
let cardObjData;
//VAR | loop card-objects.js array to assign per card-id
for (let i = 0; i < cardObjects.length; i++) {
    //console.log of cardObjects[i] to confirm
    // console.log(cardObjects[i]);
    if (cardObjects[i].id === cardId) {
        cardObjData = cardObjects[i];
    }
}
//confirm card objects assigned to card
// console.log(cardObjData);

//loop decks-cards.js [array] "deck name" assign to deck_id
let selectedDeck;
for(let i = 0; i < decks.length; i++){
    console.log(decks[i]);
    if(decks[i].id === cardObjData.deck_id){
        selectedDeck = decks[i];
    }
}
//confirm assigned decks
console.log(selectedDeck);

//loop decks-cards.js [array] "name & suit" assign to card_id
let selectedCard;
for(let i = 0; i < cards.length; i++){
    // console.log(cards[i]);
    if(cards[i].id === cardObjData.card_id){
        selectedCard = cards[i];
    }
}
//confirm assigned card name and suit
console.log(selectedCard);

//loop cardOjects.js [array] "images" assign to cards
let selectedImage;
for(let i = 0; i < cardObjects.length; i++){
    if(cardObjects[i].image === cardObjData.image){
        selectedImage = cardObjects[i];
    }
}
//confirm different deck card images assigned to card_id
console.log(selectedImage);

//loop cardOjects.js [array] "images" assign to cards
let selectedCopyright;
for(let i = 0; i < cardObjects.length; i++){
    if(cardObjects[i].copyright === cardObjData.copyright){
        selectedCopyright = cardObjects[i];
    }
}
//confirm copyright assigned to card_id
console.log(selectedCopyright);

//defined: "&&" = Operator with description of "and". 
//!== means "not equal value or not equal type" - These operators imply that the each card's id number are not identical but the parameters are the same.
let matchCardId = []
for(let i = 0; i < cardObjects.length; i++){
    if((cardObjects[i].card_id === selectedCard.id) && (cardObjects[i].id !== cardObjData.id)) {
        matchCardId.push(cardObjects[i]);
    }
}
//confirm all objects assigned to card-id.
console.log("matchCardId: ", matchCardId);
//confirm all objects assigned to card name and suit.
console.log("cardObjData, selectedCard: ", cardObjData, selectedCard);

//add elements to card page with console log to confirm
let cardHeader = document.querySelector(".card-name");
console.log(cardHeader);
cardHeader.textContent = selectedCard.name;

let deckName = document.querySelector(".deck-name");
console.log(deckName);
deckName.textContent = selectedDeck.name;

let cardSuit = document.querySelector(".c-card-suit");
console.log(cardSuit);
cardSuit.textContent = selectedCard.suit;

let cardImage = document.querySelector(".card-image").src = cardObjData.image;
console.log(cardImage);

let wtmeaning = document.querySelector(".c-wtmeaning");
console.log(wtmeaning);
wtmeaning.textContent = cardObjData.wtmeaning;
wtmeaning.innerHTML = cardObjData.wtmeaning;

let cardUpright = document.querySelector(".c-upright");
console.log(cardUpright);
cardUpright.textContent = cardObjData.upright;
cardUpright.innerHTML = cardObjData.upright;

let cardReverse = document.querySelector(".c-reverse");
console.log(cardReverse);
cardReverse.textContent = cardObjData.reverse;
cardReverse.innerHTML = cardObjData.reverse;

let cardCopyright = document.querySelector(".c-copyright");
    console.log(cardCopyright);
    cardCopyright.textContent = cardObjData.copyright; 
    cardCopyright.innerHTML = cardObjData.copyright;

//allow card.js to have variables that contain the deck, card, and card objects that was selected in the index.js. 
//loop through matchCardId to create a div for each card and append to div class: ".associated-cards"

for(let i = 0; i < matchCardId.length; i++){

    let deck;
    for(let x = 0; x < decks.length; x++){
        //confirm deck search per card
        console.log("Search deck for each card: ", matchCardId[i]);
        if(decks[x].id === matchCardId[i].deck_id){
            deck = decks[x];
        }
    }
    //confirm deck selected
    console.log("This is deck: ", deck);

    //confirm assigned all card-object id, deck-id, card-id, & objects.
    console.log(matchCardId[i]);

    //create a div element
    let cardDiv = document.createElement("div");
    //confirm div element
    console.log(cardDiv);

    //create an image
    let cardImage = document.createElement("img");
    cardImage.src = matchCardId[i].image
    cardImage.alt = "Card image: " + selectedCard.name + " - " + deck.name;
    //confirm image 
    console.log("this is image & alt: ", cardImage);

    //create header for image
    let cardHeader = document.createElement("h3");
    cardHeader.textContent = selectedCard.name + " - " + deck.name;
    //confirm cardHeader H3
    console.log(cardHeader);

    //create alink to view each individual card in card.html
    let cardLink = document.createElement("a");
    console.log("Link to alternative card: ", cardLink);
    cardLink.setAttribute("href", `./card.html?card=${matchCardId[i].id}` )
    cardLink.textContent = "View"

    //append to cardDiv
    cardDiv.append(cardImage);
    cardDiv.append(cardHeader);
    cardDiv.append(cardLink);
    document.querySelector(".associated-cards").append(cardDiv);

}
