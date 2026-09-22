/* Business Name Generator */

let random1 = Math.random();
let random2 = Math.random();
let random3 = Math.random();

let adjective;
let shopName;
let anotherWord;

// Adjectives
if (random1 < 0.33) {
    adjective = "Crazy";
} 
else if (random1 < 0.66) {
    adjective = "Amazing";
} 
else {
    adjective = "Fire";
}

// Shop Name
if (random2 < 0.33) {
    shopName = "Engine";
} 
else if (random2 < 0.66) {
    shopName = "Foods";
} 
else {
    shopName = "Garments";
}

// Another Word
if (random3 < 0.33) {
    anotherWord = "Bros";
} 
else if (random3 < 0.66) {
    anotherWord = "Limited";
} 
else {
    anotherWord = "Hub";
}

// console.log("Your Business Name:", adjective + " " + shopName + " " + anotherWord);
console.log(`your shop name is :  ${adjective} ${shopName} ${anotherWord} `)