const mainContainer = document.querySelector('.main-container');
const thanksContainer = document.querySelector('.thank-you');
const submitBtn = document.querySelector('.btn-submit');
const rateBtn = document.querySelector('.rate-again');
const rates = document.querySelectorAll('.rate');
const rating = document.getElementById('rating');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    thanksContainer.classList.remove('hidden');
    mainContainer.style.display = 'none';
})

rateBtn.addEventListener('click', (e) => {
    e.preventDefault();
    thanksContainer.classList.add('hidden');
    mainContainer.style.display = 'block';
})

for (let rate of rates) {
    rate.addEventListener('click', () => {
        rating.innerHTML = rate.innerHTML;
 })
}