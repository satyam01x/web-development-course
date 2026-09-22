const { error } = require("console")
const fs = require("fs")

// console.log(fs)

// fs.writeFielSync("satyam.txt" , "satyam is a good boy")

fs.writeFile("satyam.txt" , "satyam is a badmoshhh " ,()=>{
    console.log("done")
    fs.readFile("satyam.txt" , (error , data) =>{
        console.log(error , data.toString())
    })
})

fs.appendFile("satyam.txt" , " i append this " , (e , d) =>{
    console.log(d)
})

console.log("ending")