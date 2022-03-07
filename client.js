$(readyNow);

let employees = []; // store employee info
let totalSalary = 0;


function readyNow() {
    $('#submitBtn').on('click', addEmployee);
    $(document).on('click', '.deleteBtn', deleteEmployee);
}// end readyNow

function addEmployee() {
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
            <td>$${employee.salary}</td>
            <td><button class="deleteBtn">Delete</button></td>
        </tr>
        `);

    employees.push(employee);

    $('.inputs').val(''); // clear inputs

    // SALARY CALCULATION
    $('#monthlySalary').empty();
    totalSalary += Number(employee.salary / 12);
    $('#monthlySalary').append(totalSalary);

    if (totalSalary > 20000) {
    $('#monthlySalary').addClass("warning");
        }// end if
    }// end addEmployee

    // DELETE EMPLOYEE
function deleteEmployee() {
    let salary = $(this).closest('tr');
    $(this).closest('tr').remove();
    totalSalary -= Number(salary.find('td:eq(4)').text().substring(1) / 12);
    $('#monthlySalary').empty();
    $('#monthlySalary').append(totalSalary);

    if (totalSalary < 20001) {
        $('#monthlySalary').removeClass("warning");
    }// end if
}// end deleteEmployee





