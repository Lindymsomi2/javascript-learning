let name = "Kelly";
let age = 27;
let isSudying = true;

console.log(name, age, isSudying);
console.log(age + 1);
//else if
if (isSudying) {
  console.log(`${name} is studying`);
} else {
  console.log(`${name} is not studying`);
}
//function
function sum(a, b) {
  return a + b;
}

console.log(sum(23, 50));

//else if

function studentGrade(marks) {
  if (marks >= 90 && marks <= 100) {
    console.log("Grade A");
  } else if (marks >= 70 && marks < 90) {
    console.log("Grade B");
  } else if (marks >= 50 && marks < 70) {
    console.log("Grade C");
  } else if (marks >= 35 && marks < 50) {
    console.log("Grade D");
  } else {
    console.log("Fail");
  }
}

studentGrade(30);
