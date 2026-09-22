let p = new Promise(function(resolve){
    setTimeout(function(){
        resolve("phele yhe run hoga");
    },4000);

});

let p2 = new Promise(function(resolve){
    setTimeout(function(){
        resolve("2nd running...");
    },2000);
});

p.then(function(res){
    console.log(res);
    return p2;
})
.then(function(res){
    console.log(res);
});
