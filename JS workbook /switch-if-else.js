// if якшо умова правильна поверни таки вираз, else в іншому випадку(протилежне) поверни інший вираз

if(true){
    console.log('Expression is true')
}

if(4==4){
    console.log('Expression is true')
}else{
    console.log('Expression is false')

}

let num = 1;
if(1){
    console.log('Expression is true')
}else if(2) {
    console.log('Expression is false')
}else if(3){
    console.log('Expression is false')
}else if(4){
    console.log('Expression is false')
}

let num = 5;
if(num === 1){
    console.log('Expression is 1')
}else if(num === 2) {
    console.log('Expression is 2')
}else if(num === 3){
    console.log('Expression is 3')
}else if(num === 4){
    console.log('Expression is 4')
}else {
    console.log('Expression is not 1,2,3 or 4')
}

//тернарний оператор if "?", else ":"
let num = 50;

(num === 50) ? console.log('Expression is true') : console.log('Expression is false')

// switch case

let number = 50;

switch(number) {
    case 49:
        console.log('Value = 49');
        break;
    case 50:
        console.log('Value = 50');
        break;
    case 51:
        console.log('Value = 51');
        break;
    default:
        console.log('Value = 51');
        break;
}

let number = 50;

switch(number) {
    case 49:
        console.log('Value = 49');
        break;
    case 55:
        console.log('Value = 55');
        break;
    case 51:
        console.log('Value = 51');
        break;
    default:
        console.log('Default value');
        break;
}








