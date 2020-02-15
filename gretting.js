const form =document.querySelector(".js-form"),//왜 js-form form 은 안되는 것일까?
input=form.querySelector("input"),//추측으로 뒤의 form은 CSS여서 class만 도출된 것!
greeting=document.querySelector(".js-greetings");
const USER_LS="currentUser",
SHOWING_CN="showing";
function saveName(text){
    localStorage.setItem(USER_LS,text);

}
function handleSubmit(event){
    event.preventDefault();//Enter를 눌러도 페이지가 새로 고침되지 않는다.
    const INv=input.value;
    paintGreeting(INv);//여기까지만 하면 새로고침하면 다시 askForName()을 묻는 상태가 된다.
    saveName(INv);
}
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit);
}
function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerHTML=`Hello, ${text}!`;
}
//localstorage에서 name을 가져오는 것
function loadName(){
    const currentUser=localStorage.getItem(USER_LS);
    if(currentUser===null){//
       askForName();

    }else{
        paintGreeting(currentUser);
    }
}
function init(){
    loadName();
}
init()