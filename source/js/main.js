import Swiper from './vendor/swiper-bundle';

// подгрузка видео

const playVideo = () => {
  const iframe = document.querySelector('.about__video iframe');
  iframe.setAttribute('src', iframe.getAttribute('data-src'));
  iframe.style.display = 'block';
};

document.querySelector('#play').addEventListener('click', playVideo);

// абонементы

const tariffs = [
  ['TRAINER', 5000],
  ['DAILY', 1700],
  ['FULL', 2700]
];

const prices = document.querySelectorAll('.membership__card-price');
const termButtons = document.querySelectorAll('.membership__terms-btn');

termButtons.forEach((btn) => {
  btn.addEventListener('click', (evt) => {
    const currentTermBtn = document.querySelector('.membership__terms-btn--current');
    currentTermBtn.classList.remove('membership__terms-btn--current');
    btn.classList.add('membership__terms-btn--current');
    prices.forEach((price, index) => {
      [...price.children].forEach((elem) => {
        elem.textContent = tariffs[index][1] * parseInt(evt.target.textContent, 10);
      });
    });
  });
});

// swiper

const swiperJuri = new Swiper('.games__juri-list-wrapper', {
  spaceBetween: 40,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 4,
      simulateTouch: false
    }
  },
  navigation: {
    nextEl: '#juri-next',
    prevEl: '#juri-prev',
  }
});

const swiperReviews = new Swiper('.reviews__wrapper', {
  spaceBetween: 0,
  centeredSlides: true,
  breakpoints: {
    1366: {
      simulateTouch: false
    }
  },
  navigation: {
    nextEl: '#review-next',
    prevEl: '#review-prev'
  }
});

swiperJuri.init();
swiperReviews.init();

// корректировка фокуса в слайдере

const slidesCount = document.querySelectorAll('.games__juri .swiper-slide').length;
const swiperList = document.querySelector('.games__juri-list');
const swiperBtns = document.querySelectorAll('.games__juri .arrow-btn');

document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab' && document.activeElement.parentNode === swiperList) {
    if (event.shiftKey && document.activeElement.ariaLabel === `1 / ${slidesCount}`) {
      event.preventDefault();
      swiperBtns[0].focus();
    } else if (document.activeElement.ariaLabel === `${slidesCount} / ${slidesCount}`) {
      event.preventDefault();
      swiperBtns[1].focus();
    }
  }
});

// переключение табов

const faqTabs = document.querySelectorAll('.faq__tab');
const detailsLists = document.querySelectorAll('.faq__details-list');

faqTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    const activeTab = document.querySelector('.faq__tab--current');
    const activeDetailsList = document.querySelector('.faq__details-list--current');
    activeTab.classList.remove('faq__tab--current');
    faqTabs[index].classList.add('faq__tab--current');
    activeDetailsList.classList.remove('faq__details-list--current');
    detailsLists[index].classList.add('faq__details-list--current');
  });
});
