const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gif = document.querySelector('.gif_container img');

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Increase the size of the Yes button
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;

    // Increase the size of the GIF
    const currentGifSize = parseFloat(window.getComputedStyle(gif).width);
    gif.style.width = `${currentGifSize * 1.2}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Delayed button for yes_page.html with fade-in effect
document.addEventListener("DOMContentLoaded", function () {
    let nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        setTimeout(() => {
            nextBtn.classList.add('show'); // Add 'show' class for fade-in effect
            nextBtn.classList.remove('hidden'); // Remove 'hidden' class
        }, 8000); // 8 seconds delay
    }

    // Delayed button for video_page.html (only shows after video ends)
    let video = document.getElementById("video");
    if (video) {
        video.addEventListener("ended", function () {
            let finalBtn = document.getElementById("final-btn");
            finalBtn.classList.add('show'); // Add 'show' class for fade-in effect
            finalBtn.classList.remove('hidden'); // Remove 'hidden' class
        });
    }
});
