const scores = {
    apple: 10,
    banana: 20,
    cherry: 30
};
//using dot notation to access the property called apple
console.log(scores.apple) //10

const key = "apple"
//scores[key] is bracket notation, access whatever property name saved/stored in key
console.log(scores[key]) //10



const keys = Object.keys(scores);
const values = Object.values(scores)

console.log(keys);
console.log(values);

for(let i = 0; i < keys.length; i++){
    console.log(keys[i], values[i])
}


const data = {
    apple: 10,
    banana: 20,
    cherry: 30,
    date: 40
};

const keysArray = ["banana", "date", "apple", "kiwi"];

function filterData(data, keysArray) {
    // Your implementation
    const keys = Object.keys(data)
    const values = Object.values(data)
    const results = []
    for(let i = 0; i < keys.length; i++){
        if(keysArray.includes(keys[i])){
            results.push(keys[i], values[i])

        }

    }
    return results
}

function sumValues(data, keysArray) {
    // Your implementation
    let total = 0
    const keys = Object.keys(data)
    const values = Object.values(data)
     for(let i = 0; i < keys.length; i++){
        if(keysArray.includes(keys[i])){
            total += values[i]

        }

    }
    return total

}

const filteredResult = filterData(data, keysArray);
const sumResult = sumValues(data, keysArray);

console.log("Filtered Data:", filteredResult);
console.log("Sum of Values:", sumResult);


