const users = {
    valentin: {
        country: 'MX'
    },
    wendy: {
        country: 'Dog'
    }
}

console.log(users.wendy.country);
console.log(users?.developer?.country); //El signo de pregunta significa algo como "Si existe", le pregunta al compilador si ese objeto existe, si no existe regresa undefined
