const navbtn = document.querySelector(".icon");
const closebtn = document.querySelector(".close");
navbtn.addEventListener("click", function () {
  document.querySelector(".header").classList.add("menuview");
  document.querySelector(".close").classList.add("after");
  document.querySelector(".icon").classList.add("aftermen");
});
closebtn.addEventListener("click", function () {
  document.querySelector(".header").classList.remove("menuview");
  document.querySelector(".close").classList.remove("after");
  document.querySelector(".icon").classList.remove("aftermen");
});
