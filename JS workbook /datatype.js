//nymber
let number = 1;
let floatNumber = 1.1;

//infinity, NaN
console.log(4/0); //infinity
console.log('text' * 1); //NaN

//boolean
let isExist = true; // = false

//null, undefined
let value =null;
console.log(value);

let undef;
console.log(undef);

//object
let person ={
    name :"Krystyna",
    age : 24,
    hair:{
        key: 'light',
        key1: 'short'
    }
}
console.log(person);

person.age = 10
person.eyeColor = 'blue'

console.log(person);
console.log(person.age);
console.log(person.hair.key);

//Конкетинація - спосіб обєднання рядків і змінних
console.log("My name:" + person.name + ", I am" + person.age + "years old")

//Iнтерполяція - спосіб обєднання рядків і змінних
console.log(`My name is ${person.name}, I am ${person.age} years old.`)

let url = 'https://example.com'
let endpoint = '/homepage'

console.log(`${ur}${endpoint}`)

//Array
// Index  =     0,     1,     2,                 3
let  array = ['text', 20, {name: "Khrystyna"}, [1,2,3]]

console.log(array[1])

let numArray = [1,2,3];
let numObj = {a:1, b:2, c:3};

console.log(numArray[0]);
console.log(numObj.a);

let salary = {
    'person1': 1000,
    'person2': 2000
}

let salaryArray = ['person1 1000', 'person2 2000']

let someObjArr = {
    0: 1,
    1: 2,
    2: 3,
    3: 4
}

let someArray = [1,2,3,4]

console.log(someObjArray[0])
console.log(someArray[3])

let someObjArr = {
    text: 1,
    1: 2,
    2: 3,
    3: 4
}
console.log(someObjArr['text'])

// дії з різними типами даних

let someText = ' Hello world! '

console.log(someText.length); // повертає кількість знаків
console.log(someText.substring(1, 6)); // повертає від першого до отсаннього значення які вказані
console.log(someText.slice(1, 6)); // робить те саме що і верхній метод
console.log(someText.toLowerCase());
console.log(someText.toUpperCase());
console.log(someText.trim()); // забирає пробіли
console.log(someText.charAt(1)); // повертає значення які відповідає індексу
console.log(someText[1]);

let myArr = [];

console.log(myArr.push(' ')); //push додає значення до масиву
console.log(myArr.push('Hello'));
console.log(myArr.push(' '));
console.log(myArr.push('world!'));
//console.log(myArr);
//console.log(myArr.length);

console.log(myArr);
console.log(myArr.pop()); // pop повертає останній елемент
console.log(myArr);

let someNumber = 12.4;

console.log(someNumber.toFixed()) // округлює до рівного числа
console.log(Math.round(someNumber)); //так само

let somePar = '12.5px';
console.log(parseInt(somePar)); // ціле число
console.log(parseFloat(somePar)); // дисяткове число

