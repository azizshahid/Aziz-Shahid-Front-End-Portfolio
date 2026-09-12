const section = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav_links a");
const spyObserver = new IntersectionObserver(callbackFuntion, {
  rootMargin: "-45% 0px -45% 0px",
  threshold: 0,
});

section.forEach((section) => spyObserver.observe(section));

function callbackFuntion(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting === true) {
      let id = entry.target.id;
      navLinks.forEach((link) => link.classList.remove("active"));
      let matchLink = document.querySelector(`.nav_links a[href="#${id}"]`);
      matchLink.classList.add("active");
      if (matchLink) {
      matchLink.classList.add("active"); }
    }
  });
}
