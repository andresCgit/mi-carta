$(document).ready(function () {
  $(".valentines-day").click(function () {
    $(".envelope").fadeOut(800, function () {
      $(
        ".valentines-day .heart, .valentines-day .text, .valentines-day .front"
      ).hide();
      $("#card").css({ visibility: "visible", opacity: 0 });
      $("#card").animate({ opacity: 1 }, { duration: 1000 });
    });
  });
});
