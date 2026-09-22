function step1(){
    return new Promise(function(resolve){
        resolve(8);
    });
}
console.log("khel shuru")

function step2(num){
   return new Promise(function(resolve){
        resolve(num*2);
    });
}

function step3(num){
    return new Promise(function(resolve){
    setTimeout(function(){
        resolve(num + 10);
    },2000);
    });
}

async function run(){
    let a = await step1();
    let b = await step2(a);
    let c = await step3(b);

    console.log(c); // 20
    console.log ("khel khatam")
}
run();