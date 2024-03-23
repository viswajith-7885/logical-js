//1
// function check(){
//     name="banana"
//     console.log(name);
//     console.log(price);

//     let price =20
//     var name='apple'
// }
// check()

//2

// for(var i =0;i<3;i++){
//     setTimeout(()=>console.log(i),1)
// }


//3

// for(let i =0;i<3;i++){
//     setTimeout(()=>console.log(i),1)
// }


//4
// console.warn(!!"hello")
// console.warn(typeof +true)

//5

// let data ="size"
// const bird ={
//     size:"small"
// }
// console.log(bird[data]);
// console.log(bird["size"]);
// console.log(bird.size);
// console.log(bird.data);

//6

// let c ={name:"peter"}
// let d;
// d=c;
// c.name="hari"
// console.log(d.name);
//answer will be "hari",because the variavle always takes the memmory reference.\

//7

// var x
// var x=10;
// console.log(x);

// answer will be 10

//8
// var x
// let x =10;
// console.log(x);


//9
// let a =3
// let b = new Number(3)

// console.log(a==b);
// console.log(a===b);
//data type :b is an object and a is number

//10
// let name;
// nmae="aswin"
// console.log(name);

//11

// function fruit(){
//     console.log("banana");
// }
// fruit.name="apple"
// fruit()

//12

// function sum (a,b){
//     return a+b
// }
// console.log(sum(1,"21"));

//13
// let number =0;
// console.log(number++);
// console.log(number);
// console.log(++number);
// console.log(number);

//14
// function num (...arg){
//     console.log(typeof arg);
// }
// num(21)

//15

// function getage(){
//     'use strict';
//     age=29
//     console.log(age);
// }
// getage()

//16
// let sum = eval('10*10+5')
// console.log(sum);

//17
//how long is cool secret accessible?
// sessionStorage.setItem('cool_secret',123)

//18
// const obj ={1:'a',2:'b',3:'c'}
// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));

//19

// const obj ={a:"one",b:"two",a:"repeat"}
// console.log(obj);
//key a will override here ,but its position never change.

//20
// for(let i=1;i<5;i++){
//     if(i===3)continue;
//     console.log(i);
// }

//21
// const foo=()=>console.log("first");
// const baa=()=>setTimeout(()=>console.log("second"));
// const zaa=()=>console.log("third");

// zaa();
// baa();
// foo();
//output:third,first,second

//22
// const person ={name:'Lydia'}
// function sayHi(age){
//     return `${this.name} is ${age}`
// }
// console.log(sayHi.call(person,21));
// console.log(sayHi.bind(person,21));

//output:lidiya is 21,return the function

//23
// function sayHi(){
//     return (()=>0)()
// }
// console.log(typeof sayHi());
//output:Number

//24
// function sayHi(){
//     return ()=>0
// }
// console.log(typeof sayHi());
//output:function  

//25
// console.log(typeof typeof 1);
//output:string

//26
// const arr=[1,2,3]
// arr[9]=11
// console.log(arr);
// output:[1,2,3,empty*3,11]

//27
// const arr =[1,2,3]
// arr[3]=arr
// console.log(arr);
//output:third position must be infinit and assign arry.

//28
//everything in javascript is primitive or object

//29
console.log(!!null);
console.log(!!"");
console.log(!!1);

//30
// console.log(setInterval(()=>console.log("hii"),1000));
// console.log(setInterval(()=>console.log("hii"),1000));
// console.log(setInterval(()=>console.log("hii"),1000));