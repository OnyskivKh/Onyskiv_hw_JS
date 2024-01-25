// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
// (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)


function availableMeal (hamburger, fries) {
    if (hamburger >= 4 && fries >= 1) {
        console.log('Ми поїли');
    } else {
        console.log('Ми йдемо в інше кафе');
    }
}
const hamburger = 4;
const fries = 1;

availableMeal(hamburger, fries);

// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.

function checkPrice(price) {
    if(price >= 1000 && price <= 1900) {
        console.log('Ціна товару = ' + price + ',  є в діапазоні між 1000 та 1900 включно');
    }else{
        console.log('Ціна товару не є в діапазоні між 1000 та 1900');
    }
}

const productPrice = 1899;
checkPrice(productPrice);

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.


function checkPrice(price) {
    if (price >= 1000 && price <= 1900) {
        console.log('Ціна товару = ' + price + ', є в діапазоні між 1000 та 1900 включно');
    } else {
        console.log('Ціна товару = ' + price + ', не є в діапазоні між 1000 та 1900');
    }
}

let price = 900;
checkPrice(price);


// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.


// resolved with function
function monthName(month) {
    if (month === 1) {
        console.log('January')
    } else if (month === 2) {
        console.log('February')
    } else if (month === 3) {
        console.log('March')
    } else if (month === 4) {
        console.log('April')
    } else if (month === 5) {
        console.log('May')
    } else {
        console.log('Month after 5')
    }
}
let monthNumber = 4;
monthName(monthNumber);


// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
// (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
// Використати вкладені оператори if
//     Результат виводити в консоль.


//resolved with function
function averageNumber (a, b, c){

    if(a < b){
        if(c > b){
            return b;
        }else if(a > c){
            return c;
        }else{
            return a;
        }
    }
}
let a = 3;
let b = 7;
let c = 10;

let result = averageNumber(a, b, c);
console.log(result);


// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.


function displayWeekDay (weekDay){

    switch(weekDay) {
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        default:
            console.log('Weekends');
            break;
    }
}

const WeekDay = 5;
displayWeekDay(WeekDay);

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.


function mathOp(operator, num1, num2) {
    switch(operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return 'Undefined';
    }
}

let operator = "*";
let num1 = 10;
let num2 = 2;

let result = mathOp(operator, num1, num2);
console.log(result);


// 8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.

function createArray(a, b) {
    let myArray = [];
    for (let i = a; i <= b; i++) {
        myArray.push(i);
    }
    return myArray;
}

let myArray = createArray(1, 5);
console.log(myArray);

// 9. Напишіть 2 цикли.
//     За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
//     За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.


function createOddArray(a, b) {
    let myArray = [];
    for (let i = a; i <= b; i++) {
        if (i % 2) {
            myArray.push(i);
        }
    }
    return myArray;
}

let myArray = createOddArray(1, 9);
console.log(myArray);

// 10. Оголоcіть та ініціалізуйте змінну total = 0.
// Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
//     const myArr = [2, 3, 4, 5, 6];

function totalArr(myArr) {
    let total = 0;

    for (let i = 0; i < myArr.length; i++) {
        total += myArr[i];
    }

    return total;
}

let myArr = [2, 3, 4, 5, 6];
let total = totalArr(myArr);

console.log(total);

// 11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.
//
//     const arr = [ [1, 2], [3, 4], [5, 6] ];
//
// Console output:
// 1
// 2
// 3
// 4
// 5
// 6

function unpackArray(arr){

    for(let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);

        }
    }
}

const arr = [ [1, 2], [3, 4], [5, 6] ];
unpackArray(arr);

// 12. Доповніть код нижче, так щоб в консоль повертався результат множення усіх чисел у підмасивах arr.
//     Використайте для цього вкладені цикли for.
//
// Наприклад:
//     const arr = [[1], [2], [3]]  >  console.log(product) має повернути 6
// const arr = [[1, 2], [3, 4], [5, 6, 7]]  >  console.log(product) має повернути 5040
// const arr = [[5, 1], [0.2, 4, 0.5], [3, 9]]  >  console.log(product) має повернути 54
//
// const arr = [[1, 2], [3, 4], [5, 6, 7]];
//
// let product = 1;
//
// // тут має бути ваше рішення
//
// console.log(product);


function calculateArray(arr) {
    let product = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    return product;
}

const arr = [[1, 2], [3, 4], [5, 6, 7]];
let result = calculateArray(arr);

console.log(result);

// 13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

function removeVowels(String) {
    return String.replace(/[aeiou]/gi, '');
}

let word = 'Hello world';
let result = removeVowels(word);

console.log(result);




