$(document).ready(function(){
    $("#start").click(function(){
        var square = $("#square");
        square.animate({opacity: 0.5, height: "500px"}, 1000);
        square.animate({opacity: 0.9, width: "500px"}, 500);
        square.animate({opacity: 0.5, height: "200px"}, 1000);
        square.animate({opacity: 0.9, width: "200px"}, 500);
        
    });

    $("#stop").click(function(){

        $("#square").stop();
    });
});