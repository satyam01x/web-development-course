// npm install ejs

// Maan lo tum student ki website bana rahe ho. Har student ka naam alag hai.
// Without EJS, har student ke liye manually HTML change karna padega. ejs give variables value in main code ;

const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    // first naam ki file se response render ho kr name or course ki value ko html me put karega 
    res.render("first", {
        name: "Satyam Bhai ",
        course: "B.Tech CSE"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// Code	Meaning
// <%= name %>	Variable ki value HTML mein show karta hai, escaped output ke saath
// <% JavaScript %>	JavaScript logic run karta hai, output directly show nahi karta
// res.render()	EJS template ko render karke response bhejta hai
// app.set("view engine", "ejs")	Express ko EJS use karne ke liye configure karta hai