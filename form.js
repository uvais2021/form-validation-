const form = document.getElementById('form');
const uname = document.getElementById('uname');
const uemail = document.getElementById('email');
const upass1 = document.getElementById('pass1');
const upass2 = document.getElementById('pass2');


var a = 0;
form.addEventListener('submit', e => {
    e.preventDefault();
    checkInputs();
    if (a == 4) {
        display();
    } else {
        a = 0;
    }
});

function checkInputs() {
    const username = uname.value.trim();
    const email = uemail.value.trim();
    const pass = upass1.value.trim();
    const pass2 = upass2.value.trim();
    if (username === '') {
        setErrorFor(uname, 'username  need to fill')
    }
    else {
        setSuccessFor(uname);
    }

    if (email === '') {
        setErrorFor(uemail, 'Email cannot be blank')
    }
    else if (!isEmail(email)) {
        setErrorFor(uemail, 'Invalid email')
    }
    else {
        setSuccessFor(uemail)

    }
    if (pass === '') {
        setErrorFor(upass1, 'password connot be blank')
    }
    else {
        setSuccessFor(upass1)
            ;
    }

    if (pass2 === '') {
        setErrorFor(upass2, 'password connot be blank')
    }
    else if (pass2 !== pass) {
        setErrorFor(upass2, 'password dosn`t match')
    }
    else {
        setSuccessFor(upass2)

    }

}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'error input';
    // formControl.className = 'form-control label';


    small.innerText = message;
}

function setSuccessFor(input) {
    a += 1;
    const formControl = input.parentElement;
    formControl.className = 'success input';
    // formControl.className = 'form-control label';

}
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function display() {
    document.write(`<center>`);
    document.write(`<h2>Your Inputs</h2>`+`<br>`);
    document.write(`Username: ${uname.value}`+`<br>`);
    document.write(`Email: ${uemail.value}`+`<br>`);
    document.write(`Password: ${upass1.value}`+`<br>`);
    // document.write(`Confirm Password: ${upass2.value}`+`<br>`);

}