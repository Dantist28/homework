export default function initModals() {
  const setupModal = (btnSelector, modalSelector) => {
    const btns = document.querySelectorAll(btnSelector);
    const modal = document.querySelector(modalSelector);

    if (!modal || btns.length === 0) return;

    const closeBtn = modal.querySelector(".modal__close");

    btns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
      });
    });

    const close = () => {
      modal.style.display = "none";
      document.body.style.overflow = "";
    };

    closeBtn?.addEventListener("click", close);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) close();
    });
  };

  setupModal(".book", "#modal-book");
  setupModal(".map", "#modal-map");
}
