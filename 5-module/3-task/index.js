function initCarousel() {
  let btnRight = document.querySelector('.carousel__arrow_right');
  let btnLeft = document.querySelector('.carousel__arrow_left');
  let carousel = document.querySelector('.carousel__inner');
  let carouselWidth = carousel.offsetWidth;
  let move = 0;
  btnLeft.style.display = 'none';

  console.log(move);

  btnRight.addEventListener('click', () => {
    move -= carouselWidth;
    carousel.style.transform = `translateX(${move}px)`;

    if (move == 0) {
      btnLeft.style.display = 'none';
    } else if (move == -carouselWidth * 3) {
      btnRight.style.display = 'none';
    } else {
      btnLeft.style.display = '';
      btnRight.style.display = '';
    }

    console.log(move);
  })

  btnLeft.addEventListener('click', () => {
    move += carouselWidth;
    carousel.style.transform = `translateX(${move}px)`;
    if (move == 0) {
      btnLeft.style.display = 'none';
    } else if (move == -carouselWidth * 3) {
      btnRight.style.display = 'none';
    } else {
      btnLeft.style.display = '';
      btnRight.style.display = '';
    }
    console.log(move);
  })
}
