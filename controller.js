const url = require('url');
// const employees = require('./mockdata.json');
const fs = require("fs");



// const availableEndpoints = [
//   {
//     method: "GET",
//     getEmployees: "/employees"
//   },
//   {
//     method: "POST",
//     createEmployee: "/employee"
//   }
// ]

exports.getEmployees = function(req, res) {


// Read employees.json file
fs.readFile("mockdata.json", function(err, data) {
	
	// Check for errors
	if (err) throw err;

	// Converting to JSON
	const employees = JSON.parse(data);
	
	console.log(employees); // Print employees
});

}

exports.createEmployee = function(req, res) {
var employees = req.data
fs.readFile('mockdata.json', function(err,data){
  var employee = JSON.parse(data)
  employee.push(employees)
  fs.writeFile("mockdata.json", JSON.stringify(employee), function(err,res){
    if (err) throw err;
  })
  console.log("Done writing"); // Success
 
})

// // STEP 3: Writing to a file
// , err => {
	
// 	// Checking for errors



// });

}

exports.invalidUrl = function(req, res) {
  var response = [
    {
    "message": "oops! that is a wrong endpoint, here are the available endpoints "
    }
  ]
  res.statusCode = 404;
  res.setHeader('content-Type', 'Application/json');
  res.end(JSON.stringify(response))
}

// const fs = require("fs");

// // Read employees.json file
// fs.readFile("mockdata.json", function(err, data) {
	
// 	// Check for errors
// 	if (err) throw err;

// 	// Converting to JSON
// 	const employees = JSON.parse(data);
	
// 	console.log(employees); // Print employees
// });


// //posting
// // const fs = require("fs");

// // STEP 1: Reading JSON file
// const employees = require("./mockdata");

// // Defining new employee
// let employee = {
// firstName: "New",
// lastName: "employee",
// department: "software"
// };

// // STEP 2: Adding new data to employees object
// employees.push(employee);

// // STEP 3: Writing to a file
// fs.writeFile("mockdata.json", JSON.stringify(employees), err => {
	
// 	// Checking for errors
// 	if (err) throw err;

// 	console.log("Done writing"); // Success
// });
