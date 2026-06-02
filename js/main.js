const body = document.body;
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const themeToggle = document.querySelector(".theme-toggle");
const profileImage = document.querySelector(".profile-image");
const projectImages = document.querySelectorAll(".project-media img");

const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  document.documentElement.dataset.theme = storedTheme;
}

navToggle?.addEventListener("click", () => {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  body.classList.toggle("nav-open", !expanded);
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    body.classList.remove("nav-open");
    navToggle?.setAttribute("aria-expanded", "false");
  });
});

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});

profileImage?.addEventListener("error", () => {
  profileImage.hidden = true;
});

projectImages.forEach((image) => {
  image.addEventListener("error", () => {
    image.hidden = true;
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const linkById = new Map([...navLinks].map((link) => [link.getAttribute("href")?.slice(1), link]));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => link.classList.remove("active"));
      linkById.get(entry.target.id)?.classList.add("active");
    });
  },
  { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));
