/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];
PrintStudentswithMap()
PrintStudentsbyForEach()
addData()
removeFailedStudent()
concatenateArray()
function PrintStudentswithMap() {
  arr.map((item)=>{ 
    if(item.marks > 50){
        console.log(item.name)
    }
})
}

function PrintStudentsbyForEach() {
   arr.forEach(function printDev(e) {
        if(e.marks > 50){
            console.log(e.name)
  }
})
}

function addData() {
  arr.push({id:4,name:"susan",age:"20",marks:"45"})
  console.log(arr)
}

function removeFailedStudent() {
  arr.forEach(function printDev(e) {
        if(e.marks < 50){
            arr.pop()
  }
})
console.log(arr)
}

function concatenateArray() {
  let arr1 = [
  { id: 5, name: "Jet", age: "19", marks:"55" },
  { id: 6, name: "Jay", age: "24", marks:"69" },
  { id: 7, name: "Pope", age: "17", marks:"39" },
];
const result = arr.concat(arr1)
console.log(result)
}
