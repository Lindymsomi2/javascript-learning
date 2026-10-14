const expenses = {
  rent: 1200,
  electricity: 100,
  water: 50,
  gas: 80,
  internet: 60,
  groceries: 300,
  home: 50,
  health: 150,
  car: 100,
};


// Calculate the total expenses using forLopp
let total = 0
for (const key in expenses){
  total += expenses[key]
}

console.log(total)

// Calculate the total expenses using Object.values
const values = Object.values(expenses)

console.log(values.reduce((total, expense) => {
  return total += expense

},0))