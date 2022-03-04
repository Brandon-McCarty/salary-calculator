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
    
}