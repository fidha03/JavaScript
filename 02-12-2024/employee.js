const employees = [
  { id: 1, name: "Alice Johnson", position: "Manager", salary: 75000, performanceReview: "Excellent" },
  { id: 2, name: "Bob Smith", position: "Developer", salary: 50000, performanceReview: "Good" },
  { id: 3, name: "Charlie Davis", position: "Designer", salary: 45000, performanceReview: "Average" },
  { id: 4, name: "Diana Martin", position: "Manager", salary: 80000, performanceReview: "Excellent" },
  { id: 5, name: "Evan Wright", position: "Intern", salary: 20000, performanceReview: "Good" },
  { id: 6, name: "Fiona Clark", position: "Developer", salary: 55000, performanceReview: "Excellent" },
  { id: 7, name: "George King", position: "Developer", salary: 48000, performanceReview: "Average" },
  { id: 8, name: "Hannah Brown", position: "Designer", salary: 47000, performanceReview: "Good" },
  { id: 9, name: "Ian Scott", position: "Developer", salary: 60000, performanceReview: "Excellent" },
  { id: 10, name: "Jane Wilson", position: "Manager", salary: 90000, performanceReview: "Excellent" },
];

// 1.Filter employees who have a performanceReview of "Excellent" and a salary above $50,000.
filteredEmployees = employees.filter((emp) => {
  return emp.performanceReview == "Excellent" && emp.salary > 50000
})

console.log("1. Excellent employees with salary above 50000");
console.log(filteredEmployees);


// 2.From the filtered list, use map to extract and transform their names to be in uppercase and append "!!!" to each name.
mappedEmployees = filteredEmployees.map( (emp) => emp.name.toUpperCase().concat("!!!"))

console.log("\n2. Filtered Employees names in uppercase and appended !!!");
console.log(mappedEmployees);


//3.Use find to get the first employee in the dataset with the position "Manager" and a performanceReview of "Excellent".
// Calculate Total Salaries
findEmployee = employees.find( (emp) => emp.position == "Manager" && emp.performanceReview == "Excellent")
console.log("\n3. First Employee with Manager position and Excellent performace");
console.log(findEmployee);

totalSalary = employees.reduce( (total, current) => total + current.salary, 0)
console.log(`\nTotal Salary of employee: ${totalSalary}`);


// 4.Use reduce to calculate the total salary of all employees with the position "Developer".
//  Combine Transformation and Summary

filteredDeveloper = employees.filter( (emp) => emp.position === "Developer")
totalDeveloperSalary = filteredDeveloper.reduce( (total, current) => total + current.salary, 0)
console.log(`\n4. Total Salary of Developers:${totalDeveloperSalary}`);


// 5.Filter employees with salaries greater than $45,000.
salaryGreaterThan45 = employees.filter( (emp) => emp.salary > 45000)
console.log("\n5. Employees with salary greater than 45000");
console.log(salaryGreaterThan45);


// 6.Map to create a summary object for each employee: { name, position, salary }.

summaryObj = employees.map( (emp) => {
  return (`Name : ${emp.name}, Position : ${emp.position}, Salary : ${emp.salary}`);
})
console.log("\n6. Summary Object for each employee");
console.log(summaryObj);



// 7.Write a function that takes an employee's name and returns it in reverse order. 
// Apply this function to all employee names using map
function rev(name){
  var len = name.length
  var reverse = ""
  for(let i = len-1 ; i >= 0; i--)
    reverse += name[i];
  return reverse
}

reversedNames = employees.map( (emp) => rev(emp.name))
console.log("\n7. Reversed Employee Names:");
console.log(reversedNames);
