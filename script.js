const form = document.querySelector('form');
const singUp = document.querySelector('.sing-up-container');
const successfulCard = document.querySelector('.successful-card');

const validateEmail = () => {
    const emailInput = document.getElementById('email');
    const error = document.querySelector('.error');
    const emailEntered = document.getElementById('email-entered');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    

    if(regex.test(emailInput.value)) {
        error.textContent = '';
        emailEntered.textContent = emailInput.value;
        emailInput.style.border = '1px solid hsl(234, 29%, 20%)';
    } else {
        error.textContent = 'Valid email required';
        emailInput.style.background = 'hsl(4, 100%, 95%)';
        emailInput.style.border = '1px solid hsl(4, 100%, 67%)';
        emailInput.style.color = 'hsl(4, 100%, 67%)';
    }
}

form.addEventListener('submit', (e) => {
    const buttonEmail = document.getElementById('button-email');
    
    e.preventDefault();
    singUp.classList.add('dissapear');
    successfulCard.classList.remove('dissapear');

    if(emailInput.value.trim() === '') {
        buttonEmail.disabled = true;
    } else {
        buttonEmail.disabled = false;
    }
})