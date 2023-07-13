let Timerinterval;
let c;
function start() {
    document.getElementById("stop").style.display="block";
    document.getElementById("start").style.display="none";
    c=15;
    Timerinterval=setInterval(function intervalfunc(){
        c=c-1;
        document.getElementById("time").innerHTML=c;
        if (c===0){
    clearInterval(Timerinterval);document.getElementById("testgame").style.display="none";
    console.clear();
    document.getElementById("timeIsUp").style.display="block";
    window.removeEventListener("keydown",eventfuncton);
    let parent=document.getElementById("testgame");
    parent.removeEventListener("mousemove",mousefunc);
    document.getElementById("parentTime").style.display="none";
    document.getElementById("cop").style.top="0px";
    document.getElementById("cop").style.left="0px";
    document.getElementById("robber").style.top="0px";
    document.getElementById("robber").style.right="150px";
    document.getElementById("robber").style.left="850px";
};
    },1000);
startsprites();
}




function stop(){
    document.getElementById("stop").style.display="none";
    document.getElementById("start").style.display="block";
    document.getElementById("cop").style.top="0px";
    document.getElementById("cop").style.left="0px";
    document.getElementById("robber").style.top="0px";
    document.getElementById("robber").style.right="150px";
    document.getElementById("robber").style.left="850px"; 
    clearInterval(Timerinterval);
    c=15;
    document.getElementById("time").innerHTML=c;
    window.removeEventListener("keydown",eventfuncton);
    let parent=document.getElementById("testgame");
    parent.removeEventListener("mousemove",mousefunc);
    console.clear();
}
function resetGame() {
    document.getElementById("testgame").style.display="block";
    document.getElementById("timeIsUp").style.display="none";
    document.getElementById("copwin").style.display="none";
    c=15;
    clearInterval(Timerinterval);
    document.getElementById("start").style.display="block";
    document.getElementById("stop").style.display="none";
    document.getElementById("time").innerHTML=c;
    document.getElementById("parentTime").style.display="inline";
    window.removeEventListener("keydown",eventfuncton);
    let parent=document.getElementById("testgame");
    parent.removeEventListener("mousemove",mousefunc);
    document.getElementById("parentTime").style.display="none";
    document.getElementById("cop").style.top="0px";
    document.getElementById("cop").style.left="0px";
    document.getElementById("robber").style.top="0px";
    document.getElementById("robber").style.right="150px";
    document.getElementById("robber").style.left="850px";
    document.getElementById("parentTime").style.display="inline";
    

}
function startsprites() {
    let parent=document.getElementById("testgame");
    window.addEventListener("keydown",eventfuncton);
    parent.addEventListener("mousemove",mousefunc);
}
function mousefunc(e) {
    let x = e.pageX - e.currentTarget.offsetLeft; 
    let y = e.pageY - e.currentTarget.offsetTop;
    const MaxUp=document.getElementById("testgame").clientHeight-document.getElementById("robber").offsetHeight-document.getElementById("startandstop").offsetHeight;
    const MaxLeft=document.getElementById("testgame").clientWidth-document.getElementById("robber").offsetWidth;
    if(y>0 && y<MaxUp){
        document.getElementById("robber").style.top=y+"px";
        win()
    }
    if(x>0 && x<MaxLeft){
        document.getElementById("robber").style.left=x+"px";
        win()
    }
}
function eventfuncton(event){
    let cop=new Object();
    cop.Top=document.getElementById("cop").offsetTop;
    cop.Left=leftPosition=document.getElementById("cop").offsetLeft; 
    cop.MaxLeft=document.getElementById("testgame").clientWidth-document.getElementById("cop").offsetWidth-document.getElementById("startandstop").offsetWidth;
    cop.MaxUp=document.getElementById("testgame").clientHeight-document.getElementById("cop").offsetHeight-document.getElementById("startandstop").offsetHeight;
    document.getElementById("cop").style.position="absolute";
    //enter key:
    if (event.keyCode == 13) {
        console.log("enter key has been presed");
    }
    //down key:
   else if (event.keyCode == 40) {
        console.log("down key has been pressed");
        cop.Top=cop.Top+10;
    }
    //up key:
    else if (event.keyCode == 38) {
       console.log("up key has been pressed");
       cop.Top=cop.Top-10;
       
    }
    //left key:
    else if (event.keyCode == 37) {
        console.log("left key has been pressed");
        cop.Left=cop.Left-10;
    }
    //right key:
    else if (event.keyCode == 39) {
        console.log("right key has been pressed");
        cop.Left=cop.Left+10;
    }
    // other keys:
    else {
        console.log("please press either up, down, left, right or enter");
    }
    
    if(cop.Top>0 && cop.Top<cop.MaxUp){
        document.getElementById("cop").style.top=cop.Top +"px";
        win();
    }
    if(cop.Left>0 && cop.Left<cop.MaxLeft){
        document.getElementById("cop").style.left=cop.Left+"px";
        win();

    }

}
 function win() {
    var cop=new Object();
    cop.Top=document.getElementById("cop").offsetTop;
    cop.Left=document.getElementById("cop").offsetLeft;
    var robber=new Object();
    robber.Top=document.getElementById("robber").offsetTop;
    robber.Left=document.getElementById("robber").offsetLeft;
    var TopvsTop=Math.round(cop.Top/5)-Math.round(robber.Top/5);
    var LeftvsLeft=Math.round(cop.Left/5)-Math.round(robber.Left/5);
    if (TopvsTop>0 && TopvsTop<155 || LeftvsLeft>0 && LeftvsLeft<155) {
        document.getElementById("testgame").style.display="none";
        document.getElementById("copwin").style.display="block";
        document.getElementById("parentTime").style.display="none";
        clearInterval(Timerinterval);
        c=15;
        window.removeEventListener("keydown",eventfuncton);
        let parent=document.getElementById("testgame");
        parent.removeEventListener("mousemove",mousefunc);
        console.clear();
    }
    
}