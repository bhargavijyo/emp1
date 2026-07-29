/*var name = "RAM";
var name = "Ravi";
console.log(name);//Ravi 

let age = 20;
age=67;
console.log(age);//67

const p1 = 3.14;
console.log(p1);//3.14

console.log("Number");

console.error("This is not correct");

console.warn("Invalid msg");

//console.clear();

let a = alert("Welcome to Web dev");
console.log(a);

let b= confirm("Do you really want to learn new technologies?");
console.log(b);

let c = prompt("Enter your name:");
console.log(c);

document.writeln("Welcome to Full stack developer role");

let e = 27;
console.log(e);

let f = "Bhuvan";
console.log(f);

let istrue = false;
console.log(istrue);

let ex;
console.log(ex);

let em = null;
console.log(em);*/

//Implicit type 

//1.string implicit --  If we add any data type with string it will always give string as the output.
/*console.log(typeof("hello"+"hello"));//string
console.log(typeof("hello"+123));//string
console.log(typeof("hello"+true));//string
console.log(typeof("hello"+undefined));
console.log(typeof("hello"+null));
console.log(typeof("hello"+[1,2]));
console.log(typeof("hello"+{1:5}));*/

//Number implicit 

/*console.log(typeof(123+"hello"));//string
console.log(typeof(123+123));//Number
console.log(typeof(123+true));//Number
console.log(typeof(123+undefined));//Number
console.log(typeof(123+null));//Number

//primitive + non-primitive == string
console.log(typeof(123+[1,2]));//string
console.log(typeof(123+{1:5}));//string*/

//Boolean Implicit 

/*console.log(typeof(true+"hello"));//string
console.log(typeof(true+123));//Number
console.log(typeof(true+true));//Number
console.log(typeof(true+undefined));//Number
console.log(typeof(true+null));//Number
//primitive + non-primitive == string
console.log(typeof(true+[1,2]));//string
console.log(typeof(true+{1:5}));//string*/

//Explicit 
/*console.log(Number(1));//1
console.log(Number(""));//0
console.log(Number("abc"));//Nan
console.log(Number("123"));//123
console.log(Number(-123));//-123
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number({a:5}));//Nan
console.log(Number(["b","h"]));//Nan

console.log(Boolean());//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(null));//false
console.log(Boolean("abc"));//true
console.log(Boolean(123));//true*/

//if 
/*let age = 10;
if(age>=18){
    console.log("adult");
}
else{
    console.log("child");
}*/


//else if 
/*let m = 25;
if(m>=90){
    console.log("A");
}else if(m>=75){
    console.log("B");
}else if(m>=50){
    console.log("C");
}else{
    console.log("Fail");
}*/

//switch 

/*let d=3;
switch(d){
    case 1:
        console.log("Mon");
        break;
    case 2:
        console.log("Tue");
        break;
    case 3:
        console.log("Wed");
        break;
    default:
        console.log("Invalid day");
}*/


//let's we take age is 18 ,w=65, h=155 then ppl will be eligible

/*let a=18;
let w=70;
let h = 160;
if(a>=18){
    if(w>65){
        if(h>155){
            console.log("Eligible");
        }else{
            console.log("Not eligible");
        }
    }else{
        console.log("not proper ht");
    }
}else{
    console.log("invalid");
}*/
/*let a=10;
let b=20;
console.log(a);*/

//for loop
/*let i=1;
for(i=1;i<=10;i++){
    console.log(i);
}*/

//while loop 
/*let i=1;
while(i<=5){
    console.log(i);
    i++;
}*/

//do while 
/*let a=4;
do{
    console.log(a);
    a++;
}
while(a<=10);*/
//for of 
/*const fruits = ["a","b","c","d"];
for(let f of fruits){
    console.log(f);
}*/

//for in 
/*let student = {
    name:"jasim",
    age:20,
    grade:"A"
};
for(let key in student){
    console.log(student[key]);
}*/

//function declaration 
/*function greet(){
    console.log("Hello, Students");
}
greet();*/

//function parameters -- allows you to pass values into a function 
/*function target(name){
    console.log("Hello",name);
}
target("Alice");*/

//function with return value -- 
/*function add(a,b){
    return a+b;
}
let res = add(5,6);
console.log(res);*/

//Function expression -- assign to a variable 
/*const m= function(a,b){
    return a*b;
};
console.log(m(4,8));*/

//arrow function 
/*let s = (a,b) =>{
    return a-b;
}
console.log(s(10,4));

let x= a => a*a;
console.log(x(9));*/