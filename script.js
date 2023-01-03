$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
      $(".backtotop").fadeIn();
    } else {
      $(".backtotop").fadeOut();
    }
  });
  $(".backtotop").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 700);
    return false;
  });
});
const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchbox = document.querySelector(".search-box");
const searchInput = document.querySelector("input");

searchBtn.onclick = () => {
  searchbox.classList.add("active");
  searchInput.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");
};
cancelBtn.onclick = () => {
  searchbox.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
};
