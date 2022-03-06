const qs = (e) => document.querySelector(e);

const ballImg = qs("img");
const input = qs("input");
const answer = qs(".answer");
const error = qs(".error");

const answersArr = [
    "Tak!",
    "Nie!",
    "Może 🤔",
    "Ciężko powiedzieć...",
    "Nie chcesz znać odpowiedzi 😅",
    "Jeszcze jak!",
    "Pewnie!",
    "No tak niezbyt",
    "Nawet się nie zastanawiaj!",
    "Oczywiście!",
    "Nie ma na to prawidłowej odpowiedzi",
    "I tak i nie",
];

//function
const shakeBall = () => {
    ballImg.classList.add("shake-animation");
    setTimeout(checkInput, 1500);
    error.textContent = "";
};

const checkInput = () => {
    if (input.value !== "" && input.value.slice(-1) === "?") {
        showAnswer();
        error.textContent = "";
    } else if (input.value !== "" && input.value.slice(-1) !== "?") {
        error.textContent = 'Pytanie musi być zakończone znakiem "?"';
        answer.textContent = "";
    } else {
        error.textContent = "Musisz zadać pytanie!";
        answer.textContent = "";
    }
    ballImg.classList.remove("shake-animation");
};

const showAnswer = () => {
    const number = Math.floor(Math.random() * answersArr.length);
    answer.innerHTML = `<span>Odpowiedź:</span> ${answersArr[number]}`;
};

//addEventListener
ballImg.addEventListener("click", shakeBall);
