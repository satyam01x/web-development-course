// we can import module with the word "required" it is common js
// to using common js -> in package.json type = "common js" 
const fs = require("fs");

console.log("Hello Node.js");

// How to use Ecma Script
// to using ecma script -> in package.json type = "module" (by default type = nothing)
import fs from "fs";

console.log("Hello Node.js");