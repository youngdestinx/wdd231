function getUrl() {
    const params = new URLSearchParams(window.location.search);
    const fname = params.get('fname');
    const lname = params.get('lname');
    const email = params.get('email');
    const phone = params.get('tel');
    const packages = params.get('package');

    const h2 = document.querySelector("h2");
    const p = document.querySelector("p");

    h2.innerHTML = `
        Thank you ${fname.charAt(0).toUpperCase() + fname.slice(1)} 
        ${lname.charAt(0).toUpperCase() + lname.slice(1)} for Registering for the <span>${packages}</span>
    `
    p.innerHTML = `
        Message me now to get full service description, make payment and get started
    `
}

export default getUrl;
