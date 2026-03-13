window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

const links = document.querySelectorAll("a");

links.forEach(link => {
  link.addEventListener("click", function(e) {
    const href = this.getAttribute("href");

    if (!href || href.startsWith("#") || this.target === "_blank") {
      return;
    }

    e.preventDefault();

    document.body.classList.remove("page-loaded");
    document.body.classList.add("page-exit");

    setTimeout(() => {
      window.location.href = href;
    }, 500);
  });
});