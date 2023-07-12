//click on seat change color


const btn = document.querySelector("button")

btn.addEventListener("click",function(){
    console.log("click")
})

const seats = document.querySelectorAll(".seat")

console.log(seats)

seats.forEach((seat)=>{
    seat.addEventListener("click",function(){
        seat.classList.add("selected")
        
    })
})