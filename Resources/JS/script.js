// $(document).ready(function () {
//   $("h1").click(function () {
//     $(this).css("background-color", "#ff0000");
//   });
// });

// $(document).ready(function () {
// var waypoints = $('#handler-first').waypoint(function(direction) {
//     notify(this.element.id + ' hit 25% from top of window')
//   }, {
//     offset: '25%'
//   })
// });

$(document).ready(function () {
  //For sticky navigation
  $(".js--section-features").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;",
    }
  );
  //Scroll on buttons
  $(".js--scroll-to-plans").click(function () {
    $("body, html").animate(
      { scrollTop: $(".js--section-plans").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function () {
    $("body, html").animate(
      { scrollTop: $(".js--section-features").offset().top },
      1000
    );
  });

  //Animate on scroll
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animate__animated animate__fadeIn");
    },
    { offset: "50%" }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animate__animated animate__fadeInUp");
    },
    { offset: "50%" }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animate__animated animate__fadeIn");
    },
    { offset: "50%" }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animate__animated animate__pulse");
    },
    { offset: "50%" }
  );

  //Mobile navigation
  $(".js--nav-icon").click(function () {
    let nav = $(".js--main-nav");
    let icon = $(".js--nav-icon ion-icon");

    nav.slideToggle(200);

    if (icon.hasClass("hide-class")) {
      icon.toggleClass("hide-class");
    }
  });
});
