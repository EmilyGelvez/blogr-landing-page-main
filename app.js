let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav-mobile');
let iconoHamburger = document.querySelector('.menuHamburguesa');
let band = true;

// Menú hamburgesa
hamburger.addEventListener('click',()=>{
    if(band === false){
        nav.style.display = 'none';

        iconoHamburger.src = 'file:///C:/Users/Emily%20Gelvez/Desktop/MisPaginasWeb/Retos/reto%20p%C3%A1gina%20rosada%20junior/blogr-landing-page-main/images/icon-hamburger.svg';

        band = true;
    }

    else if(band === true){
        nav.style.display = 'block';

        iconoHamburger.src = 'file:///C:/Users/Emily%20Gelvez/Desktop/MisPaginasWeb/Retos/reto%20p%C3%A1gina%20rosada%20junior/blogr-landing-page-main/images/icon-close.svg';

        band = false;
    }
    
});








