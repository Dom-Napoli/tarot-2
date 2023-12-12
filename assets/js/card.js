const queryString = window.location.search;
console.log(queryString);
//code "to search"

const urlParams = new URLSearchParams(queryString);
console.log(urlParams);
//code "where to search"

const cardId = parseInt(urlParams.get("cards"));
console.log(typeof cardId);
//code "provide/query all card data"

console.log(cards);
let selectedCardsObjects
//VAR | assigning name to card-objects.js/file-array to cardObjects.
// required in order for js code to "pass" all of the file-array's parameters to each individual card's html page. 
//The id numbers assigned in card-objects.js file/array ensure that each individual card's html page is populated with the correct parameters (corresponding elements/data).

//loop created for JS to access & pull parameters from the card-objects.js file/array for each card and pass to each card's html page.
for (let i = 0; i < cardObjects.length; i++){
    console.log(cardObjects[i]);
    //console.log(cardObjects[i]); - confirms entire array indexed.
    if (cardObjects[i].id === cardId) {
        selectedCardsObjects = cardObjects[i];

    }
}
//console.log is returning as undefined?
console.log(selectedCardsObjects);

