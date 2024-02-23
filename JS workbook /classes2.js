class Parent {
    constructor(parentName, parentAge) {
        this.name = parentName
        this.age = parentAge
        this.lastName = 'Onyskiv'
    }

    greeting() {
        console.log('Hi')
    }

    tellName() {
        console.log(`My name is ${this.name} ${this.lastName}`)
    }

    tellAge() {
        console.log(`I am ${this.age} years old`)
    }

    tellJobTitle() {
        if (this instanceof Child){
            console.log('I don\'t have job')
        }else {
            this.jobTitle = 'QA'
            console.log(`My job position is ${this.jobTitle}`)
        }
    }
}

class Child extends Parent{  // цей клас наслідує властивості батьківського класу by extends Parent

    greeting() {
        console.log('Hi! It\'s Child greeting')
    }

    goToSchool() {
        console.log('I like to go to school!')
    }
}

const Krystyna = new Parent('Krystyna', '25')
const myChild = new Child('Lilia', '5')

Krystyna.greeting();
Krystyna.tellName();
Krystyna.tellAge();
Krystyna.tellJobTitle();
console.log(Krystyna.jobTitle)

console.log('\n')

myChild.greeting();
myChild.tellName();
myChild.tellAge();
myChild.tellJobTitle();
myChild.goToSchool();
console.log(myChild.jobTitle)