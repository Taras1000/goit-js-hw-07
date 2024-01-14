const inputField = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputField.addEventListener('input', updateInput);

function updateInput() {
    const inputValue = inputField.value.trim();
    outputText.textContent = inputValue ? inputValue : "Anonymous";
}
