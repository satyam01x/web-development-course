let p = new Promise(function (resolve) {
 setTimeout(function(){
    resolve("hello world");
},5000);
});

p.then(function(res){
    console.log(res);
})