const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Resolved');
        }
        else {
            reject('rejected');
        }
    })
}

anotherFunction()
    .then(response => console.log(response)) //Se pueden tener varios Then
    .catch(err => console.log(err));
