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
  $('#content').append(`<div id="innerContent"></div>`);
  $('#innerContent').append(`<h4>The Minimalist's Directory.</h4>`);
  for (i = 0; i < employeeList.length; i++) {
    //create a div with each element of array
    $('#innerContent').append(`<div>Name: ${employeeList[i].name}</div>`);
    $('#innerContent').append(`<div>Office Number: ${employeeList[i].officeNum}</div>`);
    $('#innerContent').append(`<div>Phone: ${employeeList[i].phoneNum}</div>`);
    $('#innerContent').append(`<div><br></div>`);
  }
}

const verify = function (e) {
  $('#content').empty();
  e.preventDefault();
  $('#content').append(`<input id="userInput" placeholder="John">`);
  $('#content').append(`<a href="#"><i class="fas fa-search"></i></a>`);
  $('#content').append(`<div id="innerContent"></div>`);
  $('.fa-search').on('click', innerVerify);
}

const innerVerify = function (e) {
  $('#innerContent').empty();
  e.preventDefault();
  if (employeeList.some(e => e.name.toLowerCase() === $('#userInput').val().toLowerCase()) === true) {
    $('#innerContent').append(`<div>Employee Found</div>`);
  }
  else {
    $('#innerContent').append(`<div>Employee Not Found</div>`);
  }
}

const lookup = function (e) {
  $('#content').empty();
  e.preventDefault();
  $('#content').append(`<input id="userInput" placeholder="John">`);
  $('#content').append(`<a href="#"><i class="fas fa-search"></i></a>`);
  $('#content').append(`<div id="innerContent"></div>`);
  $('.fa-search').on('click', innerLookup);
}

const innerLookup = function (e) {
  $('#innerContent').empty();
  e.preventDefault();
  if (employeeList.some(e => e.name.toLowerCase() === $('#userInput').val().toLowerCase()) === true) {
    const employee = employeeList.find(e => e.name.toLowerCase() === $('#userInput').val().toLowerCase());
    $('#innerContent').append(`<div>Name: ${employee.name}</div>`);
    $('#innerContent').append(`<div>Office Number: ${employee.officeNum}</div>`);
    $('#innerContent').append(`<div>Phone: ${employee.phoneNum}</div>`);
  }
  else {
    $('#innerContent').append(`<div>Employee Not Found</div>`);
  }
}

const contains = function (e) {
  $('#content').empty();
  e.preventDefault();
  $('#content').append(`<input id="userInput" placeholder="jo">`);
  $('#content').append(`<a href="#"><i class="fas fa-search"></i></a>`);
  $('#content').append(`<div id="innerContent"></div>`);
  $('.fa-search').on('click', innerContains);
}

const innerContains = function (e) {
  $('#innerContent').empty();
  e.preventDefault();
  if (employeeList.some(e => e.name.toLowerCase().includes($('#userInput').val().toLowerCase())) === true) {
    const employee = employeeList.find(e => e.name.toLowerCase().includes($('#userInput').val().toLowerCase()));
    $('#innerContent').append(`<div>Name: ${employee.name}</div>`);
    $('#innerContent').append(`<div>Office Number: ${employee.officeNum}</div>`);
    $('#innerContent').append(`<div>Phone: ${employee.phoneNum}</div>`);
  }
  else {
    $('#innerContent').append(`<div>Employee Not Found</div>`);
  }
}

const update = function (e) {
  $('#content').empty();
  e.preventDefault();
  $('#content').append(`<div class='inputField'>Name <input id="nameInput" placeholder="Jan"></div>`);
  $('#content').append(`<div class='inputField'>Number <input id="numberInput" placeholder="123"></div>`);
  $('#content').append(`<div class='inputField'>Phone <input id="phoneInput" placeholder="123-456-7890"></div>`);
  $('#content').append(`<a href="#"><i class="fas fa-pen"></i></a>`);
  $('#content').append(`<div id="innerContent"></div>`);
  $('.fa-pen').on('click', innerUpdate);
}

const innerUpdate = function (e) {
  $('#innerContent').empty();
  e.preventDefault();
  if (employeeList.some(e => e.name.toLowerCase() === $('#nameInput').val().toLowerCase()) === true) {
    const index = employeeList.findIndex(e => e.name.toLowerCase() === $('#nameInput').val().toLowerCase());
    employeeList[index].officeNum = $('#numberInput').val();
    employeeList[index].phoneNum = $('#phoneInput').val();
    $('#innerContent').append(`<div>Name: ${employeeList[index].name}</div>`);
    $('#innerContent').append(`<div>Office Number: ${employeeList[index].officeNum}</div>`);
    $('#innerContent').append(`<div>Phone: ${employeeList[index].phoneNum}</div>`);
  }
  else {
    $('#innerContent').append(`<div>Employee Not Found</div>`);
  }
}

const add = function (e) {
  $('#content').empty();
  e.preventDefault();
  $('#content').append(`<div class='inputField'>Name <input id="nameInput" placeholder="David"></div>`);
  $('#content').append(`<div class='inputField'>Number <input id="numberInput" placeholder="123"></div>`);
  $('#content').append(`<div class='inputField'>Phone <input id="phoneInput" placeholder="123-456-7890"></div>`);
  $('#content').append(`<a href="#"><i class="fas fa-plus-square"></i></a>`);
  $('#content').append(`<div id="innerContent"></div>`);
  $('.fa-plus-square').on('click', innerAdd);
}

const innerAdd = function (e) {
  $('#innerContent').empty();
  e.preventDefault();
  let employee = {};
  employee = {
    name: $('#nameInput').val(),
    officeNum: $('#numberInput').val(),
    phoneNum: $('#phoneInput').val()
  };
  employeeList.push(employee);
  $('#innerContent').append(`<div>Name: ${employeeList[employeeList.length - 1].name}</div>`);
  $('#innerContent').append(`<div>Office Number: ${employeeList[employeeList.length - 1].officeNum}</div>`);
  $('#innerContent').append(`<div>Phone: ${employeeList[employeeList.length - 1].phoneNum}</div>`);
}

const deleteFunc = function (e) {
  $('#content').empty();
  e.preventDefault();
  $('#content').append(`<input id="userInput" placeholder="John">`);
  $('#content').append(`<a href="#"><i class="fas fa-trash-alt"></i></a>`);
  $('#content').append(`<div id="innerContent"></div>`);
  $('.fa-trash-alt').on('click', innerDeleteFunc);
}

const innerDeleteFunc = function (e) {
  $('#innerContent').empty();
  e.preventDefault();
  if (employeeList.some(e => e.name.toLowerCase() === $('#userInput').val().toLowerCase()) === true) {
    const index = employeeList.findIndex(e => e.name.toLowerCase() === $('#userInput').val().toLowerCase());
    employeeList.splice(index, 1);
    $('#innerContent').append(`<div>Employee Deleted</div>`);
  }
  else {
    $('#innerContent').append(`<div>Employee Not Found</div>`);
  }
}

$('#print').on('click', print);
$('#verify').on('click', verify);
$('#lookup').on('click', lookup);
$('#contains').on('click', contains);
$('#update').on('click', update);
$('#add').on('click', add);
$('#delete').on('click', deleteFunc);