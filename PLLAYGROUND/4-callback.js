const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error', undefined);
        callback(undefined, [1, 2, 3, 4, 5]);
    }, 2000);
}

doWorkCallback((err,res) => {
    if(err) {
        return console.log(err);
    }
    console.log(res);

})

