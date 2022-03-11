/*let hour = 1;
if (hour <= 6 && hour < 12){
console.log('good moring');
else 
}
if (hour >=12 && hour < 18){
   console.log('Good aftnoon');
}
else {
    console.log('Good Evening');
}
let role = 'guest';

switch (role){
case 'guest':
    console.log('Guest User');
    break;
    case 'moderator':
    console.log('moderator');
    break;
default:
console.log('Unknown user');
}
for (let i = 0; i <= 5; i++){
    console.log('Helo World');
}
let i =0;
while

const person = {
    name: 'John', 
    Age: 30
};
for (let key in person)
console.log(person[key]);
//for-of
const colors = ['Red', 'green', 'blue'];

for (let color of colors)
console.log(color);

let i = 0;
while (i <= 10){
    //if (i=== 5) break;
    if (i % 2 === 0){
        i++;
        continue;
    }
    
    
    console.log(i);
    i++;
}
 
let number = max(2,3);
console.log(number);

function max (a,b){
     if (a > b) return a;
     return b;


 }
 
 let numbers =islandscope(300, 500);
 console.log(numbers);

 function islandscope (width, height){
     if (width > height) return true;
     return false;
 }

 const output =  fizzBuzz(30);
 console.log(output);
 function fizzBuzz(input) {
     if (typeof input !== 'number')
        return 'not a number';
    
        if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

        if (input % 3 === 0)
        return  'Fizz';

        if (input % 5 === 0)
        return "Buzz";

    return imput;
 }
checkSpeed(150);
 function checkSpeed(speed){
     const speedLimit = 70;
     const kmperPoint = 5;

     if (speed <speedLimit + kmperPoint){
        console.log('Ok');
        return
     }
        const points = Math.floor((speed - speedLimit) / kmperPoint);
        if (points >= 12)
        console.log('License Suspended');
        else 
        console.log('Ponts', points);
    }

    showNumber(5);

    function showNumber(limit){
        for (let i = 0; i <= limit; i++){
            if (i % 2 === 0) console.log(i, 'Eveen');
            else console.log(i, 'Odd');
        }
    }*/

const marks = [80, 80, 50];
    console.log(calculateGrade (marks));
    
function calculateGrade(marks) {
    let sum = 0;
    for (let mark of marks)
    sum += mark;
    let average = sum / marks.length;

    if (average < 60) return 'f';
    if (average < 70) return 'd';
    if (average < 80) return 'c';
    if (average < 90) return 'b';
    return 'a'
}   
