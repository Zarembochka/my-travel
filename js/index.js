//Burger handler
(function () {
    const burgerItem = document.querySelector('.burger__menu');
    console.log(burgerItem);
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav__close');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav__active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav__active');
    });
}())