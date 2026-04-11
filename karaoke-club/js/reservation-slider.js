export default function initReservationSlider() {
  const startSlide = window.innerWidth <= 992 ? 0 : 2;
  const reservationSwiper = new Swiper(".reservation-swiper", {
    initialSlide: startSlide,
    slidesPerView: 1.5,
    centeredSlides: false,
    loop: true,
    loopAddBlankSlides: true,
    grabCursor: true,

    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 4,
        centeredSlides: true,
      },
      1535: {
        slidesPerView: 5,
        centeredSlides: true,
      },
    },

    on: {
      init: function (swiper) {
        updateFraction(swiper);
      },
      slideChange: function (swiper) {
        updateFraction(swiper);
      },
    },
  });

  function updateFraction(swiper) {
    const wrapper = swiper.el.parentElement;
    const currentSpan = wrapper.querySelector(".slider-counter .current");
    const totalSpan = wrapper.querySelector(".slider-counter .total");

    if (currentSpan && totalSpan) {
      const currentNumber = swiper.realIndex + 1;
      currentSpan.textContent = currentNumber;

      const activeSlide = swiper.slides[swiper.activeIndex];

      const badge = activeSlide.querySelector(".active-slide-badge");

      if (badge) {
        badge.textContent = currentNumber;
      }

      const realSlidesCount = swiper.slides.filter(
        (slide) => !slide.classList.contains("swiper-slide-duplicate"),
      ).length;

      totalSpan.textContent = realSlidesCount;
    }
  }
}
