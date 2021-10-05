// Area of a circle

function areaOfACircle(){
console.log("Area of a circle");

var pi=3.14;
console.log(typeof pi);

var radius = 5;
console.log(typeof radius);

var area= pi*radius**2

console.log("The area of a circle given the radius" + " " + radius + "(m) is" + " " + area + "(m2)")

var radius = 7;

console.log(`The area of a circle given the radius ${radius}(m) is ${area}(m2)`)
}
// areaOfACircle();

// Operators Expressions
function opeEx(){
10 + 14 === 24;
console.log(10+14 === 24)

"10" + "24" === "1024";
console.log("10" + "24" === "1024")

var a = "Hello" + " " + 2021 === "Hello 2021";
console.log(a) 

var b = 1 + 2 * 3 === 7;
console.log(b)

var c = (1 + 3) ** 2 === 16;
console.log(c)

var d = 1/0 === Infinity;
console.log(d);

var e = 6 % 2 === 0;
console.log(e)

var f = 5.5 % 2 === 1.5;
console.log(f);

var g = Number("123") === 123
console.log(g);

var a=typeof(1 + "") === "string";
console.log(a)
}
// opeEx();
// Comparison Expressions 
function compaEx(){
var a = 5 == "5"; 
console.log(a===true);

var b = 5 === "5";
console.log(b===false)

var a = 8 != 8.0
console.log(a === false)

var a = 8 !== 8.0
console.log(a===false)

var a = "true" === true
console.log(a === false)

var a = 4 <= 4.0
console.log(a===true)

var a = 7 >= 7
console.log(a===true)
}
// compaEx()
// Logical Expressions
    function logicEx(){
var a = true && true === true
console.log(a)

var a = true && false === false
console.log(a)

var a = true || true === true
console.log(a)

var a = false || true === true
console.log(a)

var a = !true === false
console.log(a)

var a = !false === true
console.log(a)

var a = false && (true || true)
console.log(a===false)

var a = false && true || true === true
console.log(a)
}
// logicEx();

// Conditional
function whatIsX(){
var x = -4;
if (x > 0){
console.log("x is a positive number")}
else if(x < 0){
console.log("x is a negative number")}
else{
console.log("x is zero")}
}
// whatIsX();
function compareNumber(){
var a = 60;
var b = 500;
var c = 40;

if (a < b && b < c){
console.log(`${a} is the smallest number, and ${c} is the biggest number between a = ${a},b = ${b}, and c = ${c}`);
}else if (a < c && c < b){
    console.log(`${a} is the smallest number, and ${b} is the biggest number between a = ${a},b = ${b}, and c = ${c}`);
}else if(b < a && a < c){
    console.log(`${b} is the smallest number, and ${c} is the biggest number between a = ${a},b = ${b}, and c = ${c}`);
} else if (b < c && c < a){
    console.log(`${b} is the smallest number, and ${a} is the biggest number between a = ${a},b = ${b}, and c = ${c}`);
} else if(c < a && a < b ){
    console.log(`${c} is the smallest number, and ${b} is the biggest number between a = ${a},b = ${b}, and c = ${c}`);
} else if(c < b && b < a){
    console.log(`${c} is the smallest number, and ${a} is the biggest number between a = ${a},b = ${b}, and c = ${c}`);
}
}
// compareNumber();

// 5. Loops

function listOfNumber(){
var a = 7;
var b = 4; 
if (a<b){
for (var i = a; i <= b; i ++){
    console.log(i)
}
}else {
    for(var i = a; i >=b; i--){
        console.log(i)
    }
}
}

// listOfNumber();
function sumOfTwoNumber(){
var x = 400;
var y = 600;
var sum = 0;

for (var i = x; i <= y ; i ++){
    sum = sum + i;
}  
console.log(`Sum of numbers from 1 to 800 is: ${sum}`)
}

// sumOfTwoNumber();

function sumOfDigit(){
var a = 7676;
var sum = 0;

while (a) {
    sum = sum + a % 10 
    a = Math.floor(a/10)
}
console.log(sum)
}
// sumOfDigit();

// Functions 

function problem1(){
    console.log("wow, it worked!")
}
// problem1();

function problem2(){
    return "my favorite movie is Squidgame"
}
// console.log(problem2());

function problem3(yourname){
    return `my name is ${yourname} and I am 26 years old`
}
// console.log(problem3("Binh"))

//Problem4
function conditional(a, b , c){
if (a < b && b < c){
console.log(`${a} is the smallest number, and ${c} is the biggest number between a = ${a},b = ${b}, and c = ${c}`);
}else if (a < c && c < b){
    console.log(`${a} is the smallest number, and ${b} is the biggest number between a = ${a},b = ${b}, and c = ${c}`);
}else if(b < a && a < c){
    console.log(`${b} is the smallest number, and ${c} is the biggest number between a = ${a},b = ${b}, and c = ${c}`);
} else if (b < c && c < a){
    console.log(`${b} is the smallest number, and ${a} is the biggest number between a = ${a},b = ${b}, and c = ${c}`);
} else if(c < a && a < b ){
    console.log(`${c} is the smallest number, and ${b} is the biggest number between a = ${a},b = ${b}, and c = ${c}`);
} else if(c < b && b < a){
    console.log(`${c} is the smallest number, and ${a} is the biggest number between a = ${a},b = ${b}, and c = ${c}`);
}
}
conditional(700, 400, 50)

//Problem5
function seriesOfNumber(a,b){
if (a<b){
for (var i = a; i <= b; i ++){
    console.log(i)
}
}else {
    for(var i = a; i >=b; i--){
        console.log(i)
    }
}
}
// seriesOfNumber(8, 5);

//Problem6

function sumOfTwoNumber(x, y){
    var sum = 0;
    for (var i = x; i <= y ; i ++){
        sum = sum + i;
    }  
    console.log(`Sum of numbers from 1 to 800 is: ${sum}`)
    }
    
    // sumOfTwoNumber(400, 600);

function sumOfDigit(a){
        var sum = 0;
        while (a) {
            sum = sum + a % 10 
            a = Math.floor(a/10)
        }
        console.log(sum)
    }
// sumOfDigit(7676);

//Problem7

function getLeapYears(start, end){
    for(var i = start; i <= end; i ++){
        if(i % 4 === 0 && i % 100 !==0 || i % 400 === 0){
            console.log(i)
        }
    }
}
// getLeapYears(1899, 2001);

// 7. Swapping values

var a = 111;
var b = 999;
var temp = "";
//Before swapping
console.log(a)
console.log(b)

var temp = a;
var a = b
var b = temp
//After swapping
console.log(a)
console.log(b)

//8 Random Number
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.floor(Math.random()*3));
console.log(Math.floor(Math.random()*3));
console.log(Math.floor(Math.random()*3));
console.log(Math.floor(Math.random()*3));
console.log(Math.ceil(1.93));
console.log(Math.round(1.93))
console.log(Math.round(1.49));

//9. Magic 8-ball

function play(){
    const randomNumber = Math.round(Math.random());
    // console.log(randomNumber)
    if (randomNumber === 0){
        console.log("yes")}
        else{
            console.log("no")
        }
    }
// play();

