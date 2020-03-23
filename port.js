window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementById("display").className = "fadein";
  }
}