//2 Ino Ziff Zubb

function ziffZubb(start, end){
    for(index=start; index<=end; index++){
        if(index%3===0 && index%5!==0){
            console.log("Ziff")
        }
        else if(index%5===0 && index%3!==0){
            console.log("Zubb")
        }
        else if (index%3===0 && index%5===0){
            console.log("ZiffZubb")
        }
        else if(index%3!==0 || index%5!==0){
            console.log(index)
        }
    }
}
// ziffZubb(1,20);

//3 Greatest Common Divisor

function gcd(a, b){
    let greatestCommonDivisor =" ";
    for (let i = 1; i<=b && i<=a; i++){
        if(a%i===0 && b%i===0){
            greatestCommonDivisor=i;
        }
    }
    return greatestCommonDivisor
}
// console.log(gcd(900,100))

//4 Least Common Multiple



//5 Prime Number

function isPrime(num) {
    if (num === 1){
        return false;
    }
    else if(num !==1){
    for(var i = 2; i < num; i++){
      if(num % i === 0) 
      return false;
    }
    return true;
}}

// console.log(isPrime(5));
// console.log(isPrime(3));
// console.log(isPrime(21));


// 6. Capture Time
function whatMinute(){
console.log(Date.now()/60000)
}
// whatMinute();

function whatHour(){
console.log(Date.now()/3600000)
}
// whatHour();

function whatTime(){
    console.log(Date.now()/(31556952000))
    console.log( Date.now()/(31556952000/12))
    console.log(Date.now()/86400000)
    console.log(Date.now()/60000)
    console.log(Date.now()/1000)
}
// whatTime();

//Rocket
let yourAgeInMilliseconds = Date.now() - new Date("1995-05-14");
console.log(yourAgeInMilliseconds)
let myAgeInWeek = yourAgeInMilliseconds / 604800000
console.log(myAgeInWeek)

//7 Advanced Random Number

// for (let i = 0; i < 5; i ++){
//     console.log(Math.random(i))
// }

// Write a function named getRandomInt() that return a random integer 
// number from 0 (inclusive) to 10 (exclusive)
// function getRandomInt(){
//     return Math.floor(Math.random()*10)
// }
// console.log(getRandomInt());

// Put it in a loop that runs 100 times to check whether you see all of the numbers from 0 to 9?
// function getRandomInt(){
//     for(let i = 0; i < 100; i ++){
//         console.log(Math.floor(Math.random()*10))
//     }
// }
// getRandomInt();

//Improve the function so that it return a random integer number 
// between a start value (inclusive) and end value (inclusive).
// function getRandomInt(start, end){
//     for(let i = start; i <= end; i++ ){
//         return Math.floor(Math.random(i)*(end-start+1) + start)
//     }
// }
// console.log(getRandomInt(5, 8))

// Make another function called getRandomItem() that takes an array
//  as an argument and returns a random element in the array.
// let arr = ["apple", "orange", "kiwi"];
// function getRandomItem(array){
//     return arr[Math.floor(Math.random()*arr.length)]
// }
// console.log(getRandomItem(arr))

// Use the function getRandomInt() to get random position of item in the given array
// function getRandomInt(){
//     return Math.floor(Math.random()*arr.length)
// }
// console.log(getRandomInt());

// 8. Nested For Loop

// for (var i = 0; i < 10; i++) {
//     var s = "";
//     for (var j = 0; j < 10; j++) {
//       s = `${s} outer ${i} inner ${j}`;
//     }
//     console.log(s);
//   }

//Write a function that takes a number n as an argument and print out the following:
function nest1(n){
    for(let i = 1; i <=n ; i++){
        var s="";
        for(let j=i; j<=n; j++)
        s=`${s} ${j}`
        console.log(s)
    }
}
// nest1(3)

//Write a function that prints out an 8×8 grid. At each position of the grid, 
// there is either whitespace or a # character. The characters should form a chessboard.

//9 Iterate Over Arrays
let workingHours = [6, 6, 7, 7, 8, 8, 6, 7, 8, 7];
//Iterate over the array, and print out Peter earned $... today! each day.
for(let i = 0; i < workingHours.length; i++){
console.log(`Peter earn ${workingHours[i]*25} today!`)}
//Calculate how much Peter made in the last two weeks.

function totalIncome(){
let sumOfWorkingHours = 0;
for(let j = 0; j < workingHours.length; j++){
    sumOfWorkingHours+= workingHours[j]
}
    let income = sumOfWorkingHours*25
    return income
}
// console.log(totalIncome());

// Peter realizes that every day his working hour is a random integer number between 6 to 8 inclusively.
// And he wants to estimate how much he can make in one year (approximately 50 weeks, 
// 5 working days per week). Let use the function you made in Assignment 1 to create an array 
// that contains 250 numbers represent Peter's working hours in one year. 
// Use the array to calculate Peter's estimated yearly income. 
// Hint: find the way to add an item to the end of an array in the Docs of Assignment 4.

//250days x 6-8hour/day= total hours
//income = total hours x 25$/hour

// function totalYearlyIncome(){
//     let dailyHours=[];
//     for(let i = 0; i < 250; i++){
//         dailyHours.push((Math.floor(Math.random()*(8-6+1))+6))
//     }
//     let totalHours=0;
//     for(let j = 0; j<dailyHours.length; j++){
//         totalHours+= dailyHours[j]
//     }
//     let totalIncome=totalHours * 25
//     return totalIncome
// }
// console.log(totalYearlyIncome());

//Put your code in a function that takes in the number of weeks and return estimated revenue.
function totalYearlyIncome(weeks){
    let dailyHours=[];
    for(let i = 0; i < weeks*5; i++){
        dailyHours.push((Math.floor(Math.random()*(8-6+1))+6))
    }
    let totalHours=0;
    for(let j = 0; j<dailyHours.length; j++){
        totalHours+= dailyHours[j]
    }
    let totalIncome=totalHours * 25
    return totalIncome
}
// console.log(totalYearlyIncome(50));

//10 Truthy / Falsy
const one = 1;

if (one) {
  console.log("Is truthy");
}

const zero = 0;

if (zero) {
  console.log("Is truthy");
} else {
  console.log("Isn't truth");
}