const startButton = document.getElementById("startButton");
const heroVideoContainer = document.getElementById("heroVideoContainer");
const heroVideo = document.getElementById("heroVideo");
const dipToBlack = document.getElementById("dipToBlack");
const videoClose = document.getElementById("videoClose");

function openVideo() {
    // Fade to black, then show video — background stays dark while video plays
    dipToBlack.classList.add("active");

    setTimeout(() => {
        heroVideoContainer.classList.add("active");
        heroVideo.play();
    }, 800);
}

function closeVideo() {
    // Hide video, then fade background back in
    heroVideo.pause();
    heroVideo.currentTime = 0;
    heroVideoContainer.classList.remove("active");

    setTimeout(() => {
        dipToBlack.classList.remove("active");
    }, 300);
}

startButton.addEventListener("click", openVideo);
videoClose.addEventListener("click", closeVideo);
heroVideo.addEventListener("ended", closeVideo);
