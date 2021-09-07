const myPromise = new Promise((resolve, reject) => {
    if (500 > 100) {
        resolve('its trueee!!!!!')
    }
    else {
        reject('its false !!!!!')
    }
});


myPromise.then((success) => {
    console.log(success);
})
    .catch((error) => {
        console.log(error)
    })








