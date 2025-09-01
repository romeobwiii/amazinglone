// Floating hearts animation
const heartsContainer = document.querySelector('.hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 5 + Math.random() * 5 + 's';
    heart.style.width = 20 + Math.random() * 20 + 'px';
    heart.style.height = heart.style.width;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000); // remove after animation
}

// Generate hearts every 400ms
setInterval(createHeart, 400);
