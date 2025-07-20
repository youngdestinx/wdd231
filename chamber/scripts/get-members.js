const cards = document.querySelector("#companies");
const url = './data/members.json';
// This is a function
async function getMemberData() {
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
        let name = document.createElement("h2");
        let contact = document.createElement("p");
        

        name.innerHTML = `${company.name}<br><em>${company.description}</em>`;

        logo.setAttribute("src", company.image);
        logo.setAttribute("alt", `Logo of ${company.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "50");
        logo.setAttribute("height", "50");

        contact.innerHTML = `
            <strong>ADDRESS:</strong> ${company.address} <br>
            <strong>PHONE:</strong> ${company.phone} <br>
            <strong>WEBSITE:</strong> <a>${company.website}</a> <br>
            <strong>INDUSTRY:</strong> ${company.industry} <br>
            <strong>MEMBERSHIP LEVEL:</strong> ${company.membershipLevel} <br>         
        `;


        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(contact);

        cards.appendChild(card);
    });
}