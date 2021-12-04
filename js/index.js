// let str = 299;
// let str = 'console';
// console.log(str);


// const numbers = [1, 14, 42, 69, 87, 96, 8, 9, 12, 13, 7];
// let sum = [];
// for (const num of numbers) {
//     if (num % 2 !== 0) {
//         sum += num;
//     }
// }
// console.log("sum", sum);



// В переменной min лежит число от 0 до 59.
// Определите в какую четверть часа попадает
// это число(в первую, вторую, третью или четвертую).


let min = Number(prompt());

if (min >= 0 && min <= 15) {
    console.log("вітаю! Ви в 1/4")
} else if (min >= 16 && min <= 30) { console.log("вітаю! Ви в 2/4") }
else if (min >= 31 && min <= 45) { console.log("вітаю! Ви в 3/4") }
else if (min >= 46 && min <= 59) { console.log("вітаю! Ви в 4/4") }
else {
    console.log("що ти городиш?");
 }