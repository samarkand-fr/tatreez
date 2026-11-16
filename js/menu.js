document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("nav");
  if (!nav) return;

  const toggle = nav.querySelector("button");
  const menu = nav.querySelector("#menu");
  if (!toggle || !menu) return;

  toggle.setAttribute("aria-controls", menu.id);
  toggle.setAttribute("aria-expanded", "false");

  const syncExpandedState = () => {
    const isOpen = window.Alpine?.$data(nav)?.open ?? false;
    toggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  };

  toggle.addEventListener("click", () => {
    window.requestAnimationFrame(syncExpandedState);
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.Alpine?.$data(nav)) {
        window.Alpine.$data(nav).open = false;
      }
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    if (window.Alpine?.$data(nav)) {
      window.Alpine.$data(nav).open = false;
    }
    toggle.setAttribute("aria-expanded", "false");
    toggle.focus();
  });
});
