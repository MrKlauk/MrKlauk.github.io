/* Speech bubble */
const speechSection = document.querySelector(".speech");
const speechBubble = document.getElementById("speech-bubble");

speechSection.addEventListener("click", function () {
    speechBubble.classList.toggle("show");
});

/* Beverage selector */
const beverageSelect = document.getElementById("beverage-select");
const beverageMessage = document.getElementById("beverage-message");

beverageSelect.addEventListener("change", function () {
    const choice = beverageSelect.value;

    if (choice == "") {
        beverageMessage.textContent = "";
    }    
    else {
        beverageMessage.textContent = choice + ": Nice Choice!";
    }
});

/* Stitcker adder */
const catImage = document.getElementById("cat");
const stickerArea = document.querySelector(".sticker-area");

catImage.addEventListener("click", function (event) {
    const rect = stickerArea.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const emoji = document.createElement("span");
    emoji.classList.add("emoji");
    emoji.textContent = "🙂";
    emoji.style.left = x + "px";
    emoji.style.top = y + "px";

    stickerArea.appendChild(emoji);
});