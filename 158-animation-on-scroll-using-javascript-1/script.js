const sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        const scrollDistance = window.scrollY;
        const secDistance = sec.offsetTop;

        sec.classList[scrollDistance >= secDistance - 150 ? 'add' : 'remove']('show-animate');
    });
}