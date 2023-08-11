// console.log('Hi');

// Variable & constants & comments

// var a = 10;
// var a = 20;
// console.log(a);

// let b = 10;
// b = 20;

// console.log(b);

// const c= 10;
// console.log(c);

// Data Types & Values

// Numbers, String, Boolean, Null, Undefined, object, symbol

// let points;
// points = 13
// console.log(points);

// let a = "Hello";
// let b = "World";
// let c = "        Coding        "
// console.log(a,b);
// console.log(a+b);
// console.log(`My string is: ${a} ${b}`);
// console.log(a[2]);
// console.log((a+b).toLowerCase());
// console.log((a+b).toUpperCase());

// console.log(a.indexOf('H'));

// console.log(c);
// console.log(c.trim());
// console.log(c);

// console.log(a.lastIndexOf('H'));

// console.log(a.includes('H'));
// console.log(a.includes('P'));

// let d = "MY text goes here"

// console.log(d.slice(0,5));

// console.log(d.split(' '));

// // Strings are immutable

// let str = "Hello";
// console.log(str);

// str[0] = 'P'
// console.log(str);

// // Numbers

// let num = 10;
// console.log(typeof num);
// console.log(0%5);
// console.log(2**5);
// console.log('1 + 2 is ', 1+2);

// let a1 = 2
// console.log(a1 == 2);
// console.log(a1 === '2');

// console.log(a1 != 2);
// console.log(a1 !== '2');

// let a3 = "54"
// let a2 = Number(a3)

// console.log(a3 , typeof a3);
// console.log(a2, typeof a2);

// console.log(String(5));
// console.log(Boolean(-1));
// console.log(Boolean(' '));

// Array Methods

// let arr = ['A','B','C','B']
// let arr1 = ['E','F']
// console.log(arr.join(','));

// console.log(arr.indexOf('B'));
// console.log(arr.concat(arr1));

// console.log(arr.length);

// push method

// let pushedarr = arr.push('Nitin')
// console.log(pushedarr);
// console.log(arr);

// // pop

// console.log(arr.pop());
// console.log(arr);
// console.log('---');

// let points = "23"
// console.log(points === 23);

// console.log(3%8);

// console.log("5"+3);


// console.log("5"-3);
// console.log("5"*3);

// loop
// for,while,do-while

// let a = 50;
// if(true){
//     a = 10;
//     console.log(a);
// }
// console.log(a);


// Function

// function printHello(){
//     console.log('Hello');
// }

// let printHello = function(msg='default'){
//     console.log(msg);
//     console.log(`This is msg : ${msg}`);
// }
// printHello('Hello 1234')
// printHello()


// Arrow Functions

// let printHello = msg=> `This is ${msg}`;

// console.log(printHello('Nitin'));

// Higher order function

// let uppercase = function(str){
// return str.toUpperCase()
// }

// let lowercase = function(str){
//     return str.toLowerCase()
//     }

// // This is a HOF (Higer order function)
// let transform = function(str, fun){
//     return fun(str)
// }

// console.log(transform('Hello Nitin', lowercase));

// let compliment = function(msg){
//     return function(name){
//         console.log(msg,name);
//     }
// }

// compliment('This is ')('Nitin');

// IIFE

// (function(name){
//     console.log('I am iify', name);
// })('Nitin')

// setTimeout & setInterval

// setTimeout(()=>{
//     console.log('I am running');
// },0)

// setTimeout(function(name, name2){
//     console.log('I am running 2', name, name2);
// },3000, 'Nitin', 'Mahesh')

// setInterval(function(name, name2){
// console.log('I am running', name, name2);
// },1000, 'Nitin','Gouri')

// Hoisting

// a = 10
// console.log(a);
// let a;

// msg()
// function msg(){
//     console.log('Hi this is hoisting function');
// }

// msg()
// msg1()
// let msg = ()=>{
//     console.log('Hi this is not hoisting function');
// }
// let msg1 = function(){
//     console.log('Hi this is not hoisting function');
// }