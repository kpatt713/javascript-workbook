//display current date & time
var d = new Date();
console.log(d);
var t = d.getHours() + ":" + d.getMinutes();
console.log(t);

//convert a number to a string
var num = 8;
var n = num.toString();
console.log(n);

//convert a string to a number
var num1 = '8x';
var num2 = parseInt(num1, 10);
console.log(num2);

//Datatypes 
//boolean
var b = true;
console.log(typeof b);
//null
var n = null;
console.log(typeof n);
//undefined
var un;
console.log(typeof un);
//number
var num = 78;
console.log(typeof num);
//NaN
var not = NaN;
console.log(typeof not);
//string
var s = "Hello, World!";
console.log(typeof s);

//adds 2 numbers together
var numb1 = 8;
var numb2 = 7;
console.log(numb1 + numb2);

//runs only when 2 things are true
let n1 = 9;
let n2 = 6;
if(n1 > 0 && n2 > 0);

//1 of 2 things are true
if(n1 > 10 && n2 > 0);

//runs when 2 things are not true
if(!(n1 > 0 && n2 > 0));