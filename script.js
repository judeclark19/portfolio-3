$(document).ready(function () {
  // $("#page-left").click(function () {
  //   console.log("clicked page left");
  // });
  // $("#page-right").click(function () {
  //   console.log("clicked page right");
  // });

  // $(document).on("click", ".page-number", function () {
  //   let clickedPage = this.dataset.page;
  //   console.log(`clicked page number ${clickedPage}`);
  //   if (clickedPage == 2) {
  //     $("#port-page-1").addClass("hidden");
  //     $("#port-page-2").removeClass("hidden");
  //   }
  // });

  $("#about-link").click(function () {
    console.log("clicked on about link");
    $("#about-link").addClass("w3-text-teal");
    $("#portfolio-link").removeClass("w3-text-teal");
    $("#contact-link").removeClass("w3-text-teal");
  });

  $("#portfolio-link").click(function () {
    console.log("clicked on portfolio link");
    $("#about-link").removeClass("w3-text-teal");
    $("#portfolio-link").addClass("w3-text-teal");
    $("#contact-link").removeClass("w3-text-teal");
  });

  $("#contact-link").click(function () {
    console.log("clicked on contact link");
    $("#about-link").removeClass("w3-text-teal");
    $("#portfolio-link").removeClass("w3-text-teal");
    $("#contact-link").addClass("w3-text-teal");
  });
});
