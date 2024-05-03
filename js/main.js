document.addEventListener("DOMContentLoaded", () => {
  const hamburger_open = document.getElementById("hamburger_open");
  const mobile_nav = document.getElementById("mobile_nav");
  const grid_service_box = document.getElementsByClassName("grid_service_box");

  hamburger_open.addEventListener("click", () => {
    mobile_nav.classList.toggle("show");
  });

  /*  grid_service_box.addEventListener("mouseover", () => {
    grid_service_box_h2.style.color = "#3f6ee9";
  });

  grid_service_box.addEventListener("mouseout", () => {
    grid_service_box_h2.style.color = "#000000";
  }); */

  /* CONTROLLING SLIDERS WITH jQUERY */
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  });
});
