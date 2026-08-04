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

//callback 
/*function greet(name, callback){
    console.log("Hello",name);
    callback();
}
function bye(){
    console.log("Goodbye!");
}

greet("John",bye);*/

//Default parameters 
/*function name(n="ravi"){
    console.log("hello",n);
}
name();
name("sam");*/

//iife 
/*(function (){
    console.log("Function executed");
})();*/

/*let a=10;
let b=3;
console.log(a + b);//13
console.log(a - b);//7
console.log(a * b);//30
console.log(a / b);//3.333
console.log(a % b);//1
console.log(a ** b);//1000

console.log(a>b);
console.log(a < b);
console.log(a == b);
console.log(a <= b);
console.log(a >= b);
console.log(a != b);

a++;
console.log(a);//11

let x=10;
x**=5;
console.log(x);

console.log(5=="5");//true 
console.log(5==="5");//false

let age =25;
console.log(age>=18 && age<=60);//true
console.log(age>=30 && age<=60);//false 
console.log(age>= 30 || age<=60);//true
console.log(!false);//true*/

//spread with array 
/*let f =["Apple","Banana","Mango"];
let b = ["a","b","c"];
let newFruits = ["queen",...f, ...b, "king"];
console.log(newFruits);*/

//spread with objects 

/*let s={
    name:"jasim",
    age:20
};
let m ={
    ...s,
    course: "CSE"
};
console.log(m);*/

//rest
/*function add(...nums){
    console.log(nums);
}
add(10,20,30,40,50,90);*/

//Rest with parameters 
/*function sum(...nums){
    let t=0;
    for(let n of nums){
        t += n;
    }
    return t;*/
/*}
console.log(sum(10,20,30,40));//100

//Array dest 
let f=["a","b","c"];
let[first, second,third] = f;
console.log(first);//a
console.log(second);//b
console.log(third);//c

//object dest 
let s={
    n:"Bhagi",
    age:21,
    role:"FSD"
};
let {n,age,role} = s;
console.log(n);
console.log(age);
console.log(role);*/


//let fruits = ["apple","banana","mango","orange"];
//fruits.push("mango");
//console.log(fruits);
//fruits.pop();
//fruits.unshift("mango","grapes");
//fruits.shift();
//fruits.splice(1,2);//1 .starting index 2.num of elts to delete
/*fruits.splice(1,0,"grapes");
fruits.splice(1,1,"medicine");
console.log(fruits);*/


//merge 
/*let arr1 = [1,2,3];
let arr2=[4,5,6];
let res = arr1.concat(arr2);
console.log(res);//[1,2,3,4,5,6]*/

/*let f=["a","b","c","d","e"];
let res = f.slice(1,3);
console.log(res);*/

/*let nums = [1,2,[3,4],[6,7,8]];
console.log(nums.flat());*///[1,2,3,4,5,6,7,8]

//let n = [1,2,3,4];
//n.fill(0);
//specify range 
//n.fill(0,1,3);
/*console.log(n.includes(8));
console.log(n);//[0,0,0,0]*/

/*let fruits=["mango","apple","banana","orange","grapes"];
fruits.sort();
console.log(fruits);*/

//let n = [10,5,20,2,5,8,20,20];

//n.sort();
//console.log(n);//[10,2,20,5] [2,5,10,20]
//n.sort((a,b)=>a-b);//a =10, b=5 a-b =5 [5,10,20,2] [5,10,2,20]
//console.log(n.indexOf(25));//3
//console.log(n.lastIndexOf(20));//7
//n.reverse();

//console.log(n.join("-"));

/*let fruits=["mango","apple","banana","orange","grapes"];
let n=[1,2,3,5];
console.log(fruits.toString());
console.log(n.toString());*/


/*let numbers = [10,20,30,45,50];
let result = numbers.some(function(num){
    return num>=80;
});
console.log(result);//false

let numbers = [10,20,30,45,50];
let result = numbers.every(function(num){
    return num>5;
});

console.log(result);//true*/

/*let f=["mango","apple","banana","orange","grapes","mango"];
f.forEach(function(fruit){
    console.log(fruit);
});*/
//map()
/*let n=[1,2,3,4,5];
let result = n.map(function(number){
    return number*2;
});
console.log(result);*/

//filter()
/*let n=[1,2,3,4,50,20,35,87];
let result = n.filter(function(number){
    return number>15;
});
console.log(result);*/

//find()
/*let n=[1,2,3,4,16,50,20,35,87];
let result = n.find(function(number){
    return number>15;
});
console.log(result);*/

//reduce()
/*let n=[10,20,30,40];
let total = n.reduce(function(sum,number){
    return sum+number;
},0);
console.log(total);//0+10 =10,10+20=30, 30+30=60, 60+40=100*/

//string methods 
/*let s="javaScript";
console.log(s);
console.log(s.length);//10
console.log(s.charAt(7));//r
console.log(s.at(9));
console.log(s.at(-3));
console.log(s.indexOf("a"));//1 
console.log(s.lastIndexOf("a"));//3
console.log(s.includes("java"));//true
console.log(s.startsWith("Script"));//false
console.log(s.endsWith("java"));//false
console.log(s.slice(0,4));//java
console.log(s.substring(4,10));//Script*/

/*let text = " I like web development web web ";
console.log(text.replace("web","front-end"));
console.log(text.replaceAll("web","front-end"));
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.trim());
console.log(text.trimStart());
console.log(text.trimEnd());
*/

/*let s = "i , like, java, script";
let st = "i like java 1234";
console.log(st.match(/\d+/));

console.log(s.split(","));

let t="js ";
console.log(t.repeat(4));

let n="5";
console.log(n.padStart(3," "));//005
console.log(n.padEnd(3,"0"));//500*/

//current date

/*let cd = new Date();
console.log(cd);

//using year,month,day jan(0)-- dec(11)
let date = new Date("2026-08-04");
console.log(date);

//specific date 
let dat = new Date("2026-08-04");

console.log(dat);*/

/*let date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());*/

let date = new Date();
//date.setFullYear(2027);
//date.setMonth(11);
//date.setDate(20);
//date.setHours(23);
//date.setMilliseconds(500);
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toLocaleString());
console.log(date.toISOString());