document.addEventListener("DOMContentLoaded", function() { 

  const logoBall = document.querySelector('.header__logo');
  const logoText = document.querySelector('.header__logo-text');
  const ball = document.querySelector('.header__ball');
  const sportsman = document.querySelector('.sportsman');
  const turn = document.querySelector('.header__ball');
  const links = document.querySelector('.header-links');
  const sections = document.querySelectorAll('.section');
  const menu = document.querySelectorAll('.content-nav__menu-item');

  // logo
  setTimeout(() => {
    logoBall.classList.add('active');
    logoText.classList.add('active');
  }, 300);

  // ball
  setTimeout(() => {
    ball.classList.add('fly');
  }, 500);

  //sportsman
  setTimeout(() => {
    sportsman.classList.add('sportsman-active');
  }, 1100);

  //turn
  setTimeout(() => {
    turn.classList.add('turn');
  }, 2000);

  //links
  setTimeout(() => {
    links.classList.add('active');
  }, 3500);

  //sections show
  sections.forEach((elem, i) => {
    if(window.innerWidth < 767) {
      setTimeout(() => {
        elem.classList.remove('section-hidden')
      },2000 + i * 100)
    } else {
      setTimeout(() => {
        elem.classList.remove('section-hidden')
      }, 3000 + i * 100)
    }
  });

  // menu
  menu.forEach((elem, i) => {
    setTimeout(() => {
      elem.classList.add('show')
    }, 3700 + i * 100)
  });
});
