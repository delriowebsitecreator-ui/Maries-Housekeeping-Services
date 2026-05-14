// SCROLL REVEAL

const revealElements = document.querySelectorAll('.section, .loyalty, .contact');

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

const langToggle = document.querySelector('#langToggle');

if (langToggle) {
  let spanish = false;

  langToggle.addEventListener('click', () => {
    spanish = !spanish;

    const promoBar = document.querySelector('.promo-bar');
    const heroTitle = document.querySelector('.hero h1');
    const heroText = document.querySelector('.hero p');
    const navCall = document.querySelector('.nav-call');
    const heroCallBtn = document.querySelector('.hero-actions .primary');

    if (spanish) {
      langToggle.textContent = 'English';

      if (promoBar) promoBar.textContent = '✨ 10% de descuento en tu primera limpieza • Descuentos para veteranos';
      if (heroTitle) heroTitle.textContent = 'Limpieza natural para hogares y Airbnbs frescos y acogedores.';
      if (heroText) heroText.textContent = 'Marie’s Housekeeping Services ofrece limpieza residencial y para Airbnbs usando productos caseros y no agresivos.';
      if (navCall) navCall.textContent = 'Llamar';
      if (heroCallBtn) heroCallBtn.textContent = 'Llamar Ahora';

    } else {
      langToggle.textContent = 'Español';

      if (promoBar) promoBar.textContent = '✨ 10% Off Your First Cleaning • Veteran Discounts Available';
      if (heroTitle) heroTitle.textContent = 'Natural housekeeping that makes every space feel fresh.';
      if (heroText) heroText.textContent = 'Marie’s Housekeeping Services helps homes and Airbnbs stay clean, welcoming, and guest-ready using homemade, non-harsh cleaning products.';
      if (navCall) navCall.textContent = 'Call Now';
      if (heroCallBtn) heroCallBtn.textContent = 'Call (830) 308-0438';
    }
  });
}
