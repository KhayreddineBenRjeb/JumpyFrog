var character=document.getElementById("character")
 var obstacles=document.getElementById("obstacles")

 function jump(){
     character.classList.add("animate");
     setTimeout(function(){
         character.classList.remove("animate");
     },600);
    }
function position(width,height){
   return {
        width:width,
        height:height
    }
}
function gameOver(positionChar,positionObs){
    var positionChar =position("110px","70px")
    var positionObs=position("20px","20px")
    console.log($('obstacles'))
    // console.log(positionChar.width,positionObs.width);
    // if(positionChar.width===positionObs.width && positionChar.height===positionObs.height){  
    //     alert(" Game Over :( ");
    // }
}
$( document ).ready(function() {
    gameOver()
});