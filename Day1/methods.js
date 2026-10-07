const student = [
  {
    name: "Melissa",
    marks: [78, 85, 92, 67],
  },
  {
    name: "Daisy",
    marks: [55, 62, 48, 71],
  },
  {
    name: "Michael",
    marks: [91, 88, 95, 84],
  },
];

//using map to get average of each student

const newStudents = student.map((item) => {
  const { marks } = item;
  const total = marks.reduce((acc, item) => {
    //used reduce to calculate the total for marks array
    return (acc += item);
  }, 0);
  const average = total / marks.length;
  return { ...item, Average: average };
});
console.log(newStudents);
//using filter to create new array of students with an average above 70
const above70 = newStudents.filter((item) => {
  return item.Average > 70;
});

console.log(above70);

console.log(student.find((item) => item.name == "Michael"));

console.log(student.findIndex((item) => item.name == "Michael"));

console.log(
  student.map((item) => {
    const { marks } = item;
    return marks.includes(92);
  })
);




//default sorting of marks(lexicographic) sorts original array
console.log(
  student.map((item) => {
    const { marks } = item; //deconstructing
    return marks.sort();
  })
);

console.log(
  student.map((item) => {
    const { marks } = item;
    return marks.sort((a, b) => a - b);
  })
);

//sorting in reverse order
console.log(
  student.map((item) => {
    const { marks } = item;
    return marks.sort((a, b) => b - a);
  })
);

//sorting by average in ascending order
console.log(newStudents.sort((a, b) => a.Average - b.Average));

//sorting by average in decending order
console.log(newStudents.sort((a, b) => b.Average - a.Average));

//sorting by name in ascending order(lexicographic)
console.log(newStudents.sort((a, b) => a.name.localeCompare(b.name)));

//sorting by name in decending order
console.log(newStudents.sort((a, b) => b.name.localeCompare(a.name)));

console.log(student.reverse()) //changes the original array instead of creating a new array

console.log(student) // new array order