//name : Lindy
// purpose: Review and practice javascript
// console, variables, simple if/else statement
let name = "Kelly";
let age = 30;
let isStudying = true;

console.log(`name: ${name} age: ${age}  Studying: ${isStudying}`);
console.log(`Age next year: ${age + 1}`);

if (isStudying) {
  console.log(`${name} is currently studying`);
} else {
  console.log(`${name} is not studying`);
}

// functions
function timeStudied(min, days) {
  return min * days;
}

console.log(timeStudied(3, 6));

function minutesToHours(minutes) {
  return minutes / 60;
}

function studySummary(minutes, days) {
  minutes = timeStudied(minutes, days);
  hours = minutesToHours(minutes);

  return `This week you have studied for ${minutes} minutes which is ${hours} hours`;
}

console.log(studySummary(456, 5));
