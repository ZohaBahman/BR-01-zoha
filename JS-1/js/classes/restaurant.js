const menu = {
    pizza: {
        name: 'Pizza',
        time: 3000
    },
    burger: {
        name: 'burger',
        time: 2500
    },
    salad: {
        name: 'salad',
        time: 1000
    }
};

function cookDish(dishName, callback1, callback2){
    const dish = menu[dishName];

    console.log(`starting to cook ${dishName}...`);

    setTimeout(() => {
        console.log(`${dishName} is ready!!`);
        callback(dishName);
    }, dish.time)
}

function serveDish(dishName, callback){
    setTimeout(() => {
    console.log(`serving ${dishName}...`);
    callback(dishName)
}, 2000)
}

 
cookDish('pizza', serveDish);



const myPromise = new Promise((resolve, reject)=> {
    setTimeout(() => {
    if(true) {
        resolve('All good')
    } else {
        reject('It failed')
    }
    }, 2000) 
})

console.log(myPromise);