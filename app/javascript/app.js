AOS.init({
  duration: 1300,
});
new Sticky("[data-sticky");

function closeNavBar() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.add("exit");
  navLinks.classList.remove("active");
  setTimeout(() => {
    navLinks.classList.remove("exit");
  }, 350);
}
const navLinks = document.querySelectorAll(".nav-links a");

document.querySelector(".fa-xmark").onclick = closeNavBar;

const links = Array.from(document.querySelectorAll("a")).filter(
  (a) => a.getAttribute("href")[0] === "#"
);
links.forEach((link) => {
  link.onclick = (e) => {
    if (link.parentElement.classList.contains("nav-link")) {
      closeNavBar();
    }
    e.preventDefault();
    const section = document.querySelector(link.getAttribute("href"));
    window.scrollTo({
      behavior: "smooth",
      top: section.offsetTop - 75,
      left: 0,
    });
  };
});

document.querySelector(".fa-bars").onclick = () =>
  document.querySelector(".nav-links").classList.add("active");

const bars = document.querySelectorAll(".bar");

bars.forEach((bar) => {
  const className = Array.from(bar.classList).find((className) =>
    className.includes("bar-")
  );
  const value = parseInt(className.replace("bar-", ""));

  const progress = bar.querySelector(".progress");
  progress.style.width = `${value}%`;
  const $value = progress.querySelector(".value");
  $value.textContent = `${value}%`;
});
