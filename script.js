$(document).ready(function(Event){
  /* CHALLENGE #1:
      - when a user clicks on the happy button, make the background of the page yellow
      - when a user clicks on the sad button, make the background of the page blue */
  $("#happyButton").click(function(Event){
       $("body").css("background-color","yellow");


  });

  $("#sadButtons").click(function(Event){
    $("body").css("background-color","blue");
  });




  /* CHALLENGE #2:
      - when a user clicks on any of the circles, change the h1 text and the border of the image to the color of the circle*/

  $("#green").click(function(Event){
  $("h1").css("color","green");
  $("#puppy").css("border","5px solid green");

  });

  $("#red").click(function(Event){
  $("h1").css("color","red");
  $("#puppy").css("border","5px solid red");

  });

  $("#blue").click(function(Event){
  $("h1").css("color","blue");
  $("#puppy").css("border","5px solid blue");


  });

  /* CHALLENGE #3:
      - when a user hovers on the dog image, change it to an image of your dog.
      - when a user is no longer hovering, change it back to tonks   */

  $("#puppy").mouseenter(function(event){
    $("#puppy").prop("src","http://www.placedoggo.com/400/300?n=3");
  });

  $("#puppy").mouseleave(function(event){
    $("#puppy").prop("src","http://www.placedoggo.com/400/300");

  });

  /* CHALLENGE #4:
      - when a user double clicks on CHANGE ME, change the text to "I changed"!*/

  $(".change").dblclick(function(event){
  $(".change").html("I changed!");
  });


  /* CHALLENGE #5:
      - when a user scrolls, add a new image of a dog of your choice to the bottom of the page.*/

  $(window).scroll(function(event){
    if($('.stop').length <10){
    $("body").append("<img class='stop' src='http://www.placedoggo.com/400/300?n=4'/>");
  }
  });
});
