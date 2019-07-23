let money = prompt("Ваш бюджет на месяц", '1500' );
let time = prompt("Введите дату в формате YYYY-MM-DD",'2019-07-23');

let appData = {};

appData.money = money;
appData.timeData = time;
appData.expenses = {};
appData.optionalExpenses = {};
appData.income = [];
appData.savings = false;

for(i = 0; i < 2; i++) {
    appData.expenses[prompt('Введите статью расходов в этом месяце')] = +prompt('во сколько это обойдется?')
}

alert ('бюджет на день - ' + appData.money/30);
