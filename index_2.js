/*
const title= document.getElementById("title");
console.log(title);//<h1 id="title">This Work</h1>
title.innerHTML="HI MY name is Gyeong EUN!"//<h1 id="title">HI MY name is Gyeong EUN!</h1>로 변경가능

title.style.color="red";//JS로 Html을 조종할 수 있다.
console.dir(title);
document.title="I love you";

const title= document.querySelector("#title");
title.innerHTML="HI MY name is Gyeong EUN!";
function handleResize(){
    console.log("I have been resized")
}
window.addEventListener("resize",handleResize);//handleResize()로 쓰는 것이 아니다.


const title= document.querySelector("#title");
title.innerHTML="HI MY name is Gyeong EUN!";

function handleResize(event){
    console.log(event);
}

window.addEventListener("resize",handleResize);


const title= document.querySelector("#title");
title.innerHTML="HI MY name is Gyeong EUN!";

function handleClick(event){
   title.style.color= "red";
}

title.addEventListener("click",handleClick);

const age=prompt("Ask your age?");
console.log(age);
if(age>18 &&age<21){
    console.log("so bad...")
}
else if(age>=21)
{
    console.log("go ahead")

}else{
    console.log("not bad")
}


const title= document.querySelector("#title");
const BASE_COLOR="white";

function handleClick(event){
   const currentcolor=title.style.color;
   if(currentcolor===BASE_COLOR){
       title.style.color="red";
   }
   else{
    title.style.color=BASE_COLOR;
   }
}
function init()
{
    title.style.color=BASE_COLOR;
    title.addEventListener("click",handleClick);
}

init();
/*

//#2-7
const title= document.querySelector("#title");
const CLICKED_CLASS="clicked";

function handleClick(){
    const currentclass=title.className;
    console.log(currentclass);
    if(currentclass!==CLICKED_CLASS){
        title.className=CLICKED_CLASS;
    }
    else{
        title.className="";
    }
}
function init()
{
   
    title.addEventListener("click",handleClick);
}
init();

//#2-7-1
const title= document.querySelector("#title");
const CLICKED_CLASS="clicked";

function handleClick(){
    const hasclass=title.classList.contains(CLICKED_CLASS);
    if(!hasclass){
        title.classList.add(CLICKED_CLASS);
    }
    else{
        title.classList.remove(CLICKED_CLASS);
    }
}
function init()
{
   
    title.addEventListener("click",handleClick);
}
init();
*/

//#2-7-2
const title= document.querySelector("#title");
const CLICKED_CLASS="clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}
function init()
{
   
    title.addEventListener("click",handleClick);
}
init();
