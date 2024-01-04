//VAR - class= .card-container | container
let container = document.querySelector(".container");
// console.log(container);

//invocation for function
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
        //console.log to confirm NodeList of all 78 cards.
        // console.log(allcards);
        // console.log(allcards[0]);
}






