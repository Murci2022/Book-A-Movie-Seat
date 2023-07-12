//click on seat change color
//count selected seats


const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat:not(.occupied)")
console.log(seats)


const count = document.getElementById("count")
const total = document.getElementById("total")
const movieSelect = document.getElementById("movie")
const ticketPrice = parseInt(movieSelect.value)

container.addEventListener("click",(e)=>{
    console.log(e.target)
    
    if(e.target.classList.contains("seat") 
    && !e.target.classList.contains("occupied")
    ){
      e.target.classList.toggle("selected");
    
    }
  
})




