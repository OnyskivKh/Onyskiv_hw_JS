
let a = 5;
let b = 3;
let c;

c= a + b;
console.log(c);

a = 1;
b = 3;
console.log(c);



// об'явлення функція = функція, параметри в дужках і тіло функції
function sum(a, b){
    let c = a + b;
    console.log(c);
}

// виклик функції = значення або змінні
sum(3, 5); // аргумент
sum(5, 5);
// 2nd method

let a = 10;
let b = 2;
sum(a, b);

// іменована функція
function login(username, password) {
    cy.get('[#username]').type(username);
    cy.get('[#password]').type(password);
}
login('bla@gmail.com', 'ukr123');


function sum(a, b){  //(a, b) параметри
    let c = a + b;
    return c;
}

let a = 10;
let b = 2;

console.log(sum(a, sum(5, b)));

// анонімна функція

// function (a, b){
//     let c = a + b;
//     console.log(c);
// }
const anonimFunc = function (a, b){
    let c = a + b;
    console.log(c);
}

anonimFunc(3,4);

function sum(a, b){
    let c = a + b();
    return c;
}

let a = 10;

console.log(sum(a, function (){
    let a = 10;
    let b = 20;
    return a + b;

}))
//
function sum(a, b){
    let c = a + b;
    return c;
}

let result = sum(3,4);

console.log(result);

///

function sum(a, b){
    let c;

    if(typeof b === "function"){
        c = a + b();
    }else{
        c = a + b;
    }
    return c;
}

let a = 10;

console.log(sum(a, function (){
    let a = 10;
    let b = 20;
    return a + b;

}))

console.log(sum(a, 10));

//
let b = function(){};
console.log(typeof b)

//стрілочна функція
    // ( ) => {}

it('test name', () => {
})


const arrowFunc =( a, b) => {
    let c = a + b;
    return c;
}
console.log(arrowFunc(3, 5));

it('test name', function() {
    cy.get('[#username]').type(username);
    cy.get('[#password]').type(password);
})
function it(testName, testSteps){
    testSteps().then( resp => {
        resp.body.token;
    })

}

///
function sum(a, b){
    let c = a + b;
    return c;
    console.log(c); // не виконається адже після ретюрну не берется до уваги

}

function sum(a, b){
    let c = a + b;
    console.log(c); // виконається
    return c;
}

sum(1,2);

// функція з циклами

function sum() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
        if (i === 3) {
            return
        }
    }
}

sum();

//


let arr = [2, 4, 6, 8, 11, 10, 12, 14,16];

function sum(arr) {
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 11) {
            return
        }
        console.log(arr[i]);

    }
}

sum(arr);

// callback
console.log(Date())

const myRequest = (username, password, date = Date()) => {
    let requestBody = {
        email: username,
        password: password,
        timestamp: date
}
     return requestBody;

}
console.log(myRequest( "mail@gmail.com", "qwerty"))

///

console.log(Date())

const myRequest = (username, password, date = Date()) => {
    return  {
        email: username,
        password: password,
        timestamp: date
    }
}
console.log(myRequest( "mail@gmail.com", "qwerty", '01.12.2024'))
console.log(myRequest( "mail@gmail.com", "qwerty"))


function sum (a, b = 10){
    return a + b;
}
console.log(sum(2));
console.log(sum(2,5));

// example for generation unique value
function generateLeadName(name){
    let randomNum = Math.floor(Math.random() *1000)
    return `${name}${randomNum}`
}

console.log(generateLeadName('LeadName'));