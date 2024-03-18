let planetElements = document.querySelectorAll('.planet');
let leftButton = document.getElementById('left-button');
let rightButton = document.getElementById('right-button');
let images = ['earth.jpg', 'mars.jpg', 'jupiter.jpg', 'saturn.jpg','uranus.jpg','neptune.jpg','mercury.jpg','venus.jpg']; // Add all your image filenames here
let currentImageIndex = 0;
let planetNameElement = document.querySelector('.planet-name');
let planetDescriptionElement = document.querySelector('.planet-description');

let planetInfo = {
    'earth': {name: 'Earth', description: 'Our home planet.'},
    'mars': {name: 'Mars', description: 'The red planet.'},
    'jupiter': {name: 'Jupiter', description: 'The largest planet in our solar system.'},
    'saturn': {name: 'Saturn', description: 'The planet with the rings.'},
    'uranus': {name: 'Uranus', description: 'The planet that rotates on its side.'},
    'neptune': {name: 'Neptune', description: 'The planet furthest from the sun.'},
    'mercury': {name: 'Mercury', description: 'The smallest planet in our solar system.'},
    'venus': {name: 'Venus', description: 'The hottest planet in our solar system.'}
    // Add info for the other planets
};

let moons = {
    'earth': [document.querySelector('.earth-moon')],
    'mars': [document.querySelector('.mars-moon-1'), document.querySelector('.mars-moon-2')],
    'jupiter': [document.querySelector('.jupiter-1'), document.querySelector('.jupiter-2'), document.querySelector('.jupiter-3'), 
    document.querySelector('.jupiter-4'), document.querySelector('.jupiter-5')]
};

function hideAllMoons() {
    for (let planet in moons) {
        moons[planet].forEach(function(moon) {
            moon.style.opacity = '0';
            setTimeout(function() {
                moon.style.display = 'flex';
            }, 1000); // After 1 second, hide the moon
        });
    }
}

leftButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    planetElements.forEach(function(planetElement) {
        planetElement.style.backgroundImage = 'url(./assets/planets/' + images[currentImageIndex] + ')';
    });
    hideAllMoons();
    let currentPlanet = images[currentImageIndex].split('.')[0];
    planetNameElement.textContent = planetInfo[currentPlanet].name;
    planetDescriptionElement.textContent = planetInfo[currentPlanet].description;
    if (moons[images[currentImageIndex].split('.')[0]]) {
        moons[images[currentImageIndex].split('.')[0]].forEach(function(moon) {
            moon.style.display = 'flex';
            setTimeout(function() {
                moon.style.opacity = '1';
            }, 0); // Immediately after showing the moon, start the transition to opacity 1
        });
    }
    
});

rightButton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    planetElements.forEach(function(planetElement) {
        planetElement.style.backgroundImage = 'url(./assets/planets/' + images[currentImageIndex] + ')';
    });
    hideAllMoons();
    let currentPlanet = images[currentImageIndex].split('.')[0];
    planetNameElement.textContent = planetInfo[currentPlanet].name;
    planetDescriptionElement.textContent = planetInfo[currentPlanet].description;
    if (moons[images[currentImageIndex].split('.')[0]]) {
        moons[images[currentImageIndex].split('.')[0]].forEach(function(moon) {
            moon.style.display = 'flex';
            setTimeout(function() {
                moon.style.opacity = '1';
            }, 0); // Immediately after showing the moon, start the transition to opacity 1
        });
    }
});

const submitButton = document.querySelector("form button.form-button")
const emailInput = document.querySelector("input#email")

submitButton.addEventListener("click", submitForm)

const submit = []

function submitForm(event) {
    event.preventDefault()

    const name = document.querySelector("input#name").value
    const email = emailInput.value

    if (validateEmail(email)) {
        const formData = {
            name,
            email
        }

        submit.push(formData)

        displaySubmit()
        resetarForm()

    } else {
        showError("Please enter a valid email address. It must contain @ and a '.'")
    }
    
}

function validateEmail(email) {
    const teste = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return teste.test(email)
}

function displaySubmit() {
    console.log(submit)
}

function resetarForm() {
    document.querySelector("input#name").value = ""
    emailInput.value = ""
}

function showError(message) {

    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }

    const errorElement = document.createElement("p");
    errorElement.className = "error-message";
    errorElement.textContent = message;

    emailInput.parentNode.insertBefore(errorElement, emailInput);

    setTimeout(() => {
        errorElement.remove();
    }, 3000);
}

document.querySelector('.form-button').addEventListener('click', function(event) {
    event.preventDefault();

    const existingError = document.querySelector('.error-message');
    if (!existingError) {
        const thankyouMessage = document.getElementById('thankyou-message');
        thankyouMessage.style.display = 'block';
        thankyouMessage.style.animation = '1s slideIn forwards';

        setTimeout(function() {
            thankyouMessage.style.animation = '1s slideOut forwards';
        }, 4000);

        setTimeout(function() {
            thankyouMessage.style.display = 'none';
        }, 5000);
    }

});

document.querySelector('.forms').addEventListener('submit', function(event) {
    event.preventDefault();

    
});