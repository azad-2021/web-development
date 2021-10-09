$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeToggle(5000);            //5 sec
        $("#div2").fadeToggle(3000);			//3 sec
        $("#div3").fadeToggle(1000);			//1 sec
        $("#div4").fadeToggle();			
    });
});