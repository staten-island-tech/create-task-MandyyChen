const DOMSelectors ={
    img: document.querySelectorAll(".img"),
    box: document.querySelector("#box"),
    card: document.querySelector(".card"),
    input: document.getElementById("input"),
    
}

function clearFields() {
    DOMSelectors.box.innerHTML = ""
    DOMSelectors.input.value = ""
}

function createCard() {
    clearFields();
    const card = ``
}

function check() {
    const userGuess = DOMSelectors.input.value;
    
    if (userGuess === correctAnswer) {
        createCard();
    }

}