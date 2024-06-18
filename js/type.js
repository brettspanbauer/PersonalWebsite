const text = `char* text = "Welcome to my page!"\nMy name is Brett Spanbauer\nMichigan Technological University\nComputer Engineering, C/O 2025`;

let index = 0;
const typingTextElement = document.getElementById("typing-text");
const typingContainerElement = document.querySelector(".typing-container");

function typeWriter() {
    if (index < text.length) {
        // Check for newline character
        if (text.charAt(index) === '\n') {
            typingTextElement.innerHTML += "<br>"; // Insert HTML line break
        } else {
            typingTextElement.innerHTML += text.charAt(index); // Append character
        }

        index++;

        setTimeout(typeWriter, 75); // Adjust typing speed here (milliseconds)
    }
}

typeWriter();