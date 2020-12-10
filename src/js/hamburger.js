const hamburger = document.querySelector('#mobile-menu');
const menu = document.querySelector('#desktop-menu');

hamburger.addEventListener('click', () => {
  if (hamburger.classList.contains('animeX')) {
    // hide mobile menu
    hamburger.classList.remove('animeX');
    menu.classList.add('hide-on-phone');
  } else {
    // display mobile menu
    hamburger.classList.add('animeX');
    menu.classList.remove('hide-on-phone');
  }
});

menu.addEventListener('click', () => {
  // hide mobile menu
  console.log('remove animeX');
  hamburger.classList.remove('animeX');
  menu.classList.add('hide-on-phone');
});
