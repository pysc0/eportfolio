document.addEventListener('DOMContentLoaded', function() {
    fields.user_name = document.getElementsByName('user_name');
    fields.user_email = document.getElementsByName('user_email');
    fields.message = document.getElementsByName('message');
})

function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;

    return (value.length > 0);
}

function isEmail(user_email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(user_email).toLowerCase());
}

function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
}

function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.user_name, isNotEmpty);
    valid &= fieldValidation(fields.user_email, isEmail);
    return valid;
}

class User {
    constructor(user_name, user_email) {
    this.user_name = user_name;
    this.user_email = user_email;
    }
   }

function sendContact() {
    if (isValid()) {
        let usr = new User(user_email.value, user_email);

        alert(`${usr.user_name} thanks for the message!.`)
    } else {
        alert('There was an error')
    }
}