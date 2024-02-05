const animals = [
    {
        name: "sloth",
        img: "https://4.bp.blogspot.com/-XBHVmMlvP4w/VmsqEm1zkeI/AAAAAAABhzE/6vxIKM9hUH4/s1600/funny-animals-190-02.jpg",
        funFact: "Sloths are surprisingly good at swimming.",
    },

    {
        name: "goat",
        img: "https://www.funoramic.com/wp-content/uploads/2017/10/Funny-Animal-Pictures-of-The-Day-24-Pics-3.jpg",
        funFact: "Goats are burpers!",
    },

    {
        name: "fox",
        img: "https://1.bp.blogspot.com/-3A1wfaOPDmM/VjPJ64I7zQI/AAAAAAABfwQ/7ImThvwjpq0/s1600/funny-animals-184-27.jpg",
        funFact: "Foxes use earth's magnetic field to hunt.",
    },

    {
        name: "dog",
        img: "http://www.dumpaday.com/wp-content/uploads/2015/04/the-funny-animals-34.jpg",
        funFact: "No two dog noses are alike!",
    },

    {
        name: "cat",
        img: "https://funnypicture.org/wallpaper/2015/03/funny-animals-pictures-33-cool-hd-wallpaper.jpg",
        funFact: "Cats cannot taste anything sweet.",
    },

    {
        name: "squirrel",
        img: "https://cdn.ebaumsworld.com/mediaFiles/picture/2475828/85493615.jpg",
        funFact: "Squirrel's front teeth never stop growing!",
    },

    {
        name: "red panda",
        img: "https://1.bp.blogspot.com/-meAQ6k6Wln0/VzYocnqK6ZI/AAAAAAABnEc/YPSg2xCNirUfv_pIKxbAI73H2uyYZryGgCLcB/s1600/funny-animals-212-32.jpg",
        funFact: "Red Pandas are more of a night owl than early bird.",
    },

    {
        name: "rabbit",
        img: "https://3.bp.blogspot.com/-QaliFPG_0_4/VzYoQi3w76I/AAAAAAABnDY/kn2nztp_IMs9RUPv-kRbWU2Xlwy0FC0bACLcB/s1600/funny-animals-212-15.jpg",
        funFact: "A baby rabbit is called a kitten or kit!",
    },

    {
        name: "bear",
        img: "https://2.bp.blogspot.com/-IXGOd3nX4kY/VzYoXdACA8I/AAAAAAABnEA/0oXxA5Slj-sLSejfUcTsJVDvzi69HZPvgCLcB/s1600/funny-animals-212-23.jpg",
        funFact: "Grizzly bears love salmon!",
    },

    {
        name: "seal",
        img: "https://4.bp.blogspot.com/-9fl4IzGUsPU/VzYob6_sscI/AAAAAAABnEY/_CYVkIZzll0cw1JJCJVClw6TwAuXgaX7wCLcB/s1600/funny-animals-212-31.jpg",
        funFact: "Seals sleep both on land and in the water.",
    },

    {
        name: "koala",
        img: "https://1.bp.blogspot.com/-SSAcS0zTjus/VWi10maAspI/AAAAAAABX1M/MorOAe0GvNg/s1600/funny-animals-162-06.jpg",
        funFact: "Koalas are picky eaters, only eating eucalyptus leaves!",
    },

    {
        name: "lion",
        img: "https://3.bp.blogspot.com/-LneQYPKyv-0/VWi18oUWbnI/AAAAAAABX24/WypBlU87LPA/s1600/funny-animals-162-20.jpg",
        funFact: "Lions are the only cats who roar together!",
    },
    
];

const DOMSelectors ={
    img: document.querySelectorAll(".img"),
    container: document.querySelector("#box"),
    form: document.querySelector("#form"),
    button: document.getElementById("button"),
    card: document.querySelector(".card"),
    input: document.getElementById("input"),
    
}

function clearFields() {
    DOMSelectors.input.value=""
}

let randomCard;

function randomize (array) {
    const randomInt = Math.floor(Math.random() * array.length);
    return array[randomInt]
}

function createCard() {
    const randomCard = randomize(animals)
    console.log(randomCard)
    DOMSelectors.container.innerHTML = ''
    DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<div class="card" id="box">
    <img src="${randomCard.img}" class="card-img">
    </div>`
); 
    return randomCard
}

function resetGame() {
    clearFields();
    animal = createCard();
}


let animal = createCard()

button.addEventListener("click", function(event){
    const userGuess = DOMSelectors.input.value.toLowerCase(); 
    const correctAnswer = animal.name.toLowerCase();
    clearFields()

    if (userGuess === correctAnswer) {
        console.log("Win")
        DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<div class="card" id="box">
    <h2> ${animal.name} </h2>
    <p> ${animal.funFact} </p>
    </div>`
    );
    setTimeout(resetGame, 3000);
} else {
        console.log("Try Again")
        DOMSelectors.container.insertAdjacentHTML("beforeend",
    `<div class="card" id="box">
    <h2> Not Quite, Try Again! </h2>
    </div>`
)}
});
