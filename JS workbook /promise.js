
console.log('Request data from server');

setTimeout(()=>{
    console.log('Prepare data for reply');

    const product ={
        name: 'Phone',
        price: 10000
    }
    setTimeout(()=>{
        product.status = 'inStock';
        console.log(product);
    }, 2000);

}, 5000)


console.log('Data received');


// promise

const req = new Promise((resolve, reject) =>{});



const req2 = new Promise((resolve, reject) =>{

    setTimeout(()=>{
        console.log('Prepare data for reply');

        const product ={
            name: 'Phone',
            price: 10000
        }
        setTimeout(()=>{
            product.status = 'inStock';
            console.log(product);
        }, 2000);

    }, 5000)
});

const req2 = new Promise((resolve, reject) =>{

    setTimeout(()=>{
        console.log('Prepare data for reply');

        const product ={
            name: 'Phone',
            price: 10000
        }

        resolve();

    }, 5000)
});
req2.then(() =>{
    console.log('Data received')
})

///
const req2 = new Promise((resolve, reject) =>{

    setTimeout(()=>{
        console.log('Prepare data for reply');

        const product ={
            name: 'Phone',
            price: 10000
        }

        resolve(product); // function with parameter

    }, 5000)
});

req2.then(product =>{
    setTimeout(()=>{
        product.status = 'inStock';
        console.log(product);
    }, 2000);
})

// спрощений варіант

const req2 = new Promise((resolve, reject) =>{

    setTimeout(()=>{
        console.log('Prepare data for reply');

        const product ={
            name: 'Phone',
            price: 10000
        }

        resolve(product);

    }, 5000)
});

req2.then(responce =>{
    console.log(responce);
})
// final version

const req2 = new Promise((resolve, reject) =>{

    setTimeout(()=>{
        console.log('Prepare data for reply');

        const product ={
            name: 'Phone',
            price: 10000
        }

        resolve(product);

    }, 5000)
});

console.log('Request data from server');

req2.then( response =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            response.status = 'inStock';
            resolve(response);
        }, 2000);
    })
}).then(product => {
    console.log(product)
}).then(() =>{
    console.log('Data received')
})

// .then for resolve function, .catch for reject, .finally  make a final block not taking into account what the result

let errorHappened = true;
const req2 = new Promise((resolve, reject) =>{

    setTimeout(()=>{
        console.log('Prepare data for reply');

        const product ={
            name: 'Phone',
            price: 10000
        }
        let errorText = 'Error message!!!'
        if(errorHappened){
            reject(errorText);
        }
        resolve(product);

    }, 5000)
});

console.log('Request data from server');

req2.then( response =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            response.status = 'inStock';
            resolve(response);
        }, 2000);
    })
}).then(product => {
    console.log(product)
}).then(() =>{
    console.log('Data received')
}).catch(errorText =>{
    console.log(errorText);
}).finally(() =>{
    console.log('Final block')
})

// .then for resolve function, .catch for reject


/// if(responseCode !== 200) в цьому випадку всі інші коди ркспонсу не валідні

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.status)
    .then(status => {
        if(status != 200){
            console.log(`error status is ${status}`)
        }
    })

