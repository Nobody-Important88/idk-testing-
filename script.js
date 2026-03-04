const employees = [
  {
    id: 101,
    name: "Sarah Johnson",
    department: "Engineering",
    position: "Senior Developer",
    primarySkill: "JavaScript",
    salary: 95000,
    yearsofExperience: 6,
    isRemote: true,
    email: "sarah.johnson@company.com"
  },
  {
    id: 102,
    name: "Michael Chen",
    department: "Engineering",
    position: "Junior Developer",
    primarySkill: "Python",
    salary: 65000,
    yearsofExperience: 2,
    isRemote: false,
    email: "michael.chen@company.com"
  },
  {
    id: 103,
    name: "Emily Rodriguez",
    department: "Marketing",
    position: "Marketing Manager",
    primarySkill: "SEO",
    salary: 78000,
    yearsofExperience: 5,
    isRemote: true,
    email: "emily.rodriguez@company.com"
  },
  {
    id: 104,
    name: "David Kim",
    department: "Engineering",
    position: "DevOps Engineer",
    primarySkill: "Docker",
    salary: 92000,
    yearsofExperience: 7,
    isRemote: true,
    email: "david.kim@company.com"
  },
  {
    id: 105,
    name: "Lisa Anderson",
    department: "Sales",
    position: "Sales Representative",
    primarySkill: "Negotiation",
    salary: 72000,
    yearsofExperience: 4,
    isRemote: false,
    email: "lisa.anderson@company.com"
  },
  {
    id: 106,
    name: "James Wilson",
    department: "Engineering",
    position: "Senior Developer",
    primarySkill: "Java",
    salary: 98000,
    yearsofExperience: 8,
    isRemote: true,
    email: "james.wilson@company.com"
  },
  {
    id: 107,
    name: "Rachel Green",
    department: "Engineering",
    position: "Frontend Developer",
    primarySkill: "JavaScript",
    salary: 88000,
    yearsofExperience: 5,
    isRemote: true,
    email: "rachel.green@company.com"
  }
];


// Helper function to display employees
function displayEmployees(list) {
  const grid = document.getElementById("employeesGrid");
  grid.innerHTML = "";

  if (list.length === 0) {
    grid.innerHTML = `<div class="no-results">No results found</div>`;
    return;
  }

  list.forEach(emp => {
    grid.innerHTML += `
      <div class="employee-card">
        <h3>${emp.name}</h3>
        <p><strong>Department:</strong> ${emp.department}</p>
        <p><strong>Position:</strong> ${emp.position}</p>
        <p><strong>Salary:</strong> $${emp.salary}</p>
        <p><strong>Experience:</strong> ${emp.yearsofExperience} years</p>
        <p><strong>Email:</strong> ${emp.email}</p>
        <span class="badge">${emp.isRemote ? "Remote" : "On-Site"}</span>
      </div>
    `;
  });
}


// Q1: Create an array of all department names from the employees array.
// Then check if "Marketing" exists in that array.
function question1() {
  const departments = employees.map(emp => emp.department);
  const inclusion = departments.includes("Marketing");

  document.getElementById("filterInfo").innerHTML =
    `<strong>Q1 Result:</strong> Marketing exists? ${inclusion}`;
}


// Q2: Create an array of all employee names.
// Then find the index position of "David Kim" in that array.
function question2() {
  const names = employees.map(emp => emp.name);
  const index = names.indexOf("David Kim");

  document.getElementById("filterInfo").innerHTML =
    `<strong>Q2 Result:</strong> David Kim index is ${index}`;
}


// Q3: Find the first employee who works in the "Marketing" department.
function question3() {
  const result = employees.find(emp => emp.department === "Marketing");

  document.getElementById("filterInfo").innerHTML =
    `<strong>Q3 Result:</strong> First Marketing Employee`;

  displayEmployees([result]);
}


// Q4: Find the index of the employee with id 104 in the employees array.
function question4() {
  const index = employees.findIndex(emp => emp.id === 104);

  document.getElementById("filterInfo").innerHTML =
    `<strong>Q4 Result:</strong> Employee with ID 104 is at index ${index}`;
}


// Q5: Check if at least one employee has more than 7 years of experience.
function question5() {
  const result = employees.some(emp => emp.yearsofExperience > 7);

  document.getElementById("filterInfo").innerHTML =
    `<strong>Q5 Result:</strong> Any employee > 7 years experience? ${result}`;
}


// Q6: First, filter all employees who work in the Engineering department.
// Then check if every one of those Engineering employees is a remote worker.
function question6() {
  const engineering = employees.filter(emp => emp.department === "Engineering");
  const allRemote = engineering.every(emp => emp.isRemote === true);

  document.getElementById("filterInfo").innerHTML =
    `<strong>Q6 Result:</strong> All Engineering employees remote? ${allRemote}`;
}


// Q7: Get all employees who are remote workers AND earn more than $80,000.
function question7() {
  const result = employees.filter(emp => emp.isRemote === true && emp.salary > 80000);

  document.getElementById("filterInfo").innerHTML =
    `<strong>Q7 Result:</strong> Remote employees earning > $80k`;

  displayEmployees(result);
}


// Show all employees
function showAllEmployees() {
  document.getElementById("filterInfo").innerHTML =
    `<strong>All Employees</strong>`;
  displayEmployees(employees);
}


// Q8: Create a new array that contains objects with only the name and email
// of each employee. Format: { name: "...", email: "..." }
console.log(" Q8  ")

const result8 = employees.map(emp => ({name:emp.name, email:emp.email}))
const result8d = result8.map(emp =>`user: ${emp.name} ${emp.email}`)
console.log(result8d)




// Q9: Create an array of all unique departments (no duplicates).
// Then join them into a single comma-separated string.
console.log(" Q9  ")

const result9 = employees.map(emp => emp.department)
const result9d = result9.filter((dept, index) => result9.indexOf(dept)===index);
const result9e = result9d.join(",")
console.log(result9e)
// Q10: Combine the employees array with the following new hires array:


const newHires = [
  {
    id: 108,
    name: "Anna Taylor",
    department: "HR",
    position: "HR Specialist",
    primarySkill: "Recruitment",
    salary: 68000,
    yearsofExperience: 3,
    isRemote: false,
    email: "anna.taylor@company.com"
  },
  {
    id: 109,
    name: "Tom Brooks",
    department: "Engineering",
    position: "Backend Developer",
    primarySkill: "Node.js",
    salary: 85000,
    yearsofExperience: 4,
    isRemote: true,
    email: "tom.brooks@company.com"
  }
];

console.log(" Q10 ")

const result10 = employees.concat(newHires)
console.log(result10)

// Q11: Get all JavaScript developers' names as a comma-separated string.
// Steps: filter employees by primarySkill, map to names, join into string
console.log(" Q11 ")
const newResult = employees.filter(emp => emp.primarySkill ==="Javascript")
const newResultd = employees.map(emp =>emp.name)

const newResulte = newResultd.join(',')
console.log(newResulte)



// Q12: Find if every remote employee has at least 4 years of experience.
// Steps: filter remote employees, then use every() to check experience
console.log(" Q12 ")
const newResult2 = employees.map(emp => emp.isRemote)
const newResult2d = employees.map(emp =>emp.yearsofExperience)

const newResult2e = newResult2d.filter(emp => emp.isRemote === true)
const newResult2f = newResult2e.every(emp => emp.yearsofExperience >4)
console.log(newResult2f)
// Q13: Create an array of all unique primary skills (no duplicates).
// Steps: map to get all primarySkill values, filter to remove duplicates
console.log(" Q13  ")

const newResult3 = employees.map(emp => emp.primarySkill)
const newResult3d = newResult3.filter((dept, index) => newResult3.indexOf(dept)===index);
console.log(newResult3d)

// Q14: Calculate the total salary of all Engineering department employees using a for loop.
// Steps: filter Engineering employees, use a for loop to sum their salaries
console.log(" Q14  ")

const newResult4 = employees.map(emp => emp.department)
const newResult4e = employees.map(emp => emp.salary)
const newResult4d = newResult4.filter(emp=> emp.department ==="engineering");
let total = 0
for(let i=0; i >newResult4e.length; i++){
  total += newResult4e[i]
}
console.log(newResult4e)



function showAllEmployees(){

    const grid = document.getElementById('employeesGrid');

    let html = '';

    for(let i=0; i<employees.length; i++){
        const employee = employees[i];

        html +=`
            <div class="employee-card">
                <div class="employees-id">${employee.id}</div>
                <div class="employees-name">${employee.name}</div>
                <div class="employees-department">${employee.department}</div>
                <div class="employees-position">${employee.position}</div>
                <div class="employees-primarySkill">${employee.primarySkill}</div>
                <div class="employees-salary">${employee.salary}</div>
                <div class="employees-yearsofExperience">${employee.yearsofExperience}</div>
                <div class="employees-email">${employee.email}</div>
            </div>
        `;
    }
    grid.innerHTML = html;
}

showAllEmployees();
