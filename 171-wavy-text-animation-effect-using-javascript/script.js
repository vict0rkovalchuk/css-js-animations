const text = document.querySelector('.text');

text.innerHTML = text.textContent.replace(/\S/g, (char, i) => {
    return `<span style="--i: ${i}">${char}</span>`;
});