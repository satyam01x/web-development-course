var p = function(num , init, fn){
    let val = init;
    for(let i = 0; i<num.length; i++){
        val = fn(val , num[i]);
    }
    return val;
};