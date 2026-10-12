const students = [
    {
        name: "Melissa",
        marks: [78, 85, 92, 67]
    },
    {
        name: "Daisy",
        marks: [55, 62, 48, 71]
    },
    {
        name: "Michael",
        marks: [91, 88, 95, 84]
    }
];

//filter array to be only for melissa
const copiedMellisa = students.filter((item) => {
    return item.name == "Melissa"
    
})




 //create a shallow copy of mellsa's marks
const newCopy = [...students[0].marks, 100]
console.log(newCopy)

const melissaTotal = newCopy.reduce((total,item) => {
    return total = total +  item
}, 0)

const melissaAverage = melissaTotal / newCopy.length

console.log(melissaTotal)
console.log(melissaAverage)



const MelissaReport = [{
    name: students[0].name,
    marks: [...newCopy],
    average: melissaAverage
}]
console.log(MelissaReport)

const sortedArray = [...MelissaReport[0].marks].sort((a,b) =>{


    
    return a-b
})


console.log(MelissaReport[0].marks);
console.log(sortedArray);


const copiedReport = { ...MelissaReport[0], marks: [...MelissaReport[0].marks] };

copiedReport.name = "Melissa Updated";
copiedReport.marks.push(95);

console.log(MelissaReport[0]);
console.log(copiedReport);

