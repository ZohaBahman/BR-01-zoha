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

function cookDish(dishName, callback){
    const dish = menu[dishName];

    console.log(`starting to cook ${dishName}...`);

    setTimeout(() => {
        console.log(`${dishName} is ready!!`);
        callback(dishName);
    }, dish.time)
}

function serveDish(dishName){
    setTimeout(() => {
    console.log(`serving ${dishName}...`);
},)
}

cookDish('pizza', serveDish)