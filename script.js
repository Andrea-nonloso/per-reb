const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const celebration = document.getElementById('celebration');

// Logic for the 'No' button to run away
function moveButton() {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = 'fixed'; // Change to fixed to move freely around screen
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton); // just in case they manage to click it

// Logic for the 'Yes' button
yesBtn.addEventListener('click', () => {
    celebration.classList.remove('hidden');
    launchConfetti();
});

// Simple Confetti Effect
function launchConfetti() {
    const colors = ['#ff6b8b', '#ff8e53', '#ffffff', '#ffd700'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-10px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.borderRadius = '50%';
        confetti.style.zIndex = '1000';
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear infinite`;

        document.body.appendChild(confetti);

        // Remove confetti after it falls
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Inject confetti keyframes styles dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fall {
    to {
        transform: translateY(100vh) rotate(720deg);
    }
}
`;
document.head.appendChild(styleSheet);
