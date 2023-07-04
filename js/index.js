//Burger handler
(function () {
    const burgerItem = document.querySelector('.burger__menu');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem = document.querySelector('.header__nav__close');
    
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__nav__active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__nav__active');
    });

    document.addEventListener('click', (event) => {
        let target = event.target.closest('.header__nav');

        if (!target 
            && !event.target.classList.contains('burger__menu__line')) {
                menu.classList.remove('header__nav__active');
        }
    });
}())