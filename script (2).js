function handleNoClick() {
    alert("Think again! 😜");
}

// Ensure all navigation buttons work properly
document.addEventListener("DOMContentLoaded", function () {
    // Button on yes_page.html - Appears after 5 seconds
    let nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.style.display = "none"; // Hide initially
        setTimeout(() => {
            nextBtn.style.display = "block"; // Show after 5 seconds
        }, 5000);
    }

    // Button on video_page.html - Appears only after video finishes
    let finalBtn = document.getElementById("final-btn");
    let video = document.getElementById("video");

    if (video && finalBtn) {
        finalBtn.style.display = "none"; // Hide initially
        video.addEventListener("ended", function () {
            finalBtn.style.display = "block"; // Show when video ends
        });
    }
});
