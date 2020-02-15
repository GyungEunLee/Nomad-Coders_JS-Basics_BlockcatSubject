const clockContainer=document.querySelector(".js-clock"),
clockTitle=clockContainer.querySelector("h1"),
insa=clockContainer.querySelector("h2");
function getTime(){
    const date=new Date();
    const minutes=date.getMinutes();
    const hours=date.getHours();
    const seconds=date.getSeconds();
    clockTitle.innerHTML=`${hours}:${minutes}:${seconds<10? `0${seconds}`:seconds}`;
    if(hours>=12){
        insa.innerHTML="Good Afternoon^^";
    }else{
        insa.innerHTML="Good morning^^";
    }



}

function init(){
    setInterval(getTime,1000);
}

init();