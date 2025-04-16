  const container = document.querySelector('.floating-icons');
  const icons = ['Images/Paw.png', 'Images/Fish.png'];

  for (let i = 0; i < 20; i++) {
    const img = document.createElement('img');
    img.src = icons[Math.floor(Math.random() * icons.length)];
    img.className = 'floating-icon';
    img.style.left = Math.random() * 100 + 'vw';
    img.style.top = Math.random() * 100 + 'vh';
    img.style.animationDuration = 10 + Math.random() * 20 + 's';
    img.style.width = 30 + Math.random() * 40 + 'px';
    container.appendChild(img);
  }

  const images = document.querySelector('.footer-icons');
  const footer = document.querySelector('footer');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        images.classList.add('visible');
      } else {
        images.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.5 // dès que le footer est à moitié visible
  });

  observer.observe(footer);

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
