function showDownloadPopup() {
    // Affiche le pop-up
    document.getElementById("download-popup").style.display = "block";

    // Joue le son
    var sound = document.getElementById("error-sound");
    sound.play();
}

function closePopup() {
    // Cache le pop-up
    document.getElementById("download-popup").style.display = "none";
}
