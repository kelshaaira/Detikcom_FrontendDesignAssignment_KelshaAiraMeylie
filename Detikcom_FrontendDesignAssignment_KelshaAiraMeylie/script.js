document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.querySelector('nav a[href="#home"]');

    homeLink.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.hash = "home";
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        const linkWidth = homeLink.offsetWidth;
        homeLink.style.setProperty('--link-width', `${linkWidth}px`);
    });

    homeLink.addEventListener('mouseenter', function () {
        const linkWidth = homeLink.offsetWidth;
        homeLink.style.setProperty('--link-width', `${linkWidth}px`);
    });

    homeLink.addEventListener('mouseleave', function () {
        homeLink.style.removeProperty('--link-width');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let currentImageIndex = 0;
    const totalImages = 4;
    const largeImages = document.querySelectorAll('.large-image');
    const smallImages = document.querySelectorAll('.small-image img');

    function changeImage(direction) {
        currentImageIndex += direction;

        if (currentImageIndex < 0) {
            currentImageIndex = totalImages - 1;
        } else if (currentImageIndex >= totalImages) {
            currentImageIndex = 0;
        }

        largeImages.forEach(image => {
            image.style.display = 'none';
        });

        largeImages[currentImageIndex].style.display = 'block';

        smallImages.forEach(smallImage => {
            smallImage.style.filter = 'grayscale(100%)';
        });

        smallImages[currentImageIndex].style.filter = 'grayscale(0%)';
    }

    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    arrowLeft.addEventListener('click', function () {
        changeImage(-1);
    });

    arrowRight.addEventListener('click', function () {
        changeImage(1);
    });

    changeImage(0);
});

function changeBorderRadius(element) {
    element.classList.toggle('clicked');
    
    document.querySelectorAll('.btn-group button').forEach(btn => {
      if (btn !== element) {
        btn.classList.remove('clicked');
      }
    });
  }