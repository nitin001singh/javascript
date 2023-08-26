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

// objects 

// let obj = {
//     color:"red"
// }

// console.log(obj);
// console.log(obj.color);
// console.log(obj['color']);

// obj.color = 'Yellow'
// obj.model = 'Honda'
// console.log(obj);
// let value = delete obj.color

// console.log(obj);
// console.log(value);
// let age = {
//     agenum:30,
//     agecalculate:function(){
//         console.log(this.agenum);
//         console.log('AGE');
//         return true
//     }
// }

// console.log(age.agecalculate());


// let dishes = ['Biryani','Roti','Chawal','Daal']

// dishes.forEach(function(value, index){
//     console.log(value, index);

// })

// console.log(Math.trunc(2.66));
// console.log(Math.round(Math.random() * 100));


// Call apply bind
// "use strict"
// let restro = {
//     restro_name:'Kake di hatti',
//     location: 'Mansarover, jaipur',
//     food:'Daal or Roti',
//     orders:[],
//     book:function(username){
//         console.log(`${username} has ordered ${this.food} from ${this.restro_name
//         }, ${this.location} `);
//         this.orders.push({restro:`${ this.restro_name}`, username:`${username}`})
//     }

// }
// console.log(restro);
// restro.book('Nitin')
// restro.book('Gouri')

// let otherrestro = {
//     restro_name:'Mama parathe wale',
//     location: 'Mansarover, jaipur',
//     food:'Daal or Roti',
//     orders:[],
// }
// let bookorder = restro.book

// // bookorder('Sandeep')
// bookorder.call(otherrestro,'sandeep')

// console.log(otherrestro);

// bookorder.call(otherrestro, 'Yuvraj singh')

// bookorder.apply(otherrestro,['suresh'])

// function greet(){
//     console.log(`Welcome ${this.fname} ${this.lname}`);
// }

// let user = { 
//     fname: 'Nitin',
//     lname: 'Singh'
// }

// let greet1 = greet.bind(user)
// greet1()

// let arr1 = [10,20,30,40,50]

// let arr2 = arr1;

// console.log(arr1);
// console.log(arr2);
// console.log(arr1.length);
// console.log(arr2.length);
// arr2[6] = 50

// console.log(arr1);
// console.log(arr2);
// console.log(arr1.length);
// console.log(arr2.length);


// let arr3 = [... arr1]  // copy separate
// arr3[95]= 51
// arr3.shift()
// console.log(arr3);
// console.log(arr3.length);
 

// for in loop

// let obj = {
//     fname:'Nitin',
//     lname:'Singh',
//     address: 'Jaipur'

// }

// console.log(obj);

// for(let key in obj){
//     console.log(key, obj[key]);
// }

// javascript DOM

// console.log(document.URL);
// let resultElement = document.querySelectorAll('p')
// console.log(resultElement); // returns Nodelist

// let a = document.querySelectorAll('.secondh2')
// console.log(a);

// let a = document.querySelector('#heading3')
// console.log(a);
// console.dir(a);

// console.log(document.getElementsByTagName('p'));

// let heading = document.querySelector('.content')
// heading.innerText += "This is new content"
// console.log(heading.innerText);
// heading.innerHTML += "<br/><h4>New heading content</h4>"
// console.log(heading.innerHTML);

// let googlelink = document.querySelector('a')
// console.log(googlelink.getAttribute('href'));

// googlelink.setAttribute('href','http://www.facebook.com')

// let heading = document.querySelector('h1')
// heading.style.color = '#FF0000'
// heading.style.backgroundColor = '#000'

// heading.classList.add('nitinnewclass')
// // heading.classList.remove('nitinnewclass')

// heading.classList.replace('nitinnewclass','nitin123')

// let parentelement = document.querySelector('.content')
// console.log(parentelement.children);

// Array.from(parentelement.children).forEach(function(value){
// value.classList.add('Test')
// })
// console.log(Array.from(parentelement.children));

// let childelement = document.querySelector('h2')
// console.log(childelement.parentElement);

// console.log(childelement.nextElementSibling);
// console.log(childelement.previousElementSibling);


// Events

// const ul = document.querySelector('ul')
// ul.addEventListener('click',()=>{
//     console.log('Inside UL');
// })

// let clickElement = document.querySelector('.clickMe')
// console.log(clickElement);

// clickElement.addEventListener('click', function(){
//     let li = document.createElement('li')
//     li.textContent = "Something new"
//     ul.append(li)
// })



// let elements = document.querySelectorAll('li')
// console.log(elements);

// elements.forEach(function(element){
// element.addEventListener('click', (e)=>{
//     console.log('click on item');
//     console.log(e.target);
//     e.target.style.textDecoration = 'line-through'
//     e.target.remove()
// })
// })


// Event Bubbling & Deligation

// let elements = document.querySelectorAll('li')
// elements.forEach(function(element){
// element.addEventListener('click', (e)=>{
//     console.log('click on item');
//     console.log(e.target);
//     e.target.style.textDecoration = 'line-through'
// })
// })

// const ul = document.querySelector('ul')
// ul.addEventListener('click',(e)=>{
//     console.log('Inside UL');
//     console.log(e.target);
// })

// Forms  & events

// Array & Methods

// let letters = ['a','b','c','d']

// letters.reverse()
// console.log(letters);

// let nums = [1,2,3,4]
// let concat = nums.concat(letters)
// console.log(concat);
// console.log(...nums, ...letters);

// let stringa = letters.join('-')
// console.log(stringa);
// console.log(typeof stringa);
// console.log(...letters);

// let num = [1,2,3,4,5,6,7,8,9]

// let extracted = num.slice(1,3)
// console.log(extracted);

// let num = [1,2,3,4,5,6]
// let newval = num.splice(1,1,10,20)
// console.log(newval);
// console.log(num);

// let newval = num.splice(-2)
// console.log(num);


// console.log(num.at(4));
// console.log(num.at(-1));
// console.log(num.slice(-1));

// let name = "Nitin"
// console.log(name.at(0));

// Higher order funciton 

// map method

// let salary = [1000,2000,3000,4000,5000]
// let newsal = salary.map((sal)=>{
//     let incsal = sal/2
//     return sal + incsal
// })

// console.log(newsal);

// Filter method

// let gifts = ['watch','ring','aa','bb']
// let filteredarr = gifts.filter((g)=>{
//     if(g == 'watch' || g == 'ring'){
//         return g
//     }
// })
// console.log(gifts);
// console.log(filteredarr);

// Reduce method

// let nums = [1,2,3,4,5]
// let sum = nums.reduce((total, n)=>{
// return total * n
// },1)

// console.log(sum);


// find method
// let students =[{
//     id: 1,
//     name: 'nitin'
// },{
//     id: 2,
//     name: 'raja'
// }]

// let results = students.find((student)=>{
//     return student.id == 1
// })
// console.log(results);


// let students =[{
//     id: 1,
//     name: 'nitin'
// },{
//     id: 2,
//     name: 'raja'
// }]

// let results = students.findIndex((student)=>{
//     return student.id == 2
// })
// console.log(results);


// let scored = [10,20,30,40,50]
// let result = scored.some((score)=>{
//     return score > 20
// })
// console.log(result);


// let scored = [10,20,30,40,50]
// let result = scored.every((score)=>{
//     return score > 5
// })
// console.log(result);

// let arr = [1,2,3,[4,5,6,[7,8,9,[10,11,12]]]]
// console.log(arr);
// let result = arr.flat(3) // 3 is a deep level
// console.log(result);

// let cart = [{
//     name:'Mobile Phone',
//     qty:2,
//     price:500
// },{
//     name:'Tablet',
//     qty:1,
//     price:1000
// }]

// let newcart = cart.flatMap((item)=>{
//     if(item.name == 'Mobile Phone'){
//         return [item, {name:'screen guard', price:0, qty:1}]
//     }else{
//         return [item]
//     }

// })

// console.log(newcart);

// Sorting Array

// let letters = ['a','b','r','s','o']

// console.log(letters.sort());
// let nums = [1,2,3,4,5,2,87,9,-1,-65]
// console.log(nums.sort());

// nums.sort((a,b)=>{
// return b-a  // Descending sort
// })
// console.log(nums);

// let num = [1,2,3,4,5,6]
// let results = num.slice(0,3).splice(2,1,7)
// console.log(results);
// console.log(num);

// Date object


// let currentdate = new Date(2023,7,15);
// console.log(currentdate);


// let currentdate = new Date().getTime();
// console.log(currentdate);


// let currentdate = new Date();
// console.log(currentdate);

// console.log(currentdate.getFullYear());
// console.log(currentdate.getMonth());
// console.log(currentdate.getHours());
// console.log(currentdate.getDay());
// console.log(currentdate.getMinutes());
// console.log(currentdate.getDate());
// console.log(currentdate.getSeconds());

// localStorage  & Session storage

// localStorage.setItem('testval','Nitin')
// localStorage.setItem('age',33)
// console.log(localStorage);

// console.log(localStorage.getItem('age'));

// localStorage.setItem('testval','Ram')

// console.log(localStorage);

// localStorage.removeItem('testval')
// console.log(localStorage);

// localStorage.clear()


// Oops in JS

// Constructor function
// let Car = function(color, model){
// // console.log(this);
// this.color = color;
// this.model = model;
// // this.login = function(){
// //     console.log('Login done');
// // }
// }

// let result = new Car('Red','Virtus');
// console.log(result);
// let result1 = new Car('Blue','Slavia');
// console.log(result1);


// console.log(result instanceof Car) 

// // console.log(result1.login());

// Car.prototype.company= "Honda"

// console.log(Car.prototype);

// Car.prototype.startEngine = function(){
//     console.log('Car Started');
// }


// console.log(Car.prototype);

// result1.startEngine()

// console.log(result1.__proto__) 
// console.log(result1.__proto__.isPrototypeOf(result1)); // true
// console.log(Car.prototype.isPrototypeOf(Car)); //false

// let arr = [1,2,3,4,5,6]
// console.log(arr.__proto__, Array.prototype);

// console.log(arr.__proto__.__proto__); // prototype chaining

// console.log(Object.prototype);

// class Car{
//     constructor(color, model){
//         this.color = color
//         this.model = model

//     }
//     startEngine(){
//         console.log('Engine started');
//     }
// }

// let honda = new Car('Red',2023)

// console.log(honda);
// honda.startEngine()

// Car.prototype.breakMethod = function(){
//     console.log('Break pushed');
// }

// console.log(honda.__proto__.isPrototypeOf(honda));

// honda.breakMethod()

// Class & Getter & Setter 



// class Car{
//     constructor(color, model){
//         this.color = color
//         this.model = model
//     }

//     startEngien(){
//         console.log('Engine started');
//     }

//     get _startEngine(){
//         console.log('This is start engine method getter');
//     }

//     set changeColor(color){
//         console.log('Color has changed to', color);
//     }

//     get description(){
//         return `Color of bike is ${this.color} and the model is ${this.model}`
//     }
// }

// let honda = new Car('Red',2022)
// honda.startEngien()
// honda._startEngine
// honda.changeColor = "Blue"
// console.log(honda.description);

// // static method

// Car.break = function(){
//     console.log('Car method');
// }

// Car.break()

// inheritance

// class Bike extends Car{
//     constructor(color, model,engine){
//         super(color, model)
//         this.engine = engine

//     }
//     bikeMethod(){
//         console.log('This is bike method of bike class');
//     }
// }

// let newbike = new Bike('Black', 2023,'150CC')
// let newbike1 = new Bike('White', 2023,'200CC')

// console.log(newbike);
// console.log(newbike.__proto__);

// console.log(newbike1);

// let Bikeold = function(color, model,engine){
//     Car.call(this, color, model)

// }
// let bike1 = new Bikeold('green',2023,'250cc')

// console.log(bike1);
// function Person(name){
//     this.name = name
// }
// Person.prototype.printName = function(){
//     console.log('Name is ', this.name);
// }

// const person = new Person('Nitin')
// console.log(person);
// console.log(person.printName());


// Async/Await

// console.log('Hi');
// console.log('Hello');
// setTimeout(() => {
//     console.log('Inside settimeout');
// }, 1000);
// console.log('Outside timeout');

// let todos = (resource, callback)=>{
//     let request = new XMLHttpRequest()
//     // console.log(request);
    
//     request.addEventListener('readystatechange',()=>{
//         if(request.readyState === 4 && request.status == 200){
//             let data = JSON.parse(request.responseText)
//             callback(undefined,data)
//         }else if(request.readyState === 4){
//             callback('Data could not be fetched', undefined)
//         }
//     })
    
//     request.open('get',resource)
//     request.send()
// }

// console.log(1);

// console.log(2);
// todos('data.json',(error,data)=>{
//     if(error){
//         console.log(error);
//     }else{
//         console.log(data);
//     }
// })
// console.log(3);
// console.log(4);


// Promise 

// let getsomething = ()=>{
//     return new Promise((resolve, reject)=>{
//         // resolve('some data goes here')
//         reject('some error goes here')
//     })
// }

// getsomething().then((succ)=>{
//     console.log(succ);
// }).catch((err)=>{
//     console.log(err);
// })


// let todos = (resource, callback)=>{

//     return  new Promise((resolve, reject)=>{
//         let request = new XMLHttpRequest()      
//         request.addEventListener('readystatechange',()=>{
//             if(request.readyState === 4 && request.status == 200){
//                 let data = JSON.parse(request.responseText)
//                 // callback(undefined,data)
//                 resolve(data)
//             }else if(request.readyState === 4){
//                 // callback('Data could not be fetched', undefined)
//                 reject('Throw error')

//             }
//         })
        
//         request.open('get',resource)
//         request.send()
//     })  
// }
// // Promise chaining
// todos('data.json').then((succ)=>{
//     console.log(succ);
//     return todos('data1.json')
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// Fetch APi

// fetch('data.json').then((res)=>{
//     return res.json()
// }).then((data)=>{
// console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// let getTodos = async()=>{
//     let response = await fetch('data.json')
//     // custom error

//     if(response.status !== 200){
//         throw new Error('Custom Error in fetching the data')
//     }

//     let data = await response.json()
//     return data
// }

// console.log('2');
// let test= getTodos().then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// });
// console.log(3);

// try{
//     let x = 4;
//     const y =6;
//     y = x
//     console.log(x+y);
// }catch(err){
// console.log(err);
// }

// Ecma Script  ES6


// let hotel = {
//     name:'Nitin hotel',
//     location:'Jaipur',
//     categories:['Chinese','Italian','English']
// }

// let items = [1,2,3,4]
// let [a,b,c,d] = items
// console.log(a,b,c,d);


// let [first,, third] = hotel.categories
// console.log(first, third);

// let temp = first
// first = third,
// third = temp
// console.log(first,third);

// [third, first] = [first, third]
// console.log(first, third);
 
// let nums = [2,3,[6,9]]
// // let [a,,c] = nums
// let [a,,[b,c]] = nums
// console.log(a,b,c);

// let hotel = {
//     name:'Nitin hotel',
//     Location:'Delhi',
//     categories:['Chinese','Italian','English'],
//     openhour:{
//         sunday:{open:'9AM', close:'11 PM'},
//         monday:{open:'9AM', close:'11 PM'},
//         tuesday:{open:'9AM', close:'11 PM'},
//     }
// }
 
// let {name,categories,Location} = hotel

// console.log(name, Location, categories);


//Customize name in object destructuring
// let {name:hotelName, Location:hotelLocation, cat:hotelCategory} = hotel
// console.log(hotelName, hotelLocation, hotelCategory);

// setting default value
// let {name,Location="jaipur",categories=[]} = hotel
// console.log(name, Location, categories);

// let {name, openhour} = hotel

// let {sunday, monday} = openhour
// console.log(name, openhour);
// console.log(sunday, monday);


// spread operator

// let nums = [1,2,33,4]
// console.log(...nums);

// let newArr = [9,10,...nums]
// console.log(newArr);

// let mainmenu = [...hotel.categories, 'Japanese','Indian']
// console.log(mainmenu);

// // join 2 array

// let joinarr = [...nums, ...newArr]
// console.log(joinarr);

// let passion = 'Programming'
// console.log(...passion);

// Rest operator

// let nums = [1,2,3,4,5,6]
// let [a,b,...rest] = nums

// console.log(a,b, ...rest);

// let {sunday, ...weekday} = hotel.openhour
// console.log(sunday, weekday);

// Short circuiting

// let result = 10 &&  null && undefined
// console.log(result);

// let result = 10 &&  0 && 30
// console.log(result);

// let result = 0 || null || undefined || 8
// console.log(result);


// Nullish Coalising operator

// let num = undefined
// let result = num || 10
// console.log(result);

//  // if num is null or undefined then it shows right sidre value otherwise left side 

// let result2 = num ?? 10 
// console.log(result2);

// let result2 = null ?? 'Good'
// console.log(result2);

// For in get index value while for of get value
// let test = [10,20,30,40]  // Will work
// // let test = {     // Not work
// //     name:'Nitin',
// //     address:'jaipur'
// // }

// console.log(test.entries());
// for(let [index,value] of test.entries()){
//     console.log(index,value);
// }

// Enhanced object literals

// let openhour = {
//     sunday:{open:'9AM', close:'11 PM'},
//     monday:{open:'9AM', close:'11 PM'},
//     tuesday:{open:'9AM', close:'11 PM'},
// }
// let menuType = "Golden"
// let hotel = {
//     name:'Nitin hotel',
//     Location:'Delhi',
//     categories:['Chinese','Italian','English'],
//     openhour,
//     order:function(){

//     },
//     order_latest_es6(){

//     },
//     [menuType]:['Food items']   
// }

// console.log(hotel);

// // optional chaining

// console.log(hotel.openhour?.saturday?.open);


// // Get keys & values 
// let allkeys = Object.keys(openhour)
// console.log(allkeys);

// let allvalues = Object.values(openhour)
// console.log(allvalues);

// let allentry = Object.entries(openhour)
// console.log(allentry);

// for(let [index, value] of allentry){
// console.log(index, value);
// }



// Set

// let nums = [1,2,3,4,1,2,57,51,2,24]
// console.log(nums);
// let numset = new Set(nums);
// console.log(numset);  // Unique value
// console.log(numset.size);
// console.log(numset.has(3));
// console.log(numset.add(9));
// console.log(numset.delete(57));
// console.log(numset);
// // console.log(numset[2]);  // not allwed ,  error

// for(let num of numset.entries()){
//     console.log(num);
// }

// numset.clear()

// console.log(numset);

// let str = new Set('Programmer')
// console.log(str);
// console.log(str.size); //  unique character count


// Map

// let numMap = new Map()
// numMap.set('name','Taj1')
// numMap.set(5,'Taj2')
// numMap.set(new Date(),'Taj3')
// numMap.set(true,'Taj4')
// numMap.set(null,'Taj5')
// numMap.set(undefined,'Taj6')
// numMap.set(false,'Taj7')

// numMap.set([1,2],[5,6])

// console.log(numMap);
// console.log(numMap.get(null));
// console.log(numMap.size);

// console.log(numMap[1,2]); // error

// let arr = [10,20]
// numMap.set(arr, "Good Night")
// console.log(numMap[arr]);



// Misc Tools

// Named Export

// import * as single from './Product.js'
// // import {order, firstvalue,b as secondval} from "./Product.js"
// console.log('Importing module');

// console.log(single);

// single.order('Nitin','Laptop');
// console.log(single.firstvalue,single.b);



// Default Export

// import anyName from './Product.js'
// anyName('Nitin','Bike');


// Top Level Await

// console.log('Starting');
// let getTodos = async ()=>{
//     let response = await fetch("data.json")
//     let data = await response.json()
//     console.log(data);
// }
// getTodos()

// console.log('End');

// Module Pattern

//IIFE
// let result = (function(name){
//     let orders = [];
//     console.log('I am iify '+name);
//     let addCard = function(product, quantity){
//         orders.push({product, quantity})
//     }
//     return { orders, addCard}
// })('Nitin')

// result.addCard('Burger',4)
// result.addCard('Mobile',5);
// console.log(result.orders);

// console.log('Testing NPM');
// console.log('Welcome Nitin');
// console.log('How are you? I am nodemon');

// Closure

// let outerFunction = function(param){
//     let outerVar = 10;
//     let innerFunction = function(){
//         console.log('I am inner function');
//         console.log(outerVar);
//         console.log(param);
//     }
//     return innerFunction
// }
// let innerf = outerFunction('OuterVar')

// innerf();

// let counter = function(){
//     let count = 1
//     let innerCount = function(){
//         return count = count * 2
//     }
//     return innerCount
// }

// let res= counter()
// console.log(res());
// console.log(res());


// -----------------------------------
// Advance Topics 

// Temporal Dead zone


// let a = 100;

// {
//     console.log(a);   // TDZ
//     let a= 1;
// }


// Varibale Shadowing
// let x= 100;
// {
//     let x = 51;
//     console.log(x);
// }


// Hoisting
// y = 10
// console.log(y);
// var y ;


// say()
// function say(){
//     console.log('Say Hi');
// }

// say();  // error
// let say =  ()=>{
//     console.log('Say Hi');
// }



// for(let i=0; i<=10; i++){   // 0.....10
//     setTimeout(()=>{
//         console.log(i);
//     }, 1000)
// }


// for(var i=0; i<=10; i++){  // 11
//     setTimeout(()=>{
//         console.log(i);
//     }, 1000)
// }


// module scope    + test.js
// let a = 50;
// console.log(a);

// Global object 

// window.nitin = 100;  
// var nitin = 'Nitin singh'


// function say(){
//     console.log('Say hi');
// }


// Closure

// function initCounter(){
//     let count = 0;
//     return function(){
//         count++;
//         console.log(count);
//     }
// }

// let counter =  initCounter()
// counter()
// counter()

// let counter1 = initCounter()
// counter1()
// counter1()

// Currying

// function sum(a){
//     return function(b){
//         return function(c){
//            return a+b+c
//         }
//     }
// }


// let res = sum(1)(2)(3)
// console.log(res);

// let sumval = a=>b=>c=>a+b+c
// console.log(sumval(1)(2)(3));

// let log = time => type => msg => `At ${time.toISOString()} : ${type}: severity ${msg}`

// console.log(log(new Date())('error')('power not sufficient'))


// Shallow Copy

// let p = {name:'nitin'}
// let q = Object.assign({},p)
// console.log(q);

// let addressobject = {city: 'jaipur', state:'rajasthan'}

// let p1 = {name:'nitin', address:addressobject}
// let q1 = Object.assign({},p1)

// q1.name = 'mohit'
// q1.address.city = "Y"
// console.log(p1);
// console.log(q1);


// let addressobject = {city: 'jaipur', state:'rajasthan'}

// let p1 = {name:'nitin', address:addressobject}
// let q1 = {...p1}

// q1.name = 'mohit'
// q1.address.city = "Y"
// console.log(p1);
// console.log(q1);


// Deep Copy

// let addressobject = {city: 'jaipur', state:'rajasthan'}

// let p1 = {name:'nitin', address:addressobject}
// let q1 = JSON.parse(JSON.stringify(p1))
// q1.name = 'Ronit'
// q1.address.city = "delhi"

// console.log(p1);
// console.log(q1);

// let addressobject = {city: 'jaipur', state:'rajasthan'}

// let p1 = {name:'nitin', address:addressobject}

// let q1 = structuredClone(p1)
// q1.address.city = 'delhi'
// console.log(p1,q1);

// This keyword

// function sayHi(){
//     return 'Hi ' + this.name
// }

// console.log(sayHi())

// this is not present in arrow functtion

// Symbol data type

// const id = Symbol('id')
// const idx = Symbol('id')
// let p = {
//     name : 'nitin',
//     [id]: 1,
//     [idx]: 2
// } 

// console.log(p[id], p[idx]);


// Functions

// function sayHi(name){
//     return name
// }


// sayHi('Nitin')
// sayHi.name

// sayHi.x = 1;
// console.log(sayHi.x)


// Function constructor

// function Person(name){
//     this.name = name
// }

// const p = new Person('Nitin')
// console.log(p);


// Named Function expression

// let sayHello = function fx(user){
//     if(user){
//         return "Hello "+user
//     }else{
//         return fx('Anonymous')
//     }
// }

// let sayHi = sayHello
// sayHello = null
// console.log(sayHi())


// Decorator 

// function heavy(x){
//     console.log(x + ": Heavy");
//     return x + ": heavy"
// }

// // heavy(4)     // Normal Call

// function memoizer(fx){
//     let map = new Map(); // Hashmap

//     return function(x){
//         if(map.has(x)){
//            return map.get(x) 
//         }else{
//             let result = fx(x);
//             map.set(x,result)
//             return result
//         }
//     }
// }


// let memoizedHeavy = memoizer(heavy)

// memoizedHeavy(4)
// memoizedHeavy(3)
// memoizedHeavy(5)
// memoizedHeavy(5)



// Call method 

// let person = {
//     name: 'Nitin',
//     age:12,
//     location: 'Jaipur'
// }

// function checkName(a,b){
//     console.log(a,b);
//     return !!this.name
// }

// // person.check = checkName
// // console.log(person.check()); // Error

// console.log(checkName.call(person,1,2));

// // Apply Method

// console.log(checkName.apply(person,[3,4]));

// // Bind Method

// let bindedmethod = checkName.bind(person,9,78)
// console.log(bindedmethod);
// console.log(bindedmethod());

// Debounce


// let count =1;
// function showCount(){
//     count++;
//     console.log(count);
// }

// function debounce(fx, time){
//     let id = null;
//     return function(x){
//         if(id){
//             clearTimeout(id);
//         }
//         id = setTimeout(()=>{
//             fx();
//             id = null
//         }, time,x)
//     }
// }

// let showCountD = debounce(showCount,1000)

// setTimeout(showCountD, 1000)
// setTimeout(showCountD, 2200)
// setTimeout(showCountD, 2500)
// setTimeout(showCountD, 5000)



// Throttling

// let count =1;
// function showCount(x){
//     count++;
//     console.log(count, x);
// }

// function throttle(fx, time){
//     let id = null;
//     let args = [];
//     return function(x){
//         if(!id){
//             id = setTimeout(()=>{
//                 fx(args[args.length-1]);
//                 id = null
//             }, time)
//         }
//         args.push(x)

//     }
// }

// let showCountT = throttle(showCount,1500)

// setTimeout(showCountT, 1000,1)
// setTimeout(showCountT, 2200,2)
// setTimeout(showCountT, 3500,3)
// setTimeout(showCountT, 5000,4)

// Iterator

// iterable[Symbol.iterator]() => Iterator;

// let iterator = {
//     i: 0,
//     next:function(){
//         return {value:this.i, done:this.i++ > 5}
//     }
// }

// let iterable = {
//     name:'Nitin',
//     age:20,
//     [Symbol.iterator](){
//         return iterator
//     }
// }


// let range = {
//     start :0,
//     end:5,
//     [Symbol.iterator](){
//         let that = this;
//         let i = this.start;
//         return {
//             next:function(){
//                 return {value:i, done:i++ > that.end}
//             }
//         }
//     }
// }

// for(let r of range){
//     console.log(r);
// }

// console.log([... range]);

// let num = [1,2,3,4,5]
// let it = num[Symbol.iterator]()
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// let arrlike = {
//     'a':0,
//     'b':5,
//     'length':2
// }
// // arrlike = Array.from(arrlike)
// for(let k of arrlike){
//     console.log(k);
// }

// Convert object to Map

// let obj = {a:1, b:2, c:3}
// let map = new Map(Object.entries(obj))
// console.log(map);


// // convert map to object
// let obj1 = Object.fromEntries(map)
// console.log(obj1);

// WeakMap and Weakset

// let weakMap = new WeakMap()   // Memory optimized
// let person = {name:'john'}
// weakMap.set(person, {...person});
// person = null  

// Generators

// function* generatorFunciton(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let gobj = generatorFunciton();
// // console.log(gobj.next());
// // console.log(gobj.next());
// // console.log(gobj.next());
// // console.log(gobj.next());

// console.log([...gobj]);

// function *range(start, end){

//     for(let value=start; value<=end; value++){
//         yield value;
//     }

    
// }

// for(let r of range(0,5)){
//     console.log(r);
// }


// Nested Generator  // Generator composition

// function *range(start, end){

//     for(let value=start; value<=end; value++){
//         yield value;
//     }

    
// }
// function *multiRange(){
//     yield *range(0,5)
//     yield *range(100,105)
//     yield *range(200,205)
// }

// let generator = multiRange();

// console.log([... generator]);


// Prototypical Inheritance

// let animal = {eats: true,
//     walks:function(){
//         console.log('walks');
//     }
// }
// let dog = {barks: true}
// let mydog = {name:'Rocky'}
// dog.__proto__ = animal;
// mydog.__proto__=dog

// console.log(dog.barks);
// console.log(dog.eats);
// dog.walks()
// mydog.walks()

// mydog.walks = function(){
//     console.log('Walking slowly');
// }

// mydog.walks()
// dog.walks()

// for(let key in dog){
//     console.log('------');
//     console.log(Object.hasOwn(dog,key));
//     console.log(dog.hasOwnProperty(key));
//     console.log(key);
// }


// function User(name){
//     this.name = name
// }

// User.prototype.sayHi = function(){
//     return this.name
// }

// User.prototype.reverseName = function(){
//     return this.name.split('').reverse().join('');
// }

// let user = new User('john')
// let user1 = new User('wick')

// console.log(user.sayHi());
// console.log(user1.sayHi());


// console.log(user.reverseName());
// console.log(user1.reverseName());



// Classes


// class User {
//     constructor(name){
//         this.name = name
//     }

//     sayHi(){
//         return this.name
//     }
// }

// User.prototype.sayHello = function(){
//     return this.name
// }
// let user = new User('John')

// console.log(user.sayHi());
// console.log(user.sayHello());

// Async Javascript

// console.log(1);
// setTimeout(console.log, 1000, 3)
// console.log(2);


// // Callback

// function sum(a,b){
//     console.log(a,b);
//     return a+b
// }
// let asyncFx = (a,b,cb)=>setTimeout(()=>cb(sum(a,b)), 3000)

// console.log(asyncFx(2,5, function(result){
//     console.log(result);
// }));

// Promise 

function sum(a,b){
    return a+b
}
let asyncFx = (a,b)=>
new Promise((resolve, reject)=>{

    setTimeout(
        ()=>{
            let res = sum(a,b)
            if(res > 10){
                resolve(res)
            }else{
                reject('Sum is less than 10. Value is '+ res)
            }
        },
     3000)
})



// asyncFx(2,15).then(function(data){
//     console.log(data);
//     return asyncFx(10,data)
// }).then(function(data1){
//         console.log(data1);
// }).catch(function(err){
//     console.log(err);
// }).finally(()=>{
//     console.log('Finally');
// })


// Promise APIs

Promise.all([asyncFx(10,20), asyncFx(20,20), asyncFx(25,25)]).then(function(data){
console.log(data);
}).catch(function(err){
    console.log(err);
})

// Return all wheter resolved or reject
Promise.allSettled([asyncFx(10,20), asyncFx(20,20), asyncFx(-25,25)]).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})

// Race among all return won one
Promise.race([asyncFx(10,20), asyncFx(20,20), asyncFx(25,25)]).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})

// First successfull
Promise.any([asyncFx(10,-20), asyncFx(20,-20), asyncFx(25,25)]).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})

// let p = asyncFx(10,20).resolve()
// console.log(p);

// let q = asyncFx(10,20).reject()
// console.log(q);

// -------------------------
// asyncFx(10,20).then(function(data){
//     console.log(data);
//     return asyncFx(10,data)
// })

// asyncFx(20,20).then(function(data){
//     console.log(data);
//     return asyncFx(10,data)
// })

// asyncFx(25,25).then(function(data){
//     console.log(data);
//     return asyncFx(10,data)
// })



// async function test(){
//     try{
//         console.time();
//         // let data = await asyncFx(2,15);
//         // let data2 = await asyncFx(12,15);
//         let pres = await Promise.all( [asyncFx(2,15),asyncFx(12,15) ])

//         // console.log('Result is ', data);
//         // console.log('Result is ', data2);
//         console.log('Result is ', pres);

//         console.timeEnd()


//         // return data
//     }catch(err){
//         console.log(err);
//     }
// }

// test()
