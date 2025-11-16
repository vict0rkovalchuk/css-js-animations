const skewed = document.querySelector('.skewed');

window.addEventListener('scroll', () => {
    let value  = 75 + window.scrollY / 30;
    skewed.style.clipPath = `polygon(100% ${value}%, 0% 100%, 100% 100%)`;
})