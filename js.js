let Timerinterval;
function start() {
    document.getElementById("stop").style.display="block";
    document.getElementById("start").style.display="none";
    var c=15;
    Timerinterval=setInterval(function intervalfunc(){
        c=c-1;
        document.getElementById("time").innerHTML=c;
        if (c===0){
    clearInterval(Timerinterval);document.getElementById("testgame").style.display="none";
    console.clear();
    document.getElementById("timeIsUp").style.display="block";window.removeEventListener("keydown",eventfuncton);
    document.getElementById("parentTime").style.display="none";
    document.getElementById("cop").style.top="0px";
    document.getElementById("cop").style.left="0px";
    };
    },1000);
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
    document.getElementById("parentTime").style.display="inline";

} 
function startsprites() {
    window.addEventListener("keydown",eventfuncton);
}
function eventfuncton(event){
    let upPosition=document.getElementById("cop").offsetTop;
    let leftPosition=document.getElementById("cop").offsetLeft; 
    document.getElementById("cop").style.position="absolute";
    const height=document.getElementById("testgame").clientHeight-document.getElementById("cop").offsetHeight-document.getElementById("startandstop").offsetHeight;
    const width=document.getElementById("testgame").clientWidth-document.getElementById("cop").offsetWidth-document.getElementById("startandstop").offsetWidth;
    //enter key:
    if (event.keyCode == 13) {
        console.log("enter key has been presed");
    }
    //down key:
   else if (event.keyCode == 40) {
        console.log("down key has been pressed");
        upPosition=upPosition+5;
    }
    //up key:
    else if (event.keyCode == 38) {
       console.log("up key has been pressed");
       upPosition=upPosition-5;
       
    }
    //left key:
    else if (event.keyCode == 37) {
        console.log("left key has been pressed");
        leftPosition=leftPosition-5;
    }
    //right key:
    else if (event.keyCode == 39) {
        console.log("right key has been pressed");
        leftPosition=leftPosition+5;
    }
    // other keys:
    else {
        console.log("please press either up, down, left, right or enter");
    }
    
    if(upPosition>0 && upPosition<height){
        document.getElementById("cop").style.top=upPosition +"px";
    }
    if(leftPosition>0 && leftPosition<width){
        document.getElementById("cop").style.left=leftPosition+"px";

    }

}