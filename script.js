const btnStart = document.getElementById('btnStart');
const videoContainer = document.getElementById('videoContainer');
const videoOverlay = document.getElementById('videoOverlay');
const videoClose = document.getElementById('videoClose');
const video = document.getElementById('video');

btnStart.addEventListener('click', () => {
    videoOverlay.classList.add('active');
    videoContainer.classList.add('active');
    video.play();
});

videoClose.addEventListener('click', () => {
    videoOverlay.classList.remove('active');
    videoContainer.classList.remove('active');
    video.pause();
    video.currentTime = 0;
});

videoOverlay.addEventListener('click', () => {
    videoOverlay.classList.remove('active');
    videoContainer.classList.remove('active');
    video.pause();
    video.currentTime = 0;
});

video.addEventListener('ended', () => {
    videoOverlay.classList.remove('active');
    videoContainer.classList.remove('active');
});
