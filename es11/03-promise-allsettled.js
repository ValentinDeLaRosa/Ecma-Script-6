const promise1 = new Promise((resolve, reject) => reject('Rejected'));
const promise2 = new Promise((resolve, reject) => resolve('Resolved'));
const Promise3 = new Promise((resolve, reject) => resolve('Resolve 2'));

//Una vez se han ejecutado todas las promesas
//Retorna la respuesta del all Settled
Promise.allSettled([promise1, promise2, Promise3])
    .then(response => console.log(response));
