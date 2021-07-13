
$(document).ready(function(){
    $("button").click(function(){

        $(".head").hide();                  //when button is pressed, h1 will hide using class selector

    });
});

//use .dbclick for double click to trigger an event.
//there are some other selectors
//refrence: https://api.jquery.com/category/selectors/
//for "this" selector you can select the current element, in this case button itself. For demo, replace "*" with "this".
//you can select all button using button selector ":button". For demo, replace "*" with ":button".
