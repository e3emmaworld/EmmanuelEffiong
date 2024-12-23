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

const box = document.getElementById('rotating-border');

// Array of colors to rotate through
const colors = ['red', 'black', 'pink', 'white', 'blue', 'green', 'yellow', 'purple', 'orange'];

let colorIndex = 0;

// Function to change border color
function rotateBorderColor() {
  box.style.borderColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
}

// Rotate border color every second
setInterval(rotateBorderColor, 1000);


