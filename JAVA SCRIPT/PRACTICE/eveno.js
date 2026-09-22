function evenodd(num){
    return new Promise(function(resolve,reject){
        if(num % 2 == 0){
            resolve("even");
        }else{
            reject("odd");
        }
    });
}

evenodd(56)
.then(function(res){
    console.log(res)
})
.catch(function(err){
    console.log(err);
});
