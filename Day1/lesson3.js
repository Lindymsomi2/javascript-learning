const marksArray = [25, 55, 66, 90, 95, 48, 77, 76, 99, 59, 88];
const marksArray2 = [45, 75, 86, 90, 95, 28, 76, 76, 99, 67, 88];

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
let sum2 = 0;

marksArray.forEach((mark) => {
  sum = sum + mark;
});
console.log(sum);
//second array
marksArray2.forEach((mark) => {
  sum2 = sum2 + mark;
});
console.log(sum2);

const average = sum / marksArray.length;
const average2 = sum2 / marksArray2.length;
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
let highest = 0;

for (let i = 0; i <= marksArray.length - 1; i++) {
  let firstElement = marksArray[i];

  if (firstElement > highest) {
    highest = firstElement;
  }
}
console.log(`highest is ${highest}`);
//hightest for 2nd array
let highest2 = 0;

for (let i = 0; i <= marksArray2.length - 1; i++) {
  let firstElement = marksArray2[i];

  if (firstElement > highest2) {
    highest2 = firstElement;
  }
}
console.log(`highest is ${highest2}`);

//lowest mark in the array
let lowest = highest;

for (let i = 0; i <= marksArray.length - 1; i++) {
  let firstElement = marksArray[i];

  if (firstElement < lowest) {
    lowest = firstElement;
  }
}
console.log(`lowest is ${lowest}`);

//lowest mark in the 2nd array
let lowest2 = highest2;

for (let i = 0; i <= marksArray2.length - 1; i++) {
  let firstElement = marksArray2[i];

  if (firstElement < lowest2) {
    lowest2 = firstElement;
  }
}
console.log(`lowest is ${lowest2}`);

//lesson 4, objects

const student = {
  name: "Melissa",
  sum: sum,
  marks: marksArray,
  average: average,
  highest: highest,
  lowest: lowest,
  subject: "Physical Science",
};

console.log(student.name);
console.log(student.average);
console.log(student.highest);
console.log(student.lowest);

function studentGrade(average) {
  if (average >= 90 && average <= 100) {
    const result = "Grade A";
    console.log(result);
    return result;
  } else if (average >= 70) {
    const result = "Grade B";
    console.log(result);
    return result;
  } else if (average >= 60) {
    const result = "Grade C";
    console.log(result);
    return result;
  } else if (average >= 50) {
    const result = "Grade D";
    console.log(result);
    return result;
  } else {
    const result = "Fail";
    console.log(result);
    return result;
  }
}

student.grade = studentGrade(student.average);

console.log(student);
student.name = "Larry";

student.grade = studentGrade(student.average);

function passed(average) {
  if (average >= 50) {
    const result = "Pass";
    return result;
  } else {
    const result = "Fail";
    return result;
  }
}

student.passed = passed(student.average);

console.log(student);

const student2 = {
  name: "Precious",
  sum: sum2,
  marks: marksArray2,
  average: average2,
  highest: highest2,
  lowest: lowest2,
  subject: "Mathematics",
};
student2.grade = studentGrade(student2.average);
student2.passed = passed(student2.average);
console.log(student2);

const reports = {
  student1: student,
  student2: student2,
};

console.log(reports);
