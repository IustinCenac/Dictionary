const library = {"busola": "instrument care arata directia nordului si ajuta la orientare.", 
    "vulcan": "munte prin care ies la suprafata lava, gaze si cenusa.", 
    "ecosistem": "ansamblu format din vietuitoare si mediul in care traiesc.", 
    "arhiva": "loc unde sunt pastrate documente pentru consultare ulterioara.", 
    "nectar": "lichid dulce produs de flori si folosit de albine.", 
    "orbita": "traseul pe care il urmeaza un corp ceresc in jurul altuia.", 
    "catalizator": "substanta care accelereaza o reactie chimica fara sa fie consumata.", 
    "macheta": "model redus al unui obiect, al unei cladiri sau al unui proiect.", 
    "peninsula": "portiune de uscat inconjurata de apa din trei parti.", 
    "simbol": "semn sau imagine care reprezinta o idee, un obiect sau un concept."}

const message = document.getElementById("message");
const input1 = document.getElementById("text1");
const displayDefinition = document.getElementById("container");

function generateSearchButton() {
    const input1Text = input1.value.toLowerCase();

    if (input1Text == "") {
        displayDefinition.style.color = "red";
        displayDefinition.innerHTML = "Introdu un cuvant!";
    } else if (library[input1Text]) {
        displayDefinition.style.color = "green";
        displayDefinition.innerHTML = input1Text.charAt(0).toUpperCase() + input1Text.slice(1) + " = " + library[input1Text];

        input1.value = "";
        message.innerHTML = "";
    } else {
        displayDefinition.style.color = "red";
        displayDefinition.innerHTML = "Nu exista acest cuvant!";
        
        message.innerHTML = "";
    }
}

function addWord() {
    const input2 = document.getElementById("text2");
    const input3 = document.getElementById("text3");

    const newInput = input2.value.toLowerCase();
    const newDefinition = input3.value;

    if (newInput && newDefinition) {
        library[newInput] = newDefinition;
        message.style.color = "green";
        message.innerHTML = "Cuvant adaugat cu succes!";
        
        input2.value = "";
        input3.value = "";
        displayDefinition.innerHTML = "";
    } else {
        message.style.color = "red";
        message.innerHTML = "Completeaza ambele campuri!";

        displayDefinition.innerHTML = "";
    }
}