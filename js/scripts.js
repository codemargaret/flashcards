$(document).ready(function() {
  $(".clickable").click(function() {
    $(this).parents('.well').children('.front, .back').slideToggle(600);
  });
  $("button").click(function(){
    $("ul").append("<li>You're doing great!</li>");
  });
  $("button#Clear").click(function(){
    $("li").remove();
  });
});
