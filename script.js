const form = document.querySelector('form');
const singUp = document.querySelector('.sing-up-container');
const successfulCard = document.querySelector('.successful-card');

const validateEmail = () => {
    const emailInput = document.getElementById('email');
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    singUp.classList.add('dissapear');
    successfulCard.classList.remove('dissapear');
})