$(readyNow);

let fake = {
    firstName: 'Bob',
    lastName: 'Smith',
    id: 2354,
    title: 'President',
    salary: 150000
};

// let fakeSalary = [50, 70, 100]
let employees = []; // store employee info


function readyNow() {
    $('#submitBtn').on('click', addEmployee)
    // $('#submitBtn').on('click', monthlySalary)

}// end readyNow

function addEmployee() {
    console.log('CLICK');
    let employee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        salary: $('#salaryInput').val()
    }; // creating employee object to gather data

    $('#newEmployee').append(`
    <tr> 
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>${employee.salary}</td>
        <td><button>Delete</button></td>
    </tr>
    `); // adding new table row
    employees.push(employee);

    $('.inputs').val(''); // clear inputs


    // SALARY CALCULATION
    // salaryTotal.push(employee.salary)

    // for (employee of employees){
    //     let total = 0;
    //     $('#monthlySalary').empty();
    //     $('#monthlySalary').append(total);
    // }
    
    $('#monthlySalary').empty();
    let total = 0;
    for (employee of employees) {
        total += Number(employee.salary);
    }
    $('#monthlySalary').append(total);


}// end addEmployee

// function monthlySalary() {
//     $('#monthlySalary').empty();
//     let total = 0;
//     for (employee of employees){
//         total += Number(employee.salary);
//     }
//         $('#monthlySalary').append(total);
// }// end monthlySalary

// console.log(salaryTotal);