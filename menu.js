$(document).ready(function(){
    $("#menu p").click(function() {
        $(this).css("color",'pink');
    });
});



$(document).ready(function(){
    $("#menu p").click(function(){
        $("navbar").toggleClass("navbar", 10000);
    });
});


