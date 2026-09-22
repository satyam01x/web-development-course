// The Asynchronous Shopper: Imagine you are building an online shopping
//  application. Write an asynchronous function called placeOrder that 
// simulates placing an order and returns a promise. The promise should
//  resolve with an order confirmation message after a random delay.

async function shopping() {
    return new Promise((resolve) => {
          let delay = Math.random() * 3000;

          setTimeout(() => {
            resolve("order place successfully");
          }, delay);
    });
}

shopping().then((message)=>{
    console.log(message);
});