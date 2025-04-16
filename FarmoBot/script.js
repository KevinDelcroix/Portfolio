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
