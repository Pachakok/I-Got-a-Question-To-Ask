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

// Delayed button for yes_page.html
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("next-btn")) {
        setTimeout(() => {
            document.getElementById("next-btn").classList.remove("hidden");
        }, 8000); // 8 seconds delay
    }

    // Delayed button for video_page.html (only shows after video ends)
    let video = document.getElementById("video");
    if (video) {
        video.addEventListener("ended", function () {
            document.getElementById("final-btn").classList.remove("hidden");
        });
    }
});
