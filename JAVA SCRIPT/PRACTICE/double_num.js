// double num using promises settime out and more 

async function double_nums(arr) {

    let promises = [];

    for(let i = 0; i < arr.length; i++){

    let p1 = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(arr[i] * 2);
        }, 500);
    });

    promises.push(p1);
}
return promises;
}

double_nums([1,2,5,6,8,6]).then((result)=>{
    Promise.all(result).then((value)=>{
        console.log(value);
    });
});