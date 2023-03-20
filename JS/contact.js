//----------------------Navigation-----------------------------//
$(document).ready(function(){
    $("#menu-icon3").click(function(){
        $("#menu3").toggleClass("active");
        $(this).toggleClass("active");
        $("nav").toggleClass("active");
    });
});