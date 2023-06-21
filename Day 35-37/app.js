let productNameInput = document.getElementById('product-name');
let remainingChars = document.getElementById('remaining-chars');
let maxlen = productNameInput.maxlength;

console.log(maxlen);

function updatechars(event) {
    let enteredChars = event.target.value.length;
    let remainingChars = 60 - enteredChars;
}

productNameInput.addEventListener("input", updatechars);
