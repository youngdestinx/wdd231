const url = "./data/members.json"
const cards = document.querySelector("#companies")
// This is a function
async function getMemberData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data.companies);
}
getMemberData()

// This is a function expression
const displayMembers = (companies) => {
    companies.forEach(company => {
        let card = document.createElement("div");
        let logo = document.createElement("img");
        let name = document.createElement("p");
        let phone = document.createElement("p");
        let address = document.createElement("p");
        let link = document.createElement("a");

        name.textContent = `${company.name}`;

        logo.setAttribute("src", company.image);
        logo.setAttribute("alt", `Logo of ${company.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "50");
        logo.setAttribute("height", "50");

        address.textContent = `${company.address}`;

        phone.textContent = `${company.phone}`;

        link.textContent = `${company.website}`;

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(link);

        cards.appendChild(card);
    });
}