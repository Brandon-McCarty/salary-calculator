$(readyNow);

let employee = {
    firstName: 'Bob',
    lastName: 'Smith',
    id: 2354,
    title: 'President',
    salary: '$150000'
};

console.log(employee);


function readyNow(){
    $('#submitBtn').on('click', addEmployee)
}

function addEmployee() {
    console.log('CLICK');
    let employee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        id: $('#idInput').val(),
        title: $('#titleInput').val(),
        salary: $('#salaryInput').val()
    };
    $('#newEmployee').append(`<tr> 
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>${employee.salary}</td>
        <td><button>Delete</button></td>
    </tr>
    `)
    
}