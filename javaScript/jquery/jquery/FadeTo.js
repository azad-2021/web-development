$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeTo(1000, 0.20);            //fadeTo(miliSec, desired opacity)
        $("#div2").fadeTo(1000, 0.40);			
        $("#div3").fadeTo(1000, 0.60);			
        $("#div4").fadeto(1000, 0.80);			
    });
});