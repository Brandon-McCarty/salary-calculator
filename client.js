$(readyNow);

// let fakeSalary = [50, 70, 100]
let employees = []; // store employee info


function readyNow() {
    $('#submitBtn').on('click', addEmployee);
    $(document).on('click', '.deleteBtn', deleteEmployee);
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

    if (employee.salary > 20000) {
        $('#newEmployee').append(`
        <tr> 
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td class="warning">$${employee.salary}</td>
            <td><button class="deleteBtn">Delete</button></td>
        </tr>
        `);
    } // end if

    else {
        $('#newEmployee').append(`
        <tr> 
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>$${employee.salary}</td>
            <td><button class="deleteBtn">Delete</button></td>
        </tr>
        `); // adding new table row
    }// end else

    employees.push(employee);

    $('.inputs').val(''); // clear inputs

    // SALARY CALCULATION
    $('#monthlySalary').empty();
    let total = 0;
    for (employee of employees) {
        total += Number(employee.salary);
        }
    $('#monthlySalary').append(total);
    }// end addEmployee

    // DELETE EMPLOYEE
function deleteEmployee() {
    $(this).closest("tr").remove();
}// end deleteEmployee