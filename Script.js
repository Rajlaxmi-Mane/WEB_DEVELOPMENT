let container1=document.querySelector(".right");
let acOnn=document.querySelector(".acOn");
let acOff=document.querySelector(".acOff")

let btn=document.createElement("button");
let btn1=document.createElement("button");
btn.classList.add("topHead")
btn1.classList.add("topHead")
let temp=document.createElement("p");
let div=document.createElement("div")
let count=0;

div.append(temp);
div.append(btn);
div.append(btn1);
temp.classList.add("para");

btn.innerText="INCREASE +";
btn1.innerText="DECREASE -";

acOnn.addEventListener("click",()=>{ 
    acOnn.style.color="#449342"
    div.classList.remove("hide");
    container1.before(div);   
});
   
acOff.onclick=()=>{
    acOnn.style.color="red";
    div.classList.add("hide");
}

btn.onclick=()=>{
    btn.style.color="green";
    btn1.style.color="white";
    count++;
    console.log("hii");
    temp.innerText="Temperature : "+count;
}
btn1.onclick=()=>{
    btn1.style.color="green";
    btn.style.color="white";
    count--;
    temp.innerHTML="Temperature : "+count;
}


// FAN OPERATORS :

let container2=document.querySelector(".right1")
let fanOnn=document.querySelector(".fanOn");
let fanOff=document.querySelector(".fanOff");
let fanDiv=document.createElement("div");

let roomCnt=1;
let create=()=>{
let div1=document.createElement("div");
let range=document.createElement("input");
range.style.margin="0px 15px 0px 15px";

range.setAttribute("type","range")
range.setAttribute("min","0")
range.setAttribute("max","5")
div1.append("room-"+roomCnt++ +" :    0");
div1.append(range);
div1.append("5");
div1.classList.add("left");
fanDiv.classList.add("left")
div1.classList.add("range")
return div1;
}
fanDiv.append(create());
fanDiv.append(create());
fanDiv.append(create())

fanOnn.addEventListener("click",()=>{
    fanDiv.classList.remove("hide")
    fanDiv.classList.add("range")
    fanOnn.style.color="#449342"
    container2.before(fanDiv);
});
fanOff.onclick=()=>{
    fanOnn.style.color="red";
    fanDiv.classList.add("hide");
}



// TELIVISION FEATURES

let container3=document.querySelector(".right2");
let tvOnn=document.querySelector(".tvOn");
let tvOff=document.querySelector(".tvOff")
let tvDiv=document.createElement("div");
let video=document.querySelector(".video")

let forward=document.createElement("button");
forward.innerText="Forward ->"
forward.style.color="white"
let backward=document.createElement("button");
backward.innerText="Backward <-"
backward.style.color="white"
tvDiv.append(backward);
tvDiv.append(forward);

tvOnn.addEventListener("click",()=>{
    tvDiv.classList.remove("hide")
    video.src="./Video/vid1.mp4";
    tvOnn.style.color="#449342"
    container3.before(tvDiv);
});
tvOff.onclick=()=>{
    tvOnn.style.color="red";
    video.src=null;
    tvDiv.classList.add("hide");
}

let videoArr=["./Video/vid1.mp4","./Video/vid2.mp4","./Video/vid3.mp4","./Video/vid4.mp4","./Video/vid5.mp4","./Video/vid6.mp4","./Video/vid7.mp4"]
let index=0;
backward.onclick=()=>{
if(index>=0){
    index--;
video.src=videoArr[index];
}
}
forward.onclick=()=>{
    if(index<videoArr.length){
        index++;
    video.src=videoArr[index];
    }
    }


// BULBS AND LIGHTS CONTROL

let container4=document.querySelector(".right3");
let lightOnn=document.querySelector(".lightOn");
let lightOff=document.querySelector(".lightOff")
let lightDiv=document.createElement("div");

let l1=document.createElement("button")
l1.innerText="L1"
let l2=document.createElement("button")
l2.innerText="L2"
let l3=document.createElement("button")
l3.innerText="L3"
let l4=document.createElement("button")
l4.innerText="L4"

let change=document.createElement("button");
change.innerText="ChangeColor~"

lightDiv.append(l1);
lightDiv.append(l2)
lightDiv.append(l3);
lightDiv.append(l4)
lightDiv.append(change)


let light1=document.querySelector(".l1")
let light2=document.querySelector(".l2")
let light3=document.querySelector(".l3")
let light4=document.querySelector(".l4")

lightOnn.addEventListener("click",()=>{
    flag1=true;
    flag2=true;
    flag3=true;
    flag4=true;
    lightDiv.classList.remove("hide")
    lightOnn.style.color="#449342"
    container4.before(lightDiv);
});
lightOff.onclick=()=>{
    lightOnn.style.color="red";
    lightDiv.classList.add("hide");
    light1.style.boxShadow="0px 1px 2px black,0px 2px 5px white,0px 4px 9px white"
    light2.style.boxShadow="0px 1px 2px black,0px 2px 5px white,0px 4px 9px white";
    light3.style.boxShadow="0px 1px 2px black,0px 2px 5px white,0px 4px 9px white"
    light4.style.boxShadow="0px 1px 2px black,0px 2px 5px white,0px 4px 9px white"
}
let flag1=true;
let flag2=true;
let flag3=true;
let flag4=true;

l1.onclick=()=>{
    if(flag1){
        light1.classList.add("glow")
        light1.style.boxShadow="0px 0px 2px gray,0px 0px 5px white,0px 0px 10px white,0px 0px 15px white,0px 0px 20px white,0px 0px 25px white";
        flag1=false;
    }else{
        light1.style.boxShadow="0px 1px 2px black,0px 2px 5px white,0px 4px 9px white"
        flag1=true;
    }
}
l2.onclick=()=>{
    if(flag2){
        light2.style.boxShadow="0px 0px 2px gray,0px 0px 5px white,0px 0px 10px white,0px 0px 15px white,0px 0px 20px white,0px 0px 25px white";
        flag2=false;
    }else{
        light2.style.boxShadow="0px 1px 2px black,0px 2px 5px white,0px 4px 9px white"
        flag2=true;
    }
}
l3.onclick=()=>{
    if(flag3){
        light3.style.boxShadow="0px 0px 2px gray,0px 0px 5px white,0px 0px 10px white,0px 0px 15px white,0px 0px 20px white,0px 0px 25px white";
        flag3=false;
    }else{
        light3.style.boxShadow="0px 1px 2px black,0px 2px 5px white,0px 4px 9px white"
        flag3=true;
    }
}
l4.onclick=()=>{
    if(flag4){
        light4.style.boxShadow="0px 0px 2px gray,0px 0px 5px white,0px 0px 10px white,0px 0px 15px white,0px 0px 20px white,0px 0px 25px white";
        flag4=false;
    }else{
        light4.style.boxShadow="0px 1px 2px black,0px 2px 5px white,0px 4px 9px white"
        flag4=true;
        }
}

let colors=["#fb641b","#e1f1a2","#ff1121","#269103","rgb(34, 98, 155)","#d9549f","#228687","#813","rgb(206, 206, 9)","#9ba9c9","#b0413e","#76a","rgb(255, 145, 98)","#7f1","rgb(76, 155, 156)","#afd","#fa3","#165","#dd2"]
let col=0;
change.onclick=()=>{
    if(col<colors.length){
    if(!flag1){
        light1.style.boxShadow=`0px 0px 5px ${colors[col]},0px 0px 10px ${colors[col]},0px 0px 15px ${colors[col]},0px 0px 20px ${colors[col]}`;
        col++;
    }
    if(!flag2){
        light2.style.boxShadow=`0px 0px 5px ${colors[col]},0px 0px 10px ${colors[col]},0px 0px 15px ${colors[col]},0px 0px 20px ${colors[col]}`;
        col++;
    }
    if(!flag3){
        light3.style.boxShadow=`0px 0px 5px ${colors[col]},0px 0px 10px ${colors[col]},0px 0px 15px ${colors[col]},0px 0px 20px ${colors[col]}`;
        col++;
    }
    if(!flag4){
        light4.style.boxShadow=`0px 0px 5px ${colors[col]},0px 0px 10px ${colors[col]},0px 0px 15px ${colors[col]},0px 0px 20px ${colors[col]}`;
        col++;
    }
}else{
    col=0;
}

}