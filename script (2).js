function handleNoClick() {
    alert("Think again! 😜");
}

// Ensure all navigation buttons work properly
document.addEventListener("DOMContentLoaded", function () {
    // Button on yes_page.html
    let nextBtn = document.getElementById("next-btn");
    if (nextBtn) {
        nextBtn.onclick = function () {
            window.location.href = "video_page.html";
        };
    }

    // Button on video_page.html
    let finalBtn = document.getElementById("final-btn");
    if (finalBtn) {
        finalBtn.onclick = function () {
            window.location.href = "schedule_page.html";
        };
    }
});
