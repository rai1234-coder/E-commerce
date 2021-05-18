const form = document.getElementsByClassName('form');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const name = document.getElementById('name');
const address = document.getElementById('address');



    function validEmail() {
        var email = document.getElementById('email').value; // where `mail` is id of your input form
        var mail = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

        if (email.match(mail)) {
            alert("Your mail : " + email);
        }
        else {
            alert("Invalid Email !!!");
        }
    }



