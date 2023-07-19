//Declaracion
// class User {

// }
//Instanciacion
// const newUser = new User();

class user {
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
    constructor(name, age) {
        console.log('New user');
        this.name = name;
        this.age = age;
    }
    //metodos
    speak() {
        return 'Speak method';
    }
    //getters and setters
    get userAge() {
        return this.age;
    }
    get userName() {
        return this.name;
    }
    set setAge(n) {
        this.age = n;
    }
    set setName(n) {
        this.name = n;
    }
}

// const newUser = new user();
// console.log(newUser.greeting());

// const developer = new user();
// console.log(developer.greeting());

// //Constructores
// const david = new user('David');
// console.log(david.greeting());

//this

//Setters and getters
const developer1 = new user('david', 15);
console.log(developer1.userAge);
console.log(developer1.setAge = 20);