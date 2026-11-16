document.addEventListener("DOMContentLoaded", () => {
  // Tailwind provides opacity-0 and opacity-100, not opacity-1.
  // Remove the initial hidden state without delaying every image in the page.
  document.body.classList.remove("opacity-0");

  document.querySelectorAll("img.opacity-0").forEach((image) => {
    image.classList.remove("opacity-0");
    image.classList.add("opacity-100");
  });
});
