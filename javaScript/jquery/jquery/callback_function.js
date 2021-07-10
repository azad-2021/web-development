$(document).ready(function(){
    $("button").click(function(){
        $("#square").hide(1000, function(){
            alert("The square is hidden");    
        });            //1000 >> 1 sec
    });
});

//callback function is used for execution of program sequentially. in "$("#square").hide(1000, function()" the function() is callback funtion.
//If you remove function(), then alert appears before square disappears.