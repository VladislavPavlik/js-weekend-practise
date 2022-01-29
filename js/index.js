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

// const arr = ['BEST', 'the', 'foo', 'is', 'JS'];

// function str(array, numberToDelete) {
//     // const reversedArr = array.reverse();
//     // console.log(reversedArr);
//     // const deletedEl = reversedArr.splice(numberToDelete-1, 1);
//     // console.log(deletedEl);
//     // console.log(reversedArr);
//     // console.log(reversedArr.join(' '));
//     // return reversedArr.join(' ');
    
//     const newStr = array.reverse().slice(0, numberToDelete - 1).concat(array.slice(numberToDelete)).join(' ');
//     console.log(newStr);
//     return newStr;

// }
// str(arr, 3);

// Задание
// Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
// Тесты
// Объявлена переменная getFriends
// Переменной getFriends присвоена стрелочная функция с параметром (users)
// Вызов функции с указанным массивом пользователей возвращает массив ["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// Вызов функции со случайными, но валидными аргументами, возвращает правильное значение

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]

// // Change code below this line
// const getFriends = (users) => {
//     const arrFriends = users.flatMap(user => user.friends).filter((element, index, array) => array.indexOf(element) === index);
//     const arrFriends = new Set(users.flatMap(user => user.friends));
//     return Array.from(new Set(users.flatMap(user => user.friends)));
// };
// Change code above this line

// Создать функцию generatePetCard,
// которая принимает 3 аргумента: kind, year, name
// Функция должна возвращать разметку HTML:
// <li class="petCard">
//   <h2>Name Year</h2>
//   <p>Животное  Kind - Year год рождения. Возраст животного - Years лет.</p>
// </li>
// высчитать возраст животного и если старше 4 лет добавляем "лет" иначе добавлеем "года"
// Создать новый нумерованный список с классом pets
// Создать 4 карточки для животных, используя функцию generatePetCard
// Поместить эти 4 карточки внутрь списка с классом pets

// Поместить список c классом pets на страницу DOM -  в DIV с классом container

// Добавить кнопку Удалить на каждую карточку животного

// При клике на кнопку - удалять карточку из структуры DOM
// 1. Выбрать все кнопки

// 2. Создать функцию удаления

// 3. Использовать цикл - чтобы повесить обработчик события на каждую кнопку

const petsList = [
    { kind: "Dog", year: 2015, name: "lassie" },
    { kind: "Cat", year: 2016, name: "einstein" },
    { kind: "Hedgehog", year: 2019, name: "elizabeth" },
    { kind: "Hamster", year: 2020, name: "alcatraz" },
];

const divContainer = document.querySelector('.container');

function generatePetCard(kind, year, name) { 
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return `<li class="petCard">
          <h2>${name.toUpperCase()} ${year}</h2>
          <p>Животное  ${kind.toUpperCase()} - ${year} год рождения. Возраст животного - ${currentYear - year} ${currentYear - year > 4 ? 'лет' : 'года'}.</p>
          <button type="button" class="btn">Удалить</button>
        </li>`
}

const petsCardList = document.createElement('ol');
petsCardList.classList.add('pets');

const petsHtml = petsList.reduce((acc, {kind, year, name}) => {
  acc += generatePetCard(kind, year, name);
  return acc;
}, '');

petsCardList.insertAdjacentHTML('beforeend', petsHtml);

divContainer.insertAdjacentElement('beforeend', petsCardList);

const btnCard = document.querySelectorAll('.btn');

function onClickBtn(event) {
  const currentBtn = event.currentTarget;
  currentBtn.closest('.petCard').remove();
}

btnCard.forEach((button) => {
  button.addEventListener('click', onClickBtn);
})
