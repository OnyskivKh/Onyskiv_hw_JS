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