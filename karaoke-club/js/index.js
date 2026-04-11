import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import initTabs from "./halls-tabs.js";
import initProductSliders from "./halls-slider.js";
import initReservationSlider from "./reservation-slider.js";
import initModals from "./modal.js";

try {
  initTabs();
  initProductSliders();
  initReservationSlider();
  initModals();

  const headerFixed = new HeaderFixed({
    HEADER: "header",
    HEADER_FIXED: "header--fixed",
  });

  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "header__info",
      HEADER_MENU_OPEN: "header__info--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      MENU_LINK: "menu__link",
      BREAKPOINT: 768,
    },
    headerFixed,
  );
} catch (error) {
  console.error(error);
}
