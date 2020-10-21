// console.log("HELLO WORLD");

$(document).ready(function () {
  //   console.log("ready!");
  $("#page-left").click(function () {
    console.log("clicked page left");
  });
  $("#page-right").click(function () {
    console.log("clicked page right");
  });

  $(document).on("click", ".page-number", function () {
    let clickedPage = this.dataset.page;
    console.log(`clicked page number ${clickedPage}`);
    if (clickedPage == 2) {
      $("#port-page-1").addClass("hidden");
      $("#port-page-2").removeClass("hidden");
    }
  });
});
