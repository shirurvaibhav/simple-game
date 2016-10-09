
alert("this game is as annoying as this alert box");



$(function () {
  //creating variables for all values
var container=$('#container');
var bird=$('#bird');
var poles=$('.poles');
var pole1=$('#pole1');
var pole2=$('#pole2');
var score=$('#score');
var speed=$('#speed');
var restart=$('restart');


var container_width = parseInt(container.width());
var pole_initial_position= parseInt(poles.css('right'));
var pole_initial_height = parseInt(poles.css('height'));
var int_bird_left = parseInt(bird.css('left'));
var speed=10;
var bird_top = parseInt(bird.css('top'));

var go_up = false;

var flappy = setInterval(function () {

  var pole_int_pos = parseInt(poles.css('right'));
   if(pole_int_pos>container_width)
   {
     pole_int_pos=pole_initial_position;
    //heightchanges
    var new_height = parseInt(Math.random()*100);
    pole1.css('height' , pole_initial_height + new_height);
    pole2.css('height' , pole_initial_height - new_height);
    speed=speed + 1;
    //speed contol not happening
    // speed_span.text(speed);
  }
  poles.css('right', pole_int_pos+speed);
  if(go_up === false){
    go_down();
    }

} , 40);
  $(document).on('keydown', function (e) {
    var key = e.keyCode;
    if (key===32 && go_up==false)
     {
      go_up = setInterval(up , 50);

    }
  });

   $(document).on('keyup', function (e) {
        var key = e.keyCode;
        if (key===32)
        {

          clearInterval(go_up);
          go_up=false;

        }

});
function go_down() {
    var top = parseInt(bird.css('top'));
    var topnew = top + 5;
    bird.css('top' , topnew);
}
function up() {
    var top = parseInt(bird.css('top'));
    var topnew = top - 5;
    bird.css('top' , topnew);
}





});
