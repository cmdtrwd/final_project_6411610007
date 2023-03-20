//----------------------Navigation-----------------------------//
$(document).ready(function(){
    $("#menu-icon2").click(function(){
        $("#menu2").toggleClass("active");
        $(this).toggleClass("active");
        $("nav").toggleClass("active");
    });
  });