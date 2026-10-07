// Perform all the task and print the output according to the test case given below.
const employees = [
  { id: 1, name: 'Alice', age: 28, salary: 50000 },
  { id: 2, name: 'Bob', age: 35, salary: 60000 },
  { id: 3, name: 'Charlie', age: 30, salary: 55000 },
];
const {id, name, age, salary} = employees
// Function 1: getTotalSalary
function getTotalSalary(employees){

  return employees.reduce((sum,item) => {
    const {salary} = item
    return sum += salary
  }, 0)
  
}
// Function 2: getEmployeeNames
function getEmployeeNames(employees){
    return employees.map((item) => {
        const {name} = item
        return name
    })
}

// Function 3: getEmployeeWithHighestSalary
function getEmployeeWithHighestSalary(employees){

    return employees.reduce((max, item) => {
        const {id, name, age, salary} = item
        return salary > max.salary ? item : max})

}

// Function 4: getEmployeeAgesAndNames
function getEmployeeAgesAndNames(employees){
    return employees.map((item) => {
        const {name, age} = item
        return ({name, age})
    })

}

// Output
console.log(getTotalSalary(employees))
console.log(getEmployeeNames(employees))
console.log(getEmployeeWithHighestSalary(employees))
console.log(getEmployeeAgesAndNames(employees))