
function customPushPop(arr, operation, value) {
  // Your code here
  if(operation == "push"){
    arr[arr.length] = value
    return arr
  }
  else{
     value = (arr[arr.length -1])
     index = arr.indexOf(value)
     arr.splice(index,1)

     
     return value
    
  }
}

// Test cases
const myArray = [1, 2, 3];

console.log(customPushPop(myArray, 'push', 4));
console.log(customPushPop(myArray, 'pop'));
console.log(customPushPop(myArray, 'pop'));
console.log(customPushPop(myArray, 'push', 5));


const person = [
  {
    name: "John Doe",
    age: 30,
    address: "123 Main St, City",
    email: "john@example.com"
  },
  {
    name: "Alice Smith",
    age: 28,
    address: "456 Elm St, Town",
    email: "alice@example.com"
  },
  {
    name: "Bob Johnson",
    age: 35,
    address: "789 Oak St, Village",
    email: "bob@example.com"
  }
];


// Iterate through all the elements in console using templete literal.

person.forEach((element) =>{
console.log(`${element.name}
${element.age}
${element.address}
${element.email}`)
})