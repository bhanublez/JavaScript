//1. Way to print in JavaScript
//console.log("Hello World");
//alert("me doing wrong");
//document.write("This is document write")

//2. JavaScript console API(application programming interface)
console.log("Hello World", 8 + 2, "Another log");
console.warn("this is Warning");
console.error("this is an Error");
/*
Multi 
line 
Comment*/


//3. JavaScript Variables
//What are variables? -> Container to Store data values
var number1 = 35;
var number2 = 84.24;
console.log(number1 + number2);

//4.Data types in JavaScript
//Strings Data type
var str1 = "This is String";
var str2 = 'This is also String';

//Number Data Type
var n1 = 45;
var n2 = 45.323;

//Objects -Key value pairs
var marks = {
    Ravi: 45,
    Raju: 85,
    Panku: 99
}
console.log(marks);

//Booleans
var a = true;
var b = false;
console.log(a, b);

//Undefined 
var und = undefined;
console.log(und);

//null
var n = null;
console.log(n);

/*
At high level there are two types of data types
1.Primitive Data Type: undefined,null,boolean,number,string,symbol
2.Reference Data Type: arrays and Objects
*/

//array -> collection of Slective element
var arr = [1, 2, 3, 4, 5, "Tiku"];
console.log(arr);
console.log(arr[0]);
console.log(arr[5]);

//Operator in JavaScript
var x = 45, y = 40;
//Arithmetic Operators
console.log(x + y);
console.log(x * y);
console.log(x - y);
console.log(x / y);
console.log(x % y);

//Assignment Operator
var z = x;
console.log("Value of b store in z is ", z);
z += 2;
z++;
z /= 2;

//Comparsion Operator
console.log(x == y);
console.log(x > y);
console.log(x < y);
console.log(x <= y);
console.log(x >= y);



//Logical Operator
console.log("Logical Operator");
console.log(true && false)
console.log(true && true);
console.log(2==2||4>2)
console.log(2==2||4<2)
console.log(false||true)
console.log(true||true)
//console.log(true or false);
//console.log(true or true);
console.log(!true);
console.log(!false);

//function making in javaScript
function avg(k, l) {
    return ((k + l) / 2);
}
console.log(avg(45, 25));

//conditional Operator
//if, if-else,else,switch etc

var ad = [1, 2, 3, 4, 5, 6, 'siku'];
console.warn(ad);
ad.forEach(function (element) {
    console.log(element);
})

const aa = 0;
//aa++; //show error

let j = 0;
while (j < ad.length) {
    console.error(arr[j]);
    j++;
}

let myarr = ["world", "Camera", 456, null, false];
//Array Method
console.log(myarr);
myarr.pop();
console.log(myarr);
myarr.push("Hello");
console.log(myarr);
myarr.shift();
console.log(myarr);
myarr.unshift("Don");
console.error(myarr);
console.log(myarr.length);


//Extra array function
var ar = [-345, 155, 0223, 234, "Don", , 0, 456];//putting 0 in front of any number brings some changes in vale
console.log(ar.sort());
console.warn(ar.toString());


//String methods in JavaScript
let mys = "Don't judge books by its cover, judge";
console.log(mys);
console.log(mys.length);
console.log(mys.indexOf("judge"));
console.log(mys.lastIndexOf("judge"));
console.log(mys.slice(4, 9));
console.log(mys.replace("books", "book"));

//Date function
let myDate = new Date();
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getSeconds());

/*
//DOM manipulation
document.getElementById('click').click();//targeting element by id
document.getElementById('click').style.border='2px solid blue';
*/
let ele = document.getElementById('click');
console.log(ele);
let eleclass = document.getElementsByClassName('container');
console.log(eleclass);
//eleclass[0].style.background="lime";
eleclass[0].classList.add("bg-primary");
eleclass[0].classList.add("text-su");
//eleclass[0].classList.remove("text-su");


//Accesing Inner Html
//1. eleclass.innerHTML;
//2. eleclass.innerText;
console.log(ele.innerHTML);
console.log(ele.innerText);

console.log(eleclass[0].innerHTML);
console.log(eleclass[0].innerText);

tn = document.getElementsByTagName('div');//div->button etc
console.log(tn);

createdElement =document.createElement('p');
createdElement.innerText = "This is created para OK!";
tn[0].appendChild(createdElement);

createdElement2 =document.createElement('b');
createdElement2.innerText = "For Second Element!";
tn[0].replaceChild(createdElement2,createdElement);
//removeChile(element); --> For removing Element
// document.domain ,links, script,location,URL,images

//Selecting using Query
sel =document.querySelector('.container');
console.log(sel);

//for selecting all
sell =document.querySelectorAll('.container');
console.log(sell);   

function clicked(){
    console.log("The button was clicked");
}
window.onload = function(){
    console.log("The document is onloaded ");
}

//Events in JavaScripts
/*firstcontainer.addEventListener('click',function(){
document.querySelectorAll('.container')[1].innerHTML=
"<b> I clicker on the container </b>";
    console.log("click hua on conatiner");

})

firstcontainer.addEventListener('mouseover',function(){
    console.log("mouse hua on conatiner");
    })
    

    firstcontainer.addEventListener('mouseout',function(){
        console.log("mouse out of conatiner");
        })
        */
 let prevHTML =document.querySelectorAll('.container')[1].innerHTML;
        firstcontainer.addEventListener('mouseup',function(){
            console.log("mouse up on click on  conatiner");
            document.querySelectorAll('.container')[1].innerHTML=prevHTML;
            })
            firstcontainer.addEventListener('mousedown',function(){
                console.log("mouse down on click on  conatiner");
     document.querySelectorAll('.container')[1].innerHTML=
"<b> Welcome to hell </b>";
                })
 
                
//Arrow Function
/*function  summ(a,b){
    return a+b;
}
sum = (a,b)=>{
    return a+b;
}*/  
logkaro = ()=>{
    console.log("Iam your log");
    document.querySelectorAll('.container')[1].innerHTML=
"<b> After second of tme it comed </b>";
}
//SetTimeout and set interval
//clrr=setTimeout(logkaro,2000);
//clr = setInterval(logkaro,2000); 
//clearInterval(clr);and clearTimeout(clrr);

//JavaScript localStorage
//localStorage.setItem('name','bhanu')  localStorage.getItem('name');
//for clearing localStorage.clear(); 
//JSON -->JavaScript Object Notation used for exhanging of data.
//localStorage.remove('name');
/*
objj = {name : "bhanu", length:1, aa:{ this:'tha"t'} };
jso =JSON.stringify(objj);
console.log(typeof jso);
console.log(jso);
parsed = JSON.parse('{"name":"bhanu","length":1,"aa":{"this":"tha\\"t"}}') ;
console.log(parsed);
*/
//Template literals -Backtricks
a=34;
console.log('this is my $(a)');