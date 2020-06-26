// alert("Hi!");

// this is the auto-hide navigation bar
window.addEventListener("scroll", function(){
  let menuArea = document.getElementById("navbar");
  if(window.pageYOffset > 0) {
    menuArea.classList.add("cus-nav");
  } else {
   menuArea.classList.remove("cus-nav");
  }
});

// navbar active identifier
$(document).ready(function() {
  $.each($('#navbar').find('li'), function() {
      $(this).toggleClass('active', 
          window.location.pathname.indexOf($(this).find('a').attr('href')) > -1);
  }); 
});

// footer auto update copyright year
var d = new Date();
var n = d.getFullYear();
document.getElementById("year").innerHTML = n;