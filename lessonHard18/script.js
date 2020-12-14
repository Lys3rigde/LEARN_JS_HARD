const par = document.querySelector(`#par`),
    input = document.querySelector(`#input`);


function debounce(e) {
    let timeout;
    return function() {
        clearTimeout(timeout);
        timeout = setTimeout(e, 300);
    };
}
function change() {
    par.textContent = input.value;
}

input.addEventListener('input', debounce(change));
