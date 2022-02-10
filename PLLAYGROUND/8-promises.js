const doWorkCallPromise = new Promises((resolve, reject) =>{

    setTimeout(() =>{
        resolve([1,2,3,4,5]);
        // reject('Something went wrong');
    }, 2000);
})

doWorkCallPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})