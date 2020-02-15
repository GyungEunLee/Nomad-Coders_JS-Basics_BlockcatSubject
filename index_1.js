/*
alert('Im working Im js');// 경고 메시지
console.log('Hello JS!');//콘솔에 메시지가 뜨는 것

a=221
b=a-5;
console.log(b);
const something=3;
const dayOfWeek = [something,44,"Mon","tue","wed","thu","fri","sat","sun",true];

console.log(dayOfWeek);
console.log(dayOfWeek[2]);

const person = {
    Name: "Nico",
    Age: 33,
    Gender: "Female",
    isHandsome: true,
    favFood:[{name:"Kimchi",fatty:false},{name:"cake",fatty:true}],
    favsubject:["math","korean","physics"]
    };

    console.log(person);
    console.log(person.Gender);
    person.Gender="Male";
    console.log(person.favFood[0].name);

function sayHello(name,age){
    console.log('hello!!',name," you have ",age,"years of age");
    console.log('hello!!'+name+" you have "+age+"years of age");
    console.log(`hello!! ${name}  you have ${age} years of age`);
}
    
sayHello("bro",15);
console.log("NIce");
    

    
function sayHello(name,age){
    
    //console.log(`hello!! ${name}  you have ${age} years of age`);
    return `hello!! ${name}  you have ${age} years of age`;
}

const greerNicolas=sayHello("Nicolas",14);
//grearNicolas의 값은 sayHello()함수의 리턴 값이다.
//결과는 undefined 나온다.


console.log(greerNicolas);

const calculator={
    plus:function(a,b){
        return a+b;
    },
    mius:function(a,b){
        if(a>b)return a-b;
        else return b-a;
    },
    squareroot:function(a,s){
        if(s==0)return 1;
        else{
            let i,r=1;
            for(i=1;i<=s;i++){
                r=r*a;
            }
            return r;
        }
    }
}
const plus=calculator.plus(5,5);
const mi_a=calculator.mius(5,1);
const mi_b=calculator.mius(1,5);
const jegob=calculator.squareroot(2,5);//뒤에가 지수임
console.log(plus);
console.log(mi_a);
console.log(mi_b);
console.log(jegob);
*/