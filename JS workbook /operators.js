//  + для обєднання або контантинація

console.log('te'+'xt');
console.log(2+2);

console.log(2+ '2');
console.log(2 + + '2'); // додає

// Інкремент/ декремент - додає або віднімає значення

let incr = 10;
let decr = 10;

// incr++
// decr--
//
// console.log(incr);
// console.log(decr);
//
// ++incr
// --decr

console.log(incr++);
console.log(decr--);

console.log(incr);
console.log(decr);

// < , > повертаю true/false

console.log(5 < 2);
console.log(5 > 2);

console.log(5 <= 2);
console.log(5 >= 6);

console.log(5%2); // залишок, поверне 1

// = порівняння, повертаю true/false

//console.log(2*2=4) // таке рішення поверне помилку адже ми таким чином ми присвоюємо одному значенню інше
console.log(2*2==4); // == це порівняння, поверне true/false
console.log(2*2=='4'); // == використовується для порівняння двох змінних, незалежно від типу даних змінної, тобто в цьому випадку поверне true, адже 4 рівне текстовому 4
console.log(2*2==='4'); // === === використовується для порівняння двох змінних, але це перевірить строгий тип, тобто перевірить тип даних і порівняє два значення,тобто в цьому випадку поверне false, адже числовий тип порівнюється з текстом

// &&, || логічні оператори "і" та "або", повертаю true/false

let isChecked = true;
let isClosed = false;

console.log(isChecked && isClosed);// i &&
console.log(isChecked || isClosed);// або ||, щоб умова була true достатньо щоб виконалась одна з умов

// оператор заперечення "!"

let isChecked = true;
let isClosed = true;

console.log(!isChecked);// повертає значення на протилежне, тобто true

console.log(isChecked && !isClosed);

// Задача: Я хоу купити картоплю фрі та гамбургер, якщо обидві страви є в наявності тоді я їх куплю і буду ситий

const hamburger = 1; // 0 = false, 1 = true
const fries = true;

if(hamburger&&fries){
    console.log('я ситий');
}

// false - 0, "", null, undefined, NaN

// В наявності 3 гамбургера, 2 картоплі фрі, 4 коли, 4 нагетси. Я хочу щоб в наявності було 3 гамбургери і 2 картоплі АБО 4 коли і 4 нагетси

const hamburger = 3; //3
const fries = 1;//2
const cola = 1; //4
const nuggets = 1;//4

if(hamburger >= 3 && fries || nuggets >=4 && cola >=4){
    console.log('я ситий');
}








