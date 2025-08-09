import { Card } from "./cards.mjs";

const container = document.querySelector("#sect");
let index = 0;
let cards = [];

async function getData() {
    try {
        const response = await fetch("./data/sites.json");
        if (response.ok) {
            const card = await response.json();
            console.log("Card data:", card);
            displayCards(card.members);
        } else {
            console.log("Error fetching card details:", response.status, response.statusText)
        }
    } catch (error) {
        console.error("Error fetching card data", error);
        console.log("Error details", error.message, error.stack);
    }
}

function displayCards(card) {
    cards = card.map(data => new Card(data));
    console.log("Card data:", card);
    showCard();
    setInterval(nextCard, 3000);
}

function showCard() {
    const currentCard = cards[index];
    container.innerHTML = currentCard.render();
    container.classList.add("card");
}

function nextCard() {
    index = (index + 1) % cards.length;
    showCard();
}

getData();