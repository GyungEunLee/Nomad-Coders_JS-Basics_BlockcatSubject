const body =document.querySelector("body");
const IMG_NUMBER=5;

function handleImgLoad(){
    consolee.log("finished load!");
}
function paintImage(IMG_NUMBER){
    const image = new Image();
    image.src=`image/${IMG_NUMBER+1}.jpg`;
    //여기서 +1을 하는 이유는 random함수가 0을 줄 수도 있기 때문
    image.classList.add("bgImage");
    body.appendChild(image);
   

}

function genRandom(){
    const number=Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();

    paintImage(randomNumber);
}

init();