// 1.  Ви прийшли в Макдональдз з трьома друзями.
//     Всі вони хочуть зʼїсти гамбургер. Ви хочете зʼїсти гамбургер з картоплею.
//     Реалізувати код, який буде перевіряти, що якщо всім вистачає гамбургерів і картоплі,
//     то виводити текст "Ми поїли" в консоль. Якщо на всіх не вистачає їжі,
//     то виводити в консоль текст "Ми йдемо в інше кафе"
// (Змінні типу інтеджер містять кількість продуктів в наявності у вигляді вхідних даних)

const hamburger = 4;
const fries = 1;

if(hamburger >= 4 && fries){
    console.log('Ми поїли')
}else{
    console.log('Ми йдемо в інше кафе')
}

// 2.  Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
//     Результат виводити в консоль.


let price = 1899;

if(price >= 1000 && price <= 1900) {
    console.log('Ціна товару = ' + price + ', є в діапазоні між 1000 та 1900 включно');
}else{
    console.log('Ціна товару не є в діапазоні між 1000 та 1900');
}

// 3.  Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
//     Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
//     Результат виводити в консоль.

let price = 900;

if(price >= 1000 && price <= 1900){
    console.log ('Ціна товару = ' + price + ', є в діапазоні між 1000 та 1900 включно');
}else{
    console.log ('Ціна товару = ' + price + ', не є в діапазоні між 1000 та 1900')
}

// з оператором '!'
if(!(price >= 1000  && price <= 1900)){
    console.log ('Ціна товару = ' + price + ', не є в діапазоні між 1000 та 1900');
}else{
    console.log ('Ціна товару = ' + price + ', є в діапазоні між 1000 та 1900')
};

// 4.  За номером пори року вивести назву цієї пори року використовуючи оператор if-else-if
//     Результат виводити в консоль.

let month = 4;

if(month === 1){
    console.log('January')
}else if(month === 2){
    console.log('February')
}else if(month === 3){
    console.log('March')
}else if(month === 4){
    console.log('April')
}else if(month === 5){
    console.log('May')
}else{
    console.log('Month after 5')
}

// 5.  Задано 3 числа (a, b, c), які не рівні між собою.
//     Визначити середнє мід цими трьома числами
// (не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
// Використати вкладені оператори if
//     Результат виводити в консоль.

let a = 3;
let b = 7;
let c = 10;

if(a < b){
    if(c > b){
        console.log(b);
    }else if(a > c){
        console.log(c);
    }else{
        console.log(a);
    }
}


// 6.  Задано номер дня тижня.
//     За заданим номером вивести назву дня тижня використовуючи switch.
//     Результат виводити в консоль.

let weekDay = 5;

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

// 7.  За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
//     Математичні операції для обчислення: "+", "-", "*", "/".
//     Результат виводити в консоль.

let mathOp = "*"
num1 = 10
num2 = 2

switch(mathOp) {
    case "+":
        console.log(num1 + num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    default:
        console.log('Undefined');
        break;
}


// 13.*  Використовуючи властивості рядків (тип string), та регулярний вираз (regular expression) видалити голосні букви зі слова.

let word = 'Hello world';
let removeVowels = word.replace(/[aeiou]/gi, '');

console.log(removeVowels);

// To remove all vowels from a string in JavaScript, call the replace() method on the string with this regular expression: /[aeiou]/gi, i.e.,
// str.replace(/[aeiou]/gi, ''). replace() will return a new string where all the vowels in the original string have been replaced with an empty string.

// 14.*  Використовуючи оператор if реалізувати логіку переводу метрів в кілометри,
//     так щоб в консоль виводився результат обчислень з правильним закінченням.
//     Наприклад: 1000 метрів це 1 кілометр;  32 метри це 0,032 кілометра і т.д.
//
// Підказка(https://ukr-lifehacks.ed-era.com/rozdil-9/zvyazok_chislivnykiv)
// */

let meter = 32;

if (meter >= 1000) {
    console.log(kilometers = meter / 1000);
} else {
    console.log(kilometers = meter * 0.001);

}





