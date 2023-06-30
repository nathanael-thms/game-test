let Timerinterval;
function start() {
    document.getElementById("stop").style.display="block";
    document.getElementById("start").style.display="none";
    var c=15;
    Timerinterval=setInterval(function intervalfunc(){c=c-1; document.getElementById("time").innerHTML=c;
if(c===0){clearInterval(Timerinterval);document.getElementById("testgame").style.display="none";
console.clear();
document.getElementById("timeIsUp").style.display="block";window.removeEventListener("keydown",eventfuncton);
};},1000);
startsprites();
}

function stop(){
    document.getElementById("stop").style.display="none";
    document.getElementById("start").style.display="block";
    clearInterval(Timerinterval);
    c=15;
    document.getElementById("time").innerHTML=c;
    window.removeEventListener("keydown",eventfuncton);
    console.clear();
}
function resetGame() {
    document.getElementById("testgame").style.display="block";
    document.getElementById("timeIsUp").style.display="none";
    c=15;
    clearInterval(Timerinterval);
    document.getElementById("start").style.display="block";
    document.getElementById("stop").style.display="none";
    document.getElementById("time").innerHTML=c;

} 
function startsprites() {
    window.addEventListener("keydown",eventfuncton);
}
function eventfuncton(event){
    //enter key:
    if (event.keyCode == 13) {
        console.log("enter key has been presed");
    }
    //down key:
   else if (event.keyCode == 40) {
        console.log("down key has been pressed");
    }
    //up key:
    else if (event.keyCode == 38) {
        console.log("up key has been pressed");
    }
    //left key:
    else if (event.keyCode == 37) {
        console.log("left key has been pressed");
    }
    //right key:
    else if (event.keyCode == 39) {
        console.log("right key has been pressed");
    }
    // other keys:
    else {
        console.log("please press either up, down, left, right or enter");
    }
    
}