const textInput = document.querySelector(".text-input");
const textOutput = document.querySelector(".text-output");
const encryptButton = document.querySelector(".encrypt-btn");
const decryptButton = document.querySelector(".decrypt-btn");
const wordsToEncrypt = ["e", "i", "a", "o", "u"];
const wordsToDecrypt = ["enter", "imes", "ai", "ober", "ufat"];

encryptButton.addEventListener("click", encrypt.bind(event, wordsToEncrypt, wordsToDecrypt));
decryptButton.addEventListener("click", encrypt.bind(event, wordsToDecrypt, wordsToEncrypt));

function encrypt(inputWords, OutputWords) {
    toggleElementVisibility(true);
    if (isValid(textInput.value)) {
        textOutput.textContent = textInput.value;
        inputWords.forEach(function (e, i) {
            textOutput.textContent= textOutput.textContent.replaceAll(inputWords[i], OutputWords[i]);
        });
    } else {
        toggleElementVisibility(true);
        textOutput.textContent = "ERROR!!!";
        setTimeout(() => {
            toggleElementVisibility(false);
        }, 5000);
    }
}

function isValid(text) {
    return !/[^a-z\s]/.test(text);
}

function textCopy() {
    var copyData = textOutput;
    copyData.select();
    navigator.clipboard.writeText(copyData.value);
}

function textDelete() {
    textInput.value = "";
    toggleElementVisibility(false);
    toggleDeleteButton(true);
}

function toggleDeleteButton(isHidden, text) {
    document.querySelector(".delete-btn").hidden = isHidden || text == "";
}

function toggleElementVisibility(isHidden) {
    document.querySelector(".default-text-container").hidden = isHidden;
    document.querySelector(".copy-btn").hidden = !isHidden;
    textOutput.hidden = !isHidden;
    document.querySelector("#img-output").hidden = isHidden;
}
