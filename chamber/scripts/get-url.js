const params = new URLSearchParams(window.location.search);
const fname = params.get('fname');
const lname = params.get('lname');
const email = params.get('email');
const phone = params.get('tel');
const bname = params.get('bname');
const timestamp = params.get('timestamp')

const h2 = document.querySelector("h2");
const p = document.querySelector("p");

h2.innerHTML = `
    Thank you ${fname.charAt(0).toUpperCase() + fname.slice(1)} 
    ${lname.charAt(0).toUpperCase() + lname.slice(1)} for filling and submitting the form.
`

p.innerHTML = `
    The following are the <em>required</em> information you filled. <br>
    <strong> First name:</strong> ${fname.charAt(0).toUpperCase() + fname.slice(1)} <br>
    <strong> Last name:</strong> ${lname.charAt(0).toUpperCase() + lname.slice(1)} <br>
    <strong> Email:</strong> ${email} <br>
    <strong> Phone:</strong> ${phone} <br>
    <strong> Business Name:</strong> ${bname.charAt(0).toUpperCase() + bname.slice(1)} <br>
    <br>
    This form was submitted at ${timestamp} <br>
`
