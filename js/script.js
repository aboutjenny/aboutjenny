// console.log(jQuery === $);
$(document).ready(function() {

  $('#burger-menu-container').click(function() {
           $('#burger-menu').fadeToggle("ease");
           $('#pieceOne').toggleClass('activatePieceOne');
           $('#pieceTwo').toggleClass('activatePieceTwo');
           console.log("todo bien");
           $('#pieceOut').toggleClass('activatePieceOut');
           $('#pieceOut2').toggleClass('activatePieceOut');
           $("body").toggleClass('overFlowHidden');
      });


// function scrollDisable() {
//   if($('.burger-menu').html('display') == 'block'){
//     $('body').addClass('fixedPosition');
//   }  else if ($('.burger-menu').html('display') == 'none'){
//     $('body').removeClass('fixedPosition');
//   }
// };

// function Test1() {
//   toggleNavigation();
//   scrollDisable();
// }

console.log("after toggle");


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

});
