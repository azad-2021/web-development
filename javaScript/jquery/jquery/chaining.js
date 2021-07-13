$(document).ready(function(){
    $("button").click(function(){
        $("#square").css("background", "purple")
        .slideUp(1000) //1000 >> 1 sec
        .slideDown(1000)
    });
});