function goToVideoPage() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("video-screen").style.display = "block";
}

function increaseYesSize() {
    let yesButton = document.getElementById("yes-btn");
    let currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize + 5) + "px";
}

function goToSchedule() {
    document.getElementById("video-screen").style.display = "none";
    document.getElementById("schedule-screen").style.display = "block";
}
