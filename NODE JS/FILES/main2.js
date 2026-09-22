// we can do same operation using ecma do type = module in package.json

import { readFile, writeFile } from "fs"
import fs from "fs/promises"

let a = await fs.readFile("satyam.txt")

// let b = await fs.writeFile("satyam.txt" , "writing from main2.js (ecma script)")
// console.log(a.toString() , b )

let c = await fs.appendFile("satyam.txt" , "\n i append this from ecma script" , (e , d) => {
    console.log(c)
} )