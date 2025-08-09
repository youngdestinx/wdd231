const url = './data/destination.json';
// This is a function
async function getDestination() {
    const response = await fetch(url);
    const data = await response.json();
    displayPlaces(data);
}
getDestination();

// This is a function expression
const displayPlaces = (places) => {
const cards = document.querySelector("#places");
    places.forEach(place => {
        let card = document.createElement("div");
        let figure = document.createElement("figure");
        let pics = document.createElement("img");
        let name = document.createElement("h2");
        let description = document.createElement("p");
        let address = document.createElement("address");
        let buton = document.createElement("button");
        

        name.innerHTML = `${place.name}`;

        pics.setAttribute("src", place.image);
        pics.setAttribute("alt", `${place.name}`);
        pics.setAttribute("loading", "lazy");
        pics.setAttribute("width", "300");
        pics.setAttribute("height", "200");


        address.innerHTML = `${place.address}`;

        description.innerHTML = `${place.description}`;

        buton.textContent = "Learn More"

        figure.appendChild(pics);

        card.appendChild(name);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(buton);

        cards.appendChild(card);
    });
}