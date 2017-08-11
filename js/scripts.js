$(document).ready(function() {
  $(".clickable").click(function() {
    $(this).parents('.well').children('.front').slideToggle(600);
    $(this).parents('.well').children('.back').slideToggle(600);
    // $(".front").slideToggle(600);
    // $(".back").slideToggle(600);
  });
  $("button").click(function(){
    $("ul").append("<li>You're doing great!</li>");
  });
  $("button#Clear").click(function(){
    $("li").remove();
  });
});
