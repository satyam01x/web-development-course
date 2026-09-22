// add until negative number is come 

function add( arr ){
    let sum = 0 ;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0 ){
            break;
        }else{
            sum = sum + arr[i];
        }
    }
    return sum;
}
console.log(add([12 ,26,-5,6]));