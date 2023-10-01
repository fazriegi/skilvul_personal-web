window.onscroll = function () {
  const header = document.getElementById("header");
  const headerOffset = header.offsetTop;

  if (window.scrollY > headerOffset) {
    header.classList.add("navbar-scroll");
  } else {
    header.classList.remove("navbar-scroll");
  }
};
