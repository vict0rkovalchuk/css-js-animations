const video = document.querySelector('video');

const thumbs = document.querySelectorAll('.navigation li img');

thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
        video.src = `video${i + 1}.mp4`;
    })
});