export default function initProductSliders() {
  const sliders = document.querySelectorAll(".product-slider");

  sliders.forEach((container) => {
    const thumbs = container.querySelector(".thumbs-slider");
    const main = container.querySelector(".main-slider");
    
    const parentTab = container.closest('.tabs__item');
    const controls = parentTab ? parentTab.querySelector('.slider-controls') : null;

    const swiperThumbs = new Swiper(thumbs, {
      spaceBetween: 0,
      slidesPerView: 5,
      freeMode: true,
      watchSlidesProgress: true,
      loop: true,
    });

    const swiperMain = new Swiper(main, {
      spaceBetween: 0,
      observer: true, 
      observeParents: true,
      lazy: true,
      loop: true, 
      thumbs: {
        swiper: swiperThumbs,
      },

      navigation: {
        nextEl: controls ? controls.querySelector('.slider-next') : null,
        prevEl: controls ? controls.querySelector('.slider-prev') : null,
      },

      on: {
        init: function () {
          updateCounter(this, controls);
        },
        slideChange: function () {
          updateCounter(this, controls);
        },
      },
    });
  });
}


function updateCounter(swiper, controls) {
  if (!controls) return;
  const current = controls.querySelector('.current');
  const total = controls.querySelector('.total');
  
  if (current && total) {
    current.textContent = swiper.realIndex + 1;
    total.textContent = swiper.slides.length;
  }
}