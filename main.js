var canvas=new fabric.Canvas('myCanvas');
var image_width=30;
var image_height=30;
var player_position_X=10;
var player_position_Y=10;
var player_object="";
var image_object="";

function player_update(){
    fabric.Image.fromURL("player.png",function(img){
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
           top:player_position_Y,
           left:player_position_X 
        });
        canvas.add(player_object);
    });
  }
  function newImage(get_image){
    fabric.Image.fromURL(get_image,function(img){
        image_object=img;
        image_object.scaleToWidth(image_width);
        image_object.scaleToHeight(image_height);
        image_object.set({
            top:player_position_Y,
            left:player_position_X
        });
        canvas.add(image_object);  
    });
  }
  window.addEventListener("keydown",mykeyDown);
function mykeyDown(e){
keyPress=e.keyCode;
console.log(keyPress);
if(keyPress=='70'){
    newImage('ironman_face.png');
    console.log("Iron man face image is shown");
  }
  if(keyPress=='66'){
    newImage('spiderman_body.jpg');
    console.log("Spiderman body image is shown");
  }
  if(keyPress=='76'){
    newImage('hulk_legs.png');
    console.log("Hulk legs image is shown");
  }
  if(keyPress=='72'){
    newImage('captain_america_right_hand.png');
    console.log("Captain America hand image is shown");
  }
  if(keyPress=='82'){
    newImage('thor_right_hand.jpg');
    console.log("Thor hand image is shown");
  }
  if(keyPress=='38'){
    up();
    console.log("{up");
    }
    if(keyPress=='40'){
      down();
      console.log("down");
      }
      if(keyPress=='37'){
        left();
        console.log("left");
        }
        if(keyPress=='39'){
          right();
          console.log("right");
          }
        }