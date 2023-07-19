//arrays destructuring
let fruits = ['Sandia', 'Apple'];
let [a, b] = fruits;
console.log(a,b);


//Object destructuring
let user = {userName: 'Valentin', age: 29};
//let {userName, age } = user;
console.log(user.age);


//Spread operator
let person = {name: 'Valentin',
              age: 29};
let country = 'CO';

let data = {id: 1, ...person, country}; //... me trae los atributos desglozados, es decir, los propaga
console.log(data);

//Parametros rest
function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(2, 'CL', 5, 4, 'Valentin')