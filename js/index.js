// // let str = 299;
// // let str = 'console';
// // console.log(str);


// // const numbers = [1, 14, 42, 69, 87, 96, 8, 9, 12, 13, 7];
// // let sum = [];
// // for (const num of numbers) {
// //     if (num % 2 !== 0) {
// //         sum += num;
// //     }
// // }
// // console.log("sum", sum);



// // В переменной min лежит число от 0 до 59.
// // Определите в какую четверть часа попадает
// // это число(в первую, вторую, третью или четвертую).


// let min = Number(prompt());

// if (min >= 0 && min <= 15) {
//     console.log("вітаю! Ви в 1/4")
// } else if (min >= 16 && min <= 30) { console.log("вітаю! Ви в 2/4") }
// else if (min >= 31 && min <= 45) { console.log("вітаю! Ви в 3/4") }
// else if (min >= 46 && min <= 59) { console.log("вітаю! Ви в 4/4") }
// else {
//     console.log("що ти городиш?");


//  }
//7. Напишите цикл, который предлагает ввести
//число больше 100 через prompt.
//Если если посетитель ввёл другое число - попросить
//ввести ещё раз и так далее.
//Цикл должен спрашивать число, пока посетитель не
//введёт число больше 100, либо не нажмет кнопку
//Отмена в prompt

// let inputNumber = Number(prompt('Введите число больше 100'));

// while (inputNumber < 100) {
//     inputNumber = Number(prompt('Введите число больше 100'));
   

//     console.log(inputNumber ,"inputNumber")
// }

// За каждый месяц налоговая начисляет на зп разработчика 5% от суммы.
// Напишите функцию, в которую пользователь вводит сумму зп
//  и количество месяцев с помощью prompt() не забываем что промпт возвращает строку.
// А налоговая вычисляет конечную сумму зп без налогов за количество месяцев,
// сумму налогов всего и чистый доход разработчика за каждый месяц.
// Для вычисления суммы с учетом процентов используйте цикл for.


// function calcSalaryDev() {
//     const salary = Number(prompt("Какой уровень ЗП Вы ожидаете?"));
//     const months = Number(prompt("Количество месяцев"));
//     let taxFreeTotalSalary = 0;
//     let totalTaxSum = 0;
//     let taxFreeMonthSalary = 0;

//     // for (let i = 1; i <= months; i += 1){
//     //     totalSalary += salary;
//     //     console.log(totalSalary);

//     //     taxFreeMonthSalary = salary * 0.95;
//     //     console.log(`${i} tax Free Month Salary: ${taxFreeMonthSalary}`);
//     // }


//     taxFreeTotalSalary = (salary * months) - ((salary * months) - ((salary * 0.95) * months));
//     totalTaxSum = (salary * months) * 0.05;
//     console.log(`tax Free Total Salary: ${taxFreeTotalSalary}, total Tax Sum: ${totalTaxSum}`);

// }
// calcSalaryDev();

// 3 Напишите фукцио преобраения данных

// const inputData = [
//     { id: 1, name: "Item 1" },
//     { id: 2, name: "Item 2" },
//     { id: 4, name: "Item 4" },
//     { id: 7, name: "Item 7" },
// ];

// ('function should return normalized data', () => {
//     expect(normalize(inputData)).toEqual({
//         entities: {
//             1: { id: 1, name: "Item 1" },
//             2: { id: 2, name: "Item 2" },
//             4: { id: 4, name: "Item 4" },
//             7: { id: 7, name: "Item 7" },
//         },
//         byId: [1, 2, 4, 7],
//     });

// function normalizeData(data) {
//     const objData = {};
//     const arrayId = [];
//     const resultDataNormalize = {};
//     data.forEach(element => {
//         let elId = element.id;
//         // console.log(elId)
//         objData[elId] = element;
//         // console.log(objData);
//         arrayId.push(elId);
//         // console.log(arrayId);
//     });
//     resultDataNormalize.entities = objData;
//     resultDataNormalize.byId = arrayId;
//     console.log(resultDataNormalize)
//  return resultDataNormalize;
// }
// normalizeData(inputData)

const arr = ['BEST', 'the', 'foo', 'is', 'JS'];

function str(array, numberToDelete) {
    // const reversedArr = array.reverse();
    // console.log(reversedArr);
    // const deletedEl = reversedArr.splice(numberToDelete-1, 1);
    // console.log(deletedEl);
    // console.log(reversedArr);
    // console.log(reversedArr.join(' '));
    // return reversedArr.join(' ');
    
    const newStr = array.reverse().slice(0, numberToDelete - 1).concat(array.slice(numberToDelete)).join(' ');
    console.log(newStr);
    return newStr;

}
str(arr, 3);