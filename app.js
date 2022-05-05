let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav-mobile');
let iconoHamburger = document.querySelector('.menuHamburguesa');
let band = true;

// Menú hamburgesa
hamburger.addEventListener('click',()=>{
    if(band === false){
        nav.style.display = 'none';

        iconoHamburger.src = 'images/icon-hamburger.svg';

        band = true;
    }

    else if(band === true){
        nav.style.display = 'block';

        iconoHamburger.src = 'images/icon-close.svg';

        band = false;
    }
    
});








