let start = document.getElementById('start');

let budgetValue = document.getElementsByClassName('budget-value')[0];
let daybudgetValue = document.getElementsByClassName("daybudget-value")[0];
let levelValue = document.getElementsByClassName("level-value")[0];
let expensesValue = document.getElementsByClassName("expenses-value")[0];
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];
let incomeValue = document.getElementsByClassName("income-value")[0];
let monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0];
let yearsavingsValue = document.getElementsByClassName("yearsavings-value")[0];

let chooseExpenses = document.getElementsByClassName("expenses-item");

let btns = document.getElementsByTagName('button');
let btn1 = btns[0];
let btn2 = btns[1];

let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');

let chooseIncome = document.querySelector("#income");
let savings = document.querySelector('#savings');
let sum = document.querySelector("#sum");
let percent = document.querySelector("#percent");
let year = document.querySelector('.year-value');
let month = document.querySelector(".month-value");
let day = document.querySelector(".day-value")