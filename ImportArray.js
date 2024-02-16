import { employees } from "./ArrayObj.js";

// Finding the names(array of names) of employees of Hyderabad
console.log(" names(array of names) of employees of Hyderabad")
let hydEmpArray = employees.filter(empObj => empObj.address.city==="hyderabad")
console.log(hydEmpArray)
let empName = hydEmpArray.map(emp => emp.name)
console.log(empName)

// Finding the name and address of employees whose age between 40 and 50
console.log("name and address of employees whose age between 40 and 50")
let empAgeBtn40and50 = employees.filter(emp => emp.age>40 && emp.age<50);
console.log(empAgeBtn40and50)
let empNameAndAddrs = empAgeBtn40and50.map(emp => ({
    name : emp.name,
    address : emp.address
}))
console.log(empNameAndAddrs)

//Finding the employees who are not from Hyderabad
let empNotHyd = employees.filter(emp => emp.address.city != "hyderabad")
console.log("Employees who are not from hyderabad");
console.log(empNotHyd)

// Find the names (array of names) of employees whose skill is "reactjs"

console.log("names (array of names) of employees whose skill is reactjs")
let employeesWithReactJS = employees.filter(emp => emp.skills.includes("reactjs"))
let names = employeesWithReactJS.map(emp => emp.name)
console.log(names)