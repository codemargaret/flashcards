$(document).ready(function() {
  $(".clickable").click(function(event) {
    console.log($(this).parent().html());
    $(".front").slideToggle(600);
    $(".back").slideToggle(600);
  });
  $("button").click(function(){
    $("ul").append("<li>You're doing great!</li>");
  });
  $("button#Clear").click(function(){
    $("li").remove();
  });
});
