function getMessage() {
    const params = new URLSearchParams(window.location.search);
    const fname = params.get('fname');
    const lname = params.get('lname');
    const email = params.get('email');
    const phone = params.get('tel');
    const packages = params.get('package');

    const whatsappmessage = `
        Hello. My name is  ${fname.charAt(0).toUpperCase() + fname.slice(1)}
        ${lname.charAt(0).toUpperCase() + lname.slice(1)}. I have just registered for the ${packages}
        I will love get full description, make payment and get started. Alternatively, you can also contact me
        at ${email}
    `

    const whatsappLink = `https://wa.me/2349152680996?text=${whatsappmessage}`;

    document.querySelector("a").href = whatsappLink;
}

export default getMessage;
