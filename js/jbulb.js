$(document).ready(function() {
    $( "#myImg" ).mouseover(function(){
        $(this).attr("src", "Bulb1.jpg");
    });

    $( "#myImg" ).mouseout(function(){
        $(this).attr("src", "Bulb2.jpg");
    });
});