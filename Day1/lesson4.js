const marks = [67, 98, 83, 55];
const marks2 = [88, 56, 77, 87];

function sum(arr) {
  let add = 0;
  arr.forEach((element) => {
    add = add + element;
  });
  return add;
}
function average(arr, total) {
  let measure = total / arr.length;

  return measure;
}

function highestMark(arr) {
  let highest = 0;
  for (let i = 0; i < arr.length; i++) {
    let firstElement = arr[i];
    if (firstElement >= highest) {
      highest = firstElement;
    }
  }

  return highest;
}

function lowestMark(arr) {
  let lowest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let firstElement = arr[i];

    if (firstElement < lowest) {
      lowest = firstElement;
    }
  }
  return lowest;
}

function grading(average) {
  let result = "";
  if (average >= 90 && average <= 100) {
    result = "A";
  } else if (average >= 70) {
    result = "B";
  } else if (average >= 60) {
    result = "C";
  } else if (average >= 50) {
    result = "D";
  } else {
    result = "F";
  }
  return result;
}
function passed(average) {
  if (average >= 50) {
    return true;
  } else return false;
}

const total = sum(marks);

const avg = average(marks, total);
const topMark = highestMark(marks);
const lowMark = lowestMark(marks);
const grade = grading(avg);
const pass = passed(avg);

//second marks array
const total2 = sum(marks2);

const avg2 = average(marks2, total2);
const topMark2 = highestMark(marks2);
const lowMark2 = lowestMark(marks2);
const grade2 = grading(avg2);
const pass2 = passed(avg2);

const studentReport = {
  name: "Shaun",
  marks: marks,
  sum: total,
  average: avg,
  highest: topMark,
  lowest: lowMark,
  grade: grade,
  passed: pass,
};

const studentReport2 = {
  name: "Michael",
  marks: marks2,
  sum: total2,
  average: avg2,
  highest: topMark2,
  lowest: lowMark2,
  grade: grade2,
  passed: pass2,
};

console.log(studentReport.name);
console.log(
  `The average:${studentReport.average} The highest mark: ${studentReport.highest} The lowest mark: ${studentReport.lowest}`
);
//second student object
console.log(studentReport2.name);
console.log(
  `The average:${studentReport2.average} The highest mark: ${studentReport2.highest} The lowest mark: ${studentReport2.lowest}`
);

const reports = {
  student1: studentReport,
  student2: studentReport2,
};
console.log(reports);