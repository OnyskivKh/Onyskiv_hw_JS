let num = 10;

// while повторювальний цикл

// //while(num < 20){  безкінечний цикл
//     console.log(num)
// }

// додавання дикрементів ++ який дадає число до відповідного моменту
// while(num < 20){
//     console.log(num)
//     num++;
// }

// do-while

do{
    console.log(num);
    num++;
}while(num < 20)

// ці два цикли не працюють на сайпрес

// for

for(let i = 1; i < 10; i++){
    console.log(i);
}
//
let num = 10;

for(let i = 1; i < num; i++){
    console.log(num);
    num++;
}
//
let arr = [2, 4, 6, 8, 10, 12, 14,16];

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

for(let i = 0; i < arr.length; i++){
    if(arr[i] === 12){
        break; // or continue after 12
    }
    console.log(arr[i]);
}

for(let i = 0; i < 3; i++){
    console.log(`i = ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`j = ${i}`)
    }
}

// They allow you to embed expressions directly within the string using placeholders,
// denoted by ${expression}. The dollar sign followed by curly braces ${} is used to evaluate and embed expressions
// dynamically in template literals.

// Example

let a = [1,2,3,4,5]
let b = [];

for(let i = 0; i < a.length; i++){

    if(!(a[i]%2)){
        b.push(a[i]);
    }

    for(let j = 0; j < b.length; j++) {
        console.log(b[j]);
    }

}
