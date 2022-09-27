'use strict';

const email = document.querySelector('#email');
const submit = document.querySelector('button[alt="submit"]');
const form = document.querySelector('form');
const errorText = document.querySelector('.error-text');
const errorIcon = document.querySelector('img[alt="error"]');

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function checkEmail(e) {
    e.preventDefault();

    if (validateEmail(email.value)) {
        email.classList.remove('error');
        errorText.textContent = " ";
        errorIcon.classList.add('none');

    } else {
        email.classList.add('error');
        errorText.textContent = "Please provide a valid email";
        errorIcon.classList.remove('none');
    }
}

form.addEventListener('submit', checkEmail)