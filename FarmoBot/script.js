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


const mediaBlocks = document.querySelectorAll('.media-hover');

  mediaBlocks.forEach(block => {
    const video = block.querySelector('video');

    block.addEventListener('mouseenter', () => {
      video.currentTime = 0;
      video.play();
    });

    block.addEventListener('mouseleave', () => {
      video.pause();
    });
  });