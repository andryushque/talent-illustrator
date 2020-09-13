$(document).ready(function () {
  /*=== Intro Projects Slider ===*/
  var hotelSwiper = new Swiper(".intro-slider", {
    loop: true,
    speed: 600,

    navigation: {
      nextEl: ".intro__button--next",
      prevEl: ".intro__button--prev",
    },

    keyboard: {
      enabled: true,
    },
  });

  /*=== Testimonials Tabs ===*/
  var tabsBtn = document.querySelectorAll(".tabs__nav-btn");
  var tabsItems = document.querySelectorAll(".tabs__item");

  tabsBtn.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains("active")) {
        tabsBtn.forEach(function (item) {
          item.classList.remove("active");
        });

        tabsItems.forEach(function (item) {
          item.classList.remove("active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("active");
      }
    });
  }

  document.querySelector(".tabs__nav-btn:nth-child(2)").click();
});
