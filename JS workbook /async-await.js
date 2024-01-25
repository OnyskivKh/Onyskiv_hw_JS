// async function(){
//
// }

const annonimAsyncFunc = async() => {}
 const  asyncFunc = async() =>{
    return 'text from async func'
 }
 console.log(asyncFunc());

asyncFunc().then(text =>{
    console.log(text)
})

//

const timeoutPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log('2 sec wait');
            resolve();
        }, 2000)

    })
}
const asyncFn = async() => {
    console.log('Send request')
    await timeoutPromise();
    console.log('data received')
}

asyncFn();
