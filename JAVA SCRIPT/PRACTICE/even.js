function evenodd (num){
    return new Promise(function(resolve,reject){
        if(num % 2 == 0 ){
            resolve("Even");
        }else{
            reject("odd");
        }
    });
}

evenodd(9)
.then(function(res){
    console.log(res);
})
.catch(function(err){
    console.log(err);
});
