const baseLink = 
  "https://niravkpatel28.github.io/github-image-repository";

export const HamBurger = () => {
    const state = {
        isMenuOpen: false,
    };

    const openMenu = () => {
        state.isMenuOpen = !state.isMenuOpen;

        let navContainer = document.querySelector(".nav-container");

        if(state.isMenuOpen){
            menuImage.src = `${baseLink}/webpage/close.png`;
            navContainer.classList.add('open-nav');
        }
        else{
            menuImage.src = `${baseLink}/webpage/menu-black.png`;
            navContainer.classList.remove('open-nav');
        }
    };

    const markup = document.createElement('div');
    markup.classList.add('hamburger-menu');

    const menuImage = document.createElement('img');
    menuImage.src = `${baseLink}/webpage/menu-black.png`;

    markup.appendChild(menuImage);

    markup.addEventListener('click', openMenu);

    return markup;
};