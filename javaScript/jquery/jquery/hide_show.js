$(document).ready(function(){
    $("#hidden").click(function(){

        $("p").hide(1000);                      //take 1 sec to hide. 1000 represents 1 sec
    });

    $("#visible").click(function(){

        $("p").show(1000);                     //take 1 sec to sho
    });
});