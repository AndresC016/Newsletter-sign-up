const form = document.querySelector('form');
const singUp = document.querySelector('.sing-up-container');
const successfulCard = document.querySelector('.successful-card');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    singUp.classList.add('dissapear');
    successfulCard.classList.remove('dissapear');
})