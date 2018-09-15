const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];


const print = function () {
  $('#content').empty();
  $('#results').empty();
  $('#content').html('<p class="directory">The Minimalists Directory.</p>');
  employeeList.forEach(e => render("Name: " + e.name, "Office Number: " + e.officeNum, "Phone Number: " + e.phoneNum));
}

const verify = function () {
  $('#content').html('<p class="directory">The Minimalists Directory.</p> <input class="verify-input" placeholder="Enter an Employee Name"></input> <button id="verify-btn"><i class="far fa-search"></i></button>');
  $('#verify-btn').on('click', verifyFunc);
  $('#results').empty();
}
const verifyFunc = function () {
  $('#results').empty();
  let verifyEmployee = $('.verify-input').val().toLowerCase().trim();
  const verifyArr = employeeList.filter(e => e.name.toLowerCase() === verifyEmployee);
  switch (verifyArr.length) {
    case 0:
      render('Employee Not Found');
      break;
    default:
      render('Employee Found')
      break;
  }
}

const lookup = function () {
  $('#content').html('<p class="directory">The Minimalists Directory.</p> <input class="lookup-input" placeholder="Enter an Employee Name"></input> <button id="lookup-btn"><i class="far fa-search"></i></button>');
  $('#lookup-btn').on('click', lookupFunc);
  $('#results').empty();
}
function lookupFunc() {
  $('#results').empty();
  const lookupEmployee = $('.lookup-input').val().toLowerCase().trim();
  const lookupArray = employeeList.filter(employee => employee.name.toLowerCase() === lookupEmployee);
  switch (lookupArray.length) {
    default:
      lookupArray.forEach(e => render("Name: " + e.name, "Office Number: " + e.officeNum, "Phone Number: " + e.phoneNum));
      break;
    case 0:
      render('Employee Not Found');
      break;
  }
}


const contains = function () {
  $('#content').html('<p class="directory">The Minimalists Directory.</p> <input class="contains-input" placeholder="Enter part of an Employee Name"></input> <button id="contains-btn"><i class="far fa-search"></i></button>');
  $('#contains-btn').on('click', containsFunc);
  $('#results').empty();
}
function containsFunc() {
  $('#results').empty();
  const containsEmployeeName = $('.contains-input').val().toLowerCase().trim();
  const containsArr = employeeList.filter(e => e.name.toLowerCase().includes(containsEmployeeName));
  switch (containsEmployeeName !== '' && containsArr.length) {
    default:
      containsArr.forEach(e => render("Name: " + e.name, "Office Number: " + e.officeNum, "Phone Number: " + e.phoneNum));
      break;
    case 0:
      render('Employee Not Found');
      break;
  }
}

const update = function () {
  $('#content').html('<p class="directory">The Minimalists Directory.</p> <input class="empInput" placeholder="Enter an existing employee name"></input>  <input class="fieldInput" placeholder="Enter a field to update (name, phoneNum, officeNum)"></input> <input class="valueInput" placeholder="Enter the updated information"></input>  <button id="update-btn"><i class="far fa-search"></i></button>');
  $('#update-btn').on('click', updateFunc);
  $('#results').empty();
}
function updateFunc() {
  $('#results').empty();
  const updateEmployee = $('.empInput').val().toLowerCase().trim();
  const updateField = $('.fieldInput').val().trim();
  const updateValue = $('.valueInput').val().trim();
  const updateArr = employeeList.filter(e => e.name.toLowerCase() === updateEmployee);
  switch (updateArr.length) {
    default:
      switch (updateArr[0].hasOwnProperty(updateField)) {
        default: updateArr[0][updateField] = updateValue;
          updateArr.forEach(e => render("Name: " + e.name, "Office Number: " + e.officeNum, "Phone Number: " + e.phoneNum));
          break;
        case 0:
          render('Invalid Field');
          break;
      }
      break;
    case 0: render('Employee Not Found');
      break;
  }
}


const add = function () {
  $('#content').html('<p class="directory">The Minimalists Directory.</p>  <input class="add-name-input" placeholder="Enter a new employee name"></input> <input class="addnum-input" placeholder="Enter an office number"></input>  <input class="phone-input" placeholder="Enter a phone number"></input> <button class="add-btn"><i class="far fa-search"></i></button>');
  $('.add-btn').on('click', addFunc);
  $('#results').empty();
}
const addFunc = function () {
  $('#results').empty();
  const addEmployee = $('.add-name-input').val();
  const officeNumber = $('.addnum-input').val();
  const teleNumber = $('.phone-input').val();
  employeeList.push({
    name: addEmployee,
    officeNum: officeNumber,
    phoneNum: teleNumber
  });
  render("Name: " + employeeList[employeeList.length - 1].name);
  render("Office Number: " + employeeList[employeeList.length - 1].officeNum);
  render("Phone Number: " + employeeList[employeeList.length - 1].phoneNum);
}


const deleteEmp = function () {
  $('#content').html('<p class="directory">The Minimalists Directory.</p> <input class="delete-input" placeholder="Enter an employee name"></input> <button class="delete-btn"><i class="far fa-search"></i></button>')
  $('.delete-btn').on('click', deleteFunc);
  $('#results').empty();
}
const deleteFunc = function () {
  $('#results').empty();
  const deleteEmployee = $('.delete-input').val().toLowerCase().trim();
  const index = employeeList.findIndex(e => e.name.toLowerCase() === deleteEmployee);
  switch (index < 0) {
    case (true):
      render('Employee Not Found')
      break;
    case (false):
      employeeList.splice(index, 1);
      render('Employee Deleted');
      break;
  }
}







$(".print-nav").on('click', print);
$(".verify-nav").on('click', verify);
$(".lookup-nav").on('click', lookup);
$(".contains-nav").on('click', contains);
$(".update-nav").on('click', update);
$(".add-nav").on('click', add);
$(".delete-nav").on('click', deleteEmp);




