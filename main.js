var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
       fabric.image.fromURL('BirthdayImage.jpg', function(img){
       block_imagen_object =img
       block_imagen_object.scaletowidth(700);
       block_imagen_object.scaletoheigth(510);
       block_imagen_object.set({
        top:0,
        left:0
       });
        canvas.add(block_imagen_object); 
    });

}

function playSound(){
    x.play();

}
