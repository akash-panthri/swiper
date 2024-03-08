const swipercontainer = document.getElementById("swipercontainer");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

btn2.addEventListener("click", () => {
  swipercontainer.scrollBy({
    top: 0,
    left: window.outerWidth / 2,
    behavior: "smooth",
  });
});
btn3.addEventListener("click", () => {
  swipercontainer.scrollBy({
    top: 0,
    left: -window.outerWidth / 2,
    behavior: "smooth",
  });
});


