let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц", '1500');
    time = prompt("Введите дату в формате YYYY-MM-DD", '2019-07-23');
    
    while(isNaN(money) || money == 0) {
        money = +prompt("Ваш бюджет на месяц", '1500');
    }
}
start();

let appData = {};

appData.budget = money;
appData.timeData = time;
appData.expenses = {};
appData.optionalExpenses = {};
appData.income = [];
appData.savings = true;

function chooseExpenses(){
    for (i = 0; i < 2; i++) {
        let a = prompt('Введите статью расходов в этом месяце'),
            b = +prompt('во сколько это обойдется?');
        if ((typeof (a)) === 'string' && b != null && a != '' && b != '') {
    
            appData.expenses[a] = b;
        } else {
            i--;
            alert('введите коректное значение');
        }
    
    }
}
chooseExpenses();

appData.moneyPerDay = +(appData.budget / 30).toFixed();
alert("Бюджет на День: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    conole.log("Средний уровень");
} else if (appData.moneyPerDay > 2000) {
    conole.log("Высокий уровень");
} else {
    conole.log('Произошла ошибка');
}

/*let n = +prompt("Количество расходов")

while(n){
    let a = prompt('Введите статью расходов в этом месяце'),
    b = +prompt('во сколько это обойдется?');
    if ((typeof (a)) === 'string' && b != null && a != '' && b != '') {
        
        appData.expenses[a] = b;
    }else{
        n++;
        alert ('введите коректное значение');
    }
    n--
}*/

function checkSavings () {
    if(appData.savings) {
        let save = +prompt('Какова сумма накоплений?'),
        percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
} 
checkSavings();

function addChooseExpenses () {
    for(i = 0; i < 3; i++){
        let answer = prompt('Статья необязательных расходов');

        appData.optionalExpenses[i+1] = answer;
    }
}
