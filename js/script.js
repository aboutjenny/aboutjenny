// console.log(jQuery === $);
const iOSChromeDetected = /CriOS/.test(navigator.userAgent);

if (iOSChromeDetected) {
  const getHeight = function getComputedHeightFrom(element) {
    const computedHeightString = getComputedStyle(element).height;
    const elementHeight = Number(computedHeightString.replace('px', ''));
    return elementHeight;
  };

  const calculateVh = function calculateVhFrom(elementHeight) {
    const approximateVh = (elementHeight / initialViewportHeight) * 100;
    const elementVh = Math.round(approximateVh);
    return elementVh;
  };

  const setDataAttribute = function setDataAttributeUsing(elementVh, element) {
    const dataAttributeValue = `${elementVh}`;
    element.setAttribute('data-vh', dataAttributeValue);
  };

  const setHeight = function setHeightBasedOnVh(element) {
    const landscape = orientation;
    const vhRatio = Number(element.dataset.vh / 100);
    if (landscape) {
      element.style.height = `${vhRatio * landscapeHeight}px`;
    } else {
      element.style.height = `${vhRatio * portraitHeight}px`;
    }
  };

  const initialize = function initializeDataAttributeAndHeight(element) {
    const elementHeight = getHeight(element);
    const elementVh = calculateVh(elementHeight);
    setDataAttribute(elementVh, element);
    setHeight(element);
  };

  const initialViewportHeight = window.innerHeight;
  const elements = Array.from(document.getElementsByClassName('vh-fix'));
  const statusBarHeight = 20;
  const portraitHeight = screen.height - statusBarHeight;
  const landscapeHeight = screen.width - statusBarHeight;

  window.onload = function() {
    window.addEventListener('orientationchange', function() {
      elements.forEach(setHeight);
    });

    elements.forEach(initialize);
  };
}

$(document).ready(function() {

  $('#burger-menu-container').click(function() {
       $('#burger-menu').fadeToggle("ease");
       $('#pieceOne').toggleClass('activatePieceOne');
       $('#pieceTwo').toggleClass('activatePieceTwo');
       console.log("todo bien");
       $('#pieceOut').toggleClass('activatePieceOut');
       $('#pieceOut2').toggleClass('activatePieceOut');
       $("#bodyWrapper, body").toggleClass('overFlowHidden');
    });

  $('.site-nav').on("click", function(){
      $('#burger-menu').fadeToggle('ease');
      $('#pieceOne').toggleClass('activatePieceOne');
      $('#pieceTwo').toggleClass('activatePieceTwo');
      console.log("todo bien");
      $('#pieceOut').toggleClass('activatePieceOut');
      $('#pieceOut2').toggleClass('activatePieceOut');
      $("#bodyWrapper, body").removeClass('overFlowHidden');
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
