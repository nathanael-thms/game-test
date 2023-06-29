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
function eventfuncton(){
    console.log("key has been pressed");
}