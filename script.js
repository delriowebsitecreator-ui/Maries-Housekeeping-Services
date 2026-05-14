// SCROLL REVEAL

const revealElements = document.querySelectorAll(
  '.section, .loyalty, .contact'
);

revealElements.forEach((element) => {
  element.classList.add('reveal');
});

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add('show');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// LANGUAGE TOGGLE

const langToggle = document.getElementById('langToggle');

let spanish = false;

langToggle.addEventListener('click', () => {

    spanish = !spanish;

    // HERO TITLE

    const heroTitle = document.querySelector('.hero h1');

    const heroText = document.querySelector('.hero p');

    // BUTTONS

    const navCall = document.querySelector('.nav-call');

    const primaryBtn = document.querySelector('.primary');

    // PROMO BAR

    const promoBar = document.querySelector('.promo-bar');

    if(spanish){

        langToggle.innerText = 'English';

        promoBar.innerText =
        '✨ 10% de descuento en tu primera limpieza • Descuentos para veteranos';

        heroTitle.innerText =
        'Limpieza natural para hogares y Airbnbs frescos y acogedores.';

        heroText.innerText =
        'Marie’s Housekeeping Services ofrece limpieza residencial y para Airbnbs utilizando productos caseros y no agresivos.';

        navCall.innerText = 'Llamar';

        primaryBtn.innerText = 'Llamar Ahora';

    } else {

        langToggle.innerText = 'Español';

        promoBar.innerText =
        '✨ 10% Off Your First Cleaning • Veteran Discounts Available';

        heroTitle.innerText =
        'Natural housekeeping that makes every space feel fresh.';

        heroText.innerText =
        'Marie’s Housekeeping Services helps homes and Airbnbs stay clean, welcoming, and guest-ready using homemade, non-harsh cleaning products.';

        navCall.innerText = 'Call Now';

        primaryBtn.innerText = 'Call (830) 308-0438';
    }

});
