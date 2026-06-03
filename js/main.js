const body = document.body;
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelectorAll(".nav a");
const portrait = document.querySelector(".portrait img");

menuButton?.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  body.classList.toggle("nav-open", !expanded);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

portrait?.addEventListener("error", () => {
  portrait.hidden = true;
});

const sections = [...document.querySelectorAll(".section[id]")];
const linkById = new Map([...navLinks].map((link) => [link.getAttribute("href")?.slice(1), link]));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.remove("active"));
      linkById.get(entry.target.id)?.classList.add("active");
    });
  },
  { rootMargin: "-30% 0px -60% 0px" }
);

sections.forEach((section) => observer.observe(section));
