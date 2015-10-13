$(document).ready(function() {
  var input = prompt("whats your favorite pet? cat or dog?").toLowerCase();
  if (input === "cat") {
    $("#cat-img").show();
  } else if (input === "dog") {
    $("#dog-img").show();
  } else {
    $("p").show();
  }
});
