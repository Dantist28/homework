export default function initTabs() {
  const tabsButtons = document.querySelectorAll(".tabs__btn");
  const tabsItems = document.querySelectorAll(".tabs__item");

  tabsButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab");
      const currentTab = document.getElementById(tabId);

      if (currentTab) {
        tabsButtons.forEach((btn) => btn.classList.remove("active"));
        tabsItems.forEach((item) => item.classList.remove("active"));

        button.classList.add("active");
        currentTab.classList.add("active");

        const mainSliderEl = currentTab.querySelector(".main-slider");

        if (mainSliderEl && mainSliderEl.swiper) {
          mainSliderEl.swiper.slideTo(0, 0);
          mainSliderEl.swiper.update();
        }
      }
    });
  });
}
