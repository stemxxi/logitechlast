
    




/******  ОТЗЫВЫ КЛИЕНТЫ   *****/

var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });




// \

const navLinks = document.querySelectorAll('.nav-link[data-goto]');

if(navLinks.length > 0) {
  navLinks.forEach(navLink => {
    navLink.addEventListener("click", onNavLinkClick);
  });


  function onNavLinkClick(e) {
    const navLink = e.target;
    if(navLink.dataset.goto && document.querySelector(navLink.dataset.goto)){
      const gotoBlock = document.querySelector(navLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('footer').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();

    }
  }
}