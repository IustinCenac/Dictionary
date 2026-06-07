const library = {"compass": "instrument that shows the direction of north and helps with navigation.",
"volcano": "mountain through which lava, gases, and ash reach the surface.",
"ecosystem": "system consisting of living organisms and the environment in which they live.",
"archive": "place where documents are stored for future reference.",
"nectar": "sweet liquid produced by flowers and used by bees.",
"orbit": "path followed by a celestial body around another body.",
"catalyst": "substance that speeds up a chemical reaction without being consumed.",
"model": "small-scale representation of an object, building, or project.",
"peninsula": "portion of land surrounded by water on three sides.",
"symbol": "sign or image that represents an idea, object, or concept."}

const message = document.getElementById("message");
const libraryInput = document.getElementById("libraryInput");
const displayDefinition = document.getElementById("container");

function searchButton() {
    const libraryText = libraryInput.value.toLowerCase();

    if (libraryText == "") {
        displayDefinition.style.color = "red";
        displayDefinition.innerHTML = "You must enter a word!";
    } else if (library[libraryText]) {
        displayDefinition.style.color = "green";
        displayDefinition.innerHTML = libraryText.charAt(0).toUpperCase() + libraryText.slice(1) + " = " + library[libraryText];

        libraryInput.value = "";
        message.innerHTML = "";
    } else {
        displayDefinition.style.color = "red";
        displayDefinition.innerHTML = "This word does not exist!";
        
        message.innerHTML = "";
    }
}

function addWord() {
    const newWordInput = document.getElementById("newWordInput");
    const newDefinitionInput = document.getElementById("newDefinitionInput");

    const newWord = newWordInput.value.toLowerCase();
    const newDefinition = newDefinitionInput.value;

    if (newWord && newDefinition) {
        library[newWord] = newDefinition;
        message.style.color = "green";
        message.innerHTML = "Word added!";
        
        newWordInput.value = "";
        newDefinitionInput.value = "";
        displayDefinition.innerHTML = "";
    } else {
        message.style.color = "red";
        message.innerHTML = "Please fill both lanes!";

        displayDefinition.innerHTML = "";
    }
}