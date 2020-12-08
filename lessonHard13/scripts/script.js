'use strict';

const text = document.querySelector('#HEX'),
    button = document.querySelector('#change');

const randomize = function () {
    const randomValue = '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    document.body.style = 'background-color: ' + randomValue;
    button.style.color = randomValue;
    text.textContent = randomValue;
};

button.addEventListener('click', randomize);
