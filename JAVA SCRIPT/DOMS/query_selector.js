console.log("Harry")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"


// get element by id 


// document.getElementById("redbox").style.backgroundColor = "red"


// document.querySelector(".box").style.backgroundColor = "green"; pheli jo bhi .box class hogi uspe apply hoga

console.log(document.querySelectorAll(".box"))
// box ki id print hone ke bad for loop se backgroundcolor change karenge (sab class pe apply hoga)

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 

// this is for loop

