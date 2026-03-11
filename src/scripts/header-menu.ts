const DESKTOP_BREAKPOINT = 768;

const initHeaderMenu = () => {
  const menuButton = document.querySelector<HTMLElement>("[data-menu-button]");
  const menu = document.querySelector<HTMLElement>("[data-menu]");

  if (!menuButton || !menu) {
    return;
  }

  const menuLinks = menu.querySelectorAll<HTMLElement>("[data-menu-link]");
  const desktopMediaQuery = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);

  const closeMenu = () => {
    menu.classList.remove("active");
    menuButton.classList.remove("is-active");
    menuButton.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    const isActive = menu.classList.toggle("active");
    menuButton.classList.toggle("is-active", isActive);
    menuButton.setAttribute("aria-expanded", String(isActive));
  };

  menuButton.addEventListener("click", toggleMenu);

  menuLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  desktopMediaQuery.addEventListener("change", (event) => {
    if (event.matches) {
      closeMenu();
    }
  });
};

if (typeof document !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHeaderMenu, { once: true });
  } else {
    initHeaderMenu();
  }
}
