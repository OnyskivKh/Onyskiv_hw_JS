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
        this.jobTitle = 'QA'
        console.log(`My job position is ${this.jobTitle}`)
    }
}

class Child extends Parent{  // цей клас наслідує властивості батьківського класу

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