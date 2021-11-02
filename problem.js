// print random number between min/max

function getRandomNumber(min, max) {
     return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(getRandomNumber(1,6));

// Sort Name Alphabatically

var name = ['mukut', 'dipu', 'akash', 'mimu', 'kamal','ridoy', 'aonjan']

console.log(name.sort());

// Sort Number accordingly

var number = [2,50,44,63,14,87,9,4,3]

console.log(number.sort(function(a,b){
     return a - b;
}));

//  leap year check function 

function isLeapYear(year) {
     if((year % 400 === 0) || (year % 4===0) && (year % 100 !== 0)){
          console.log(`${year} is leap year`);
     }else{
          console.log(`${year} isn't leap year`);
     }
}

isLeapYear(2013);

// checking number o vowel in a sentence

var vowel = ['a','e','i', 'o', 'u','A', 'E', 'I','O','U']

function getCount(str) {
     var vowelCount = 0;

     var characters = Array.from(str);
     characters.forEach(function(value){
          if (vowel.includes(value)) {
               vowelCount++;
          }
     })

     return vowelCount;
}

console.log(getCount('I am mukut'));

// finding duplicate number from an Array

var numbers = [1, 2, 3, 4, 5, 6, 7, 7, 2, 3]

var newNumber = numbers.filter(function(value,index,array){
     return array.indexOf(value) !== index;
})

console.log(newNumber);