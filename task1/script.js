let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц", '1500');
    time = prompt("Введите дату в формате YYYY-MM-DD", '2019-07-23');
    
    while(isNaN(money) || money == 0) {
        money = +prompt("Ваш бюджет на месяц", '1500');
    }
}
start();

let appData = {
    detectDayBudget: function(){
        appData.moneyPerDay = +(appData.budget/30).toFixed();
        alert('ежедневный бюджет ' + appData.moneyPerDay);
    }
};

appData.n = 1;
appData.budget = money;
appData.timeData = time;
appData.expenses = {};
appData.optionalExpenses = {};
appData.income = [];
appData.savings = true;
appData.chooseExpenses = function() {
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
};

appData.detectLevel = function() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень");
    } else {
        console.log('Произошла ошибка');
    }
};

appData.checkSavings = function() {
    if(appData.savings) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}; 

appData.chooseOptExpenses = function() {
    for(i = 0; i < 3; i++){
        let a = prompt('Введите статью расходов в этом месяце');
        if ((typeof (a)) === 'string' &&  a != '' ) {
            appData.optionalExpenses[appData.n++] = a;
        } else {
            i--;
            alert('введите коректное значение');
        }

    }
};

appData.chooseIncome = function() {
    let items = prompt('источники доп. дохода? (через запятую)','');
    if((typeof(items)) === 'string' && items != ''){
        appData.income = items.split(', ').sort();
    } else {
        alert('нельзя отменить или ввести пустую строку','')
        appData.chooseIncome();
    }
    items = '';
    appData.income.forEach(function(m, i){
        if((i + 1) != appData.income.length){
            items = items + m + ', ';    
        }else {
            items += m + '.';
            alert('Способы доп. заработка: ' + items);
        }
     });
}

for (prop in appData){
    console.log("Наша программа включает в себя данные: " + prop +': '+ appData[prop])
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





