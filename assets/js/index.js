//VAR - class= .card-container | container
let container = document.querySelector(".container");
// console.log(container);

// //invocation for function
loadCards(cardObjects);

//function to access Array for object-elements per card
function loadCards(array) {
    let cards = array;
    // console.log(cards);

//loop to add elements/attribute "class names"
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].deck_id === 1) {
            // console.log(cards[i]);
            // console.log(cards[i].image);
            // console.log(cards[i].wtmeaning);
            // console.log(cards[i].upright);
            // console.log(cards[i].reverse);
            // console.log(cards[i].copyright);
            // console.log(cards[i].horoscope);

        let cardcontainer = document.createElement("div");
            // console.log(cardcontainer);
            cardcontainer.setAttribute("class", "card-container");

        let picdiv = document.createElement("div");    
            picdiv.setAttribute("class", "pic-div");
            // console.log(picdiv);

        let image = document.createElement("img");
            image.setAttribute("class", "pic-div-img");
            image.setAttribute("src", cards[i].image);
            // image.style.opacity = "0.7";
            // console.log(image);
        
        let imgbutton = document.createElement("a");
            imgbutton.setAttribute("class", "picbutton");
            imgbutton.setAttribute("href", `./card.html?card=${cards[i].id}`);
            imgbutton.textContent = "card page";
            //console.log(imgbutton);     

        let textdiv = document.createElement("div");
            textdiv.setAttribute("class", "text-div");
            // console.log(textdiv);    

        // let wtmean = document.createElement("p");
        //     wtmean.setAttribute("class", "wtmeaning");
        //     wtmean.textContent = cards[i].twmeaning;
        //     wtmean.innerHTML = cards[i].twmeaning;
        //     // console.log(wtmean);

        let up = document.createElement("p");
            up.setAttribute("class", "upright");
            up.textContent = cards[i].upright;
            up.innerHTML = cards[i].upright;
            // console.log(up);   

        let revtitle = document.createElement("p");
            revtitle.setAttribute("class", "rev-title");
            revtitle.setAttribute("p", `./index.html?card=${cards[i].id}`);
            revtitle.textContent = "Card Reversed:";
            // console.log(revtitle);

        let rev = document.createElement("p");
            rev.setAttribute("class", "reverse");
            rev.textContent = cards[i].reverse;
            rev.innerHTML = cards[i].reverse;
            // console.log(rev);  

        let copy = document.createElement("p");
            copy.setAttribute("class", "copyright");
            copy.textContent = cards[i].copyright;
            copy.innerHTML = cards[i].copyright;
            copy.style.fontWeight = "900";
            // console.log(copy);
        
        let hors = document.createElement("p");
            hors.setAttribute("class", "horoscope");
            hors.textContent = cards[i].horoscope;
            hors.innerHTML = cards[i].horoscope;
            // console.log(hors);

        //append elements to picdiv & textdiv    
        picdiv.append(image);
        picdiv.append(imgbutton);
        // textdiv.append(wtmean);
        textdiv.append(up);
        textdiv.append(revtitle);
        textdiv.append(rev);
        textdiv.append(copy);
        textdiv.append(hors);

        //append pic-div & text-div to card-container
        cardcontainer.append(picdiv);
        cardcontainer.append(textdiv);
        // console.log(cardcontainer);

        //append card-container to container
        container.append(cardcontainer);
        // console.log(container);
        }
    }

    let allcards = document.querySelectorAll(".card-container");
        // console.log to confirm NodeList of all 78 cards.
        // console.log(allcards);
        // console.log(allcards[0]);
}

function cardFilter(filterText) {
    //alert - activates an onscreen pop-up.
    console.log("Activated cardFilter() " + filterText);
    //confirm all cards from decks-cards.js array accessed.
    // console.log(cards);

    //using METHOD "filter" to produce a new array. The new array will contain cards (decks-cards.js) with the card name - includes filterText. Logic removes need to code loops.
    let filteredCards = cards.filter((c, i) => {
        if (c.name.toLowerCase().includes(filterText.toLowerCase())) {
            console.log(c.id);
            return c;
            //filteredCards.push(c);
        }
    })
    //console log confirms that text entered in search bar returns all of the cards contains the letters typed by user. (i.e. king = 4 cards returned in array. "King of cups, swords, pentacles, wands").
    console.log(filteredCards);
    //filters cardObjects Array by using id assigned to card in decks-cards.js Array.
    filteredCards = filteredCards.map(obj => obj.id);
    //results access cards and all their objects, per text entered in search
    console.log(".map filteredCards ", filteredCards);

    let cardstoRender = [];
    //VAR to iterate over cardObjData
    for(let i = 0; i < cardObjects.length; i++) {
    //determines if decks-cards.js/card.id is included in cardObjects.js/card_id
    if(filteredCards.includes(cardObjects[i].card_id)) {

        cardstoRender.push(cardObjects[i]);
    }
    }
    console.log(cardstoRender);

    document.querySelector(".container").innerHTML = ``;

    //or create a loop for the same effect of removing cards that do not match.

    //let cardElements = document.querySelectorAll(".card-container");
    //for(let i=0; i<cardElements.length; i++){
        //cardElements[i].remove();
    //}

    loadCards(cardstoRender);
}



