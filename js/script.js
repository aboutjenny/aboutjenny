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


  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 500) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-60px";
    }
  };



});
