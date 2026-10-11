//  middleware syntax 

// app.use((req, res, next) => {
//     console.log("Middleware executed");
//     next();
// });

// use of it  -- >


const express = require("express");

const app = express();

const port = 3000;

// Middleware
app.use((req, res, next) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url );

    if(req.url == "/about"){
        console.log("User visited about page ")
    }
    // res.send("if i send response here code will end here.")
    // if i can't do next(); its stucked here!
    next();
});

// Route
app.get("/", (req, res) => {
    res.send("Welcome to Express!");
});

app.get("/about", (req, res) => {
    res.send("About page");
});

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});
