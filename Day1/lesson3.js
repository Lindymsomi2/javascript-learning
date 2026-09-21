const marksArray = [25, 55, 66, 90, 95, 48, 77, 76, 99, 59, 88];

console.log(marksArray);

//first number in array
console.log(marksArray[0]);
console.log(marksArray[marksArray.length - 1]);

console.log(marksArray.length);
const changeMark = marksArray.indexOf(66);
marksArray[changeMark] = 77;
console.log(marksArray);

marksArray.push(57); //added a mark to the end of the array(use unshift to add at the start)
console.log(marksArray);

marksArray.shift(); //removed a mark at the start of the array, can use pop() to remove at the end
console.log(marksArray);

let sum = 0;

marksArray.forEach((mark) => {
  sum = sum + mark;
});
console.log(sum);

const average = sum / marksArray.length;
console.log(average);
console.log(Math.round(average)); //rounded off

if (average >= 70) {
  console.log("The average is in the 70-higher range");
} else if (average >= 50) {
  console.log("The average is in the 50-69 range");
} else if (average >= 35) {
  console.log("The average is in the 35-49 range");
} else {
  console.log("The average is in the below 35 range");
}

//loops practice
//check every mark and report whether pass or fail
for (let i = 0; i <= marksArray.length - 1; i++) {
  if (marksArray[i] >= 50) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}
let count = 0;
let countB = 0;
let countC = 0;
let countD = 0;
let countF = 0;
for (let i = 0; i <= marksArray.length - 1; i++) {
  if (marksArray[i] >= 90) {
    count++;
  } else if (marksArray[i] >= 70) {
    countB++;
  } else if (marksArray[i] >= 60) {
    countC++;
  } else if (marksArray[i] >= 50) {
    countD++;
  } else {
    countF++;
  }
}
console.log(`There are ${count} A's`);
console.log(`There are ${countB} B's`);
console.log(`There are ${countC} C's`);
console.log(`There are ${countD} D's`);
console.log(`There are ${countF} F's`);

//highest mark in the array
let heighest = 0;

for (let i = 0; i <= marksArray.length - 1; i++) {
  let firstElement = marksArray[i];

  if (firstElement > heighest) {
    heighest = firstElement;
  }

}
console.log(`heighest is ${heighest}`);
