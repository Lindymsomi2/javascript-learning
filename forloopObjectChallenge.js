
function filterData(data, keysArray) {
  // Implement this function
  const values = Object.values(data)
  const keys = Object.keys(data)
  const results = []
  for(let i = 0; i < keys.length; i++){
    if(keysArray.includes(keys[i])){
      results.push(keys[i], values[i])

    }
  }
  return results
}

function sumValues(data, keysArray) {
  // Implement this function
  const values = Object.values(data)
  const keys = Object.keys(data)
  let total = 0
  for(let i = 0; i < keys.length; i++){
    if(keysArray.includes(keys[i])){
      total += values[i]

    }
  }
  return total
}


// Test Case
const data = {
  apple: 5,
  banana: 10,
  cherry: 15,
  date: 20,
};


const keysArray = ['banana', 'date', 'apple', 'kiwi'];

const filteredResult = filterData(data, keysArray);
const sumResult = sumValues(data, keysArray);

console.log("Filtered Data:", filteredResult);
console.log("Sum of Values:", sumResult);
