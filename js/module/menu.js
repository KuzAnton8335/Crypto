// логика меню при маленьких экранах
const headerNavBtn = document.querySelector('.header__nav-btn');
const headerNavigation = document.querySelector('.header__navigation');

headerNavBtn.addEventListener('click', () => {
  headerNavigation.classList.toggle('header__navigation-open')
})

