/*
$(document).ready(function() {
});
*/
// ^ ignore the document ready function for now

console.log(jQuery === $);

function toggleNavigation() {
  // $("selector").action("arguments");

  $("#burger-menu-container").slideToggle();
  console.log("this is working");
};

// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 500) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
  }
};
