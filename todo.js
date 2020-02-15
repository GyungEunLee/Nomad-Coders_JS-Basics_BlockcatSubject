const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
const TODOS_LS = 'toDos';
let toDos=[];//해야할 일을 생성했을 때, 그 일이 array에 추가되도록 할 것

function deleteToDo(event){
   //console.log(event.target.parentNode);
   const btn= event.target;
   const li=btn.parentNode;//삭제해야 하는 버튼
   toDoList.removeChild(li);//이것은html의 li(버튼과 span의 부모)를 지워주는 역할
   const cleanToDos=toDos.filter(function(toDos){return toDos.id!==parseInt(li.id)});//filter는 함수 하나를 실행 시키는 것(forEach함수와 같은 역할을 한다)
   //모든 toDos의 요소들 중,이것은 여기서 true인 것들인toDos만 return하는 역할을 한다.
   //그러면 선택한 li.id===toDos.id이므로, 선택한 li.id외의 나머지 번호만 cleanToDos에 저장한다
   //여기서, parseInt()s는 string에서 int로 바꿔주는 역할을 한다
   toDos=cleanToDos;
   saveValue();
}
function saveValue() {
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}
function paintToDo(todo) {
//#1
    // toDoForm.classList.remove("showing"); gretting.js에서 한번 해보기, toDoForm은 원래 기본 값이 보여지는 것임
    //gretting.js의 form은 기본값이 숨기는 것이다. 그러므로 add나 remove가 통하지 않음
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌"
    delBtn.addEventListener("click",deleteToDo);//버튼 삭제이벤트
    const span=document.createElement("span");
    const newId=toDos.length+1;//버튼을 클릭했을 떄, 어떤 li를 지워야하는지 알수 있게 하기 위해
    li.id=newId;
    span.innerText=todo;
    li.appendChild(delBtn);
    li.appendChild(span);//span을 li의 자식 요소로 넣는다.
    toDoList.appendChild(li);

    const toDoObj = {
        text: todo,
        id: newId
    };

    toDos.push(toDoObj);//toDos배열에 toDoObj를 추가한다.
    saveValue();
}

function handleSubmit(event)//전달되는 event객체는 뭘까?
{
    event.preventDefault();
    const inTD = toDoInput.value;
    paintToDo(inTD);
    toDoInput.value = "";


}
function loadToDO() {
    const loadToDos = localStorage.getItem(TODOS_LS);
    if (loadToDos !== null)//localstorage가 비어있는 경우,
    //toDoform을 띄워야하나, toDoForm같은 경우, 항상 showing이므로
    //toDoForm이 보이지 않을때(데이터 입력시)를 신경쓰자!
    {
        const parsedToDos=JSON.parse(loadToDos);
        parsedToDos.forEach(function(toDos){
            paintToDo(toDos.text);
        });
    }

}

function init() {
    loadToDO();
    //왜 toDoInput이 아닌, toDoForm일까?
    toDoForm.addEventListener("submit", handleSubmit);

}

init();