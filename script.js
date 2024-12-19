document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
});

const word = "Emmanuel Effiong";
let currentText = "";
let index = 0;

function spellWord() {
    if (index < word.length) {
        currentText += word[index];  // Add one letter at a time
        document.getElementById("output").textContent = currentText;
        index++;
        setTimeout(spellWord, 200); // Repeat every 500ms
    }
}

spellWord(); 

