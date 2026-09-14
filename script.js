const btnGetStarted = document.getElementById('btnGetStarted');
const videoModal = document.getElementById('videoModal');
const modalContent = document.querySelector('.modal-content');
const modalVideo = document.getElementById('modalVideo');
const heroOverlay = document.querySelector('.hero-overlay');

// Grow the video out of whichever button triggered it, and shrink back into
// that same spot on close (transform-origin is set relative to the modal
// box itself, not the viewport, so we measure both rects here).
function openVideoModal(originButton) {
    const btnRect = originButton.getBoundingClientRect();
    const modalRect = modalContent.getBoundingClientRect();
    const originX = btnRect.left + btnRect.width / 2 - modalRect.left;
    const originY = btnRect.top + btnRect.height / 2 - modalRect.top;
    modalContent.style.transformOrigin = `${originX}px ${originY}px`;

    document.body.classList.add('modal-open');
    heroOverlay.classList.add('fade-black');
    videoModal.classList.add('active');
    videoModal.setAttribute('aria-hidden', 'false');
    modalVideo.currentTime = 0;
    modalVideo.play();
}

function closeVideoModal() {
    videoModal.classList.remove('active');
    heroOverlay.classList.remove('fade-black');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    modalVideo.pause();
}

btnGetStarted.addEventListener('click', () => openVideoModal(btnGetStarted));

// Close modal when clicking on background
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        closeVideoModal();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        closeVideoModal();
    }
});

// When the video finishes, fade the background back and collapse into the button
modalVideo.addEventListener('ended', closeVideoModal);
