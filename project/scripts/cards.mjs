export class Card {
    constructor (card) {
        this.image = card.image;
        this.alt = card.alt;
        this.header = card.header;
        this.description = card.description;
        this.cta = card.cta;
    }

    render() {
        const cards = `
            <img src="${this.image}" alt="${this.alt}" width="300" loading="lazy">
            <h2>${this.header}</h2>
            <p>${this.description}</p>
            <a class="start" id="star" href="start.html">${this.cta}</a>
        `;
        return cards;
    }
}