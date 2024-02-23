
// об'ява класу
class Comment {

    constructor(text) {
        this.textContent = text
        this.likesQuantity = 0
    }
    addLike(likes = 0) {
        if (likes) {
            this.likesQuantity += likes
        } else {
            this.likesQuantity += 1
        }
    }

        static mergeComments(firstComment, secondComment){
            return `${firstComment} ${secondComment}`
    }
}

// const  firstComment = new Comment ('This is my first comment')
//
// firstComment.mergeComments('qwerty', '12345')// exeption

    let mergedText = Comment.mergeComments('First', 'Last')
    console.log(mergedText)
// екземпляр класу

//const firstComment = new Comment('This is my first comment')
//
// console.log(firstComment)
// console.log(firstComment.textContent)
// console.log(firstComment.likesQuantity)
//
// firstComment.addLike();
//
// console.log(firstComment)
// console.log(firstComment.textContent)
// console.log(firstComment.likesQuantity)


// let someComment = { textContent: 'This is my first comment', likesQuantity: 1 }
// someComment.likesQuantity = 2
// console.log(someComment)

// const secondComment = new Comment('This is my second comment')
//
// firstComment.addLike();
// secondComment.addLike(5);
//
//
// console.log(`firstComment = ${firstComment.likesQuantity}`)
// console.log(`secondComment = ${secondComment.likesQuantity}`)


// const  firstComment = new Comment ('This is my first comment')
//
// firstComment.mergeComments('qwerty', '12345')// exeption

