const town = document.querySelector("#town");
const graphic = document.querySelector("#graphic");
const description = document.querySelector("#description");
const temperature = document.querySelector("#temperature");

const myKey = "8263f8e8332a3d9567fe5ed984ed6084"
const lat = "6.463253448638566"
const long = "3.144348686586198"

const url = `//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${myKey}&units=imperial`

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResult(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResult(data) {
    town.innerHTML = data.name
    description.innerHTML = data.weather[0].description
    temperature.innerHTML = `${data.main.temp}⁰F`
    const iconsrs = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    graphic.setAttribute("src", iconsrs)
    graphic.setAttribute("alt", data.weather[0].description)    
}