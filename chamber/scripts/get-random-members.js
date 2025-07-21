 async function fetchData() {
    const response = await fetch('./data/members.json');
    const data = await response.json();
    return data.companies;
}

function filtered(members) {
    const filteredMembers = members.filter(member => [2, 3].includes(member.membershipLevel));
    const shuffledMembers = filteredMembers.sort(() => 0.5 - Math.random());
    return shuffledMembers.slice(0, 3);
}

function displayMembers(members) {
    const cards = document.querySelector(".spotlight")

    members.forEach(member => {
        let card = document.createElement("article");
        let container = document.createElement("div");
        let title = document.createElement("div");

        let logo = document.createElement("img");
        let name = document.createElement("h2");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("p");
        let level = document.createElement("p");
        let desc = document.createElement("em");

        

        name.innerHTML = `${member.name}`;

        logo.setAttribute("src", member.image);
        logo.setAttribute("alt", `Logo of ${member.name}`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "50");
        logo.setAttribute("height", "50");

        address.innerHTML = `Address: ${member.address}`;

        phone.innerHTML = `Phone: ${member.phone}`;
        
        website.innerHTML = `Website: ${member.website}`;

        level.innerHTML = `Membership Level: ${member.membershipLevel}`;

        desc.innerHTML = `${member.description}`;

        title.appendChild(name);
        title.appendChild(desc);
        card.appendChild(title);

        card.appendChild(logo);

        container.appendChild(address);
        container.appendChild(phone);
        container.appendChild(website);
        container.appendChild(level);
        card.appendChild(container);

        cards.appendChild(card);
    });
}

async function main() {
    const members = await fetchData();
    const spotlightMembers = filtered(members);
    displayMembers(spotlightMembers);
}

main();