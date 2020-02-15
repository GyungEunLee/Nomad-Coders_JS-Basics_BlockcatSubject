const weather=document.querySelector(".js-weather");

const COORDS='coords';
const API_KEY="d8f718fef42bc7439c3f2c5478aeb537";

function getWheather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    ).then(function(response){
         return response.json();
         //JSON데이터를 가져올 것 이다. 여기서 봤던 JS objest가
         //JSON이다.
         //위의 코드까지만 작성하고, 돌리면 대기중이라는 것이 뜬다.
         //그래서 위의 코드도 기다리게 할 것이다. JS에서 무엇인가가 끝나길 기다리는 방법은 then을 사용하는 것이다.
        //then을 한번 더 써주자. JSON데이터가 준비되면, 이쪽으로 와서, 새로고침 하고
    } )
    .then(function (json){
        
        const temperature=json.main.temp;
        const place=json.name;
        
        weather.innerText=`${temperature}도 ${place}`;
    
       console.log(json);
    });
    

}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

function handleGeoSucces(position){//위치를 가져오는것이 성공하면 부르는 함수
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const coordsObj={
        /*
        latitude:latitude,
        longitude:longitude
        latitude===latitude
        longitude===longitude
        */
       latitude,
       longitude
    };
    saveCoords(coordsObj);
    getWheather(latitude,longitude);
    
}

function handleGeoError(){
console.log('cant access geo location');
}

function askForCoords(){
//웹사이트가 위치 정보를 읽는 방식
navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords(){
    const loadedCoords=localStorage.getItem(COORDS);
    if(loadedCoords===null){
        askForCoords();
    }else{
        //날씨를 가져오는 것
        const parseCoords=JSON.parse(loadedCoords);
        getWheather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();