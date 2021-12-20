let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');

searchBtn.onclick = () => {
    searchBtn.classList.toggle('fa-times');
    searchForm.classList.toggle('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
};

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchForm.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
};

function prev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
};


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 40,
    autoplay: {
      delay:4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      554: {
        slidesPerView: 3,
        
      },
      600: {
        slidesPerView: 4,
        
      },
      1000: {
        slidesPerView: 4,
        spaceBetween: -40,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });