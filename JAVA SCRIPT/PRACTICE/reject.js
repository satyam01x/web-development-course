let p = new Promise(function (resolve, reject) {
    let error = true;
    if (error) {
        reject("error aa gaya abhaiiii");
    } else {
        resolve("not an error");
    }

});

p.then(function(res){
    console.log("error hai bhai: ", res);
})
.catch(function(err){
    console.log("not :", err);
});
