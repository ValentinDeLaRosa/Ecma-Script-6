function* iterate(array) { //El asterisco significa que es un generator
    for (let value of array) {
        yield value;
    }
}

const it = iterate(['1', '2', '3', '4', '5']);

console.log(it.next().value) //Los generators recuerdan el estado, aquí va a retornar el primero
console.log(it.next().value) //Aquí va a retornar el segundo, y así sucesivamente
console.log(it.next().value)