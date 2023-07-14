


const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat:not(.occupied)")
const movieSelect = document.getElementById("movie")

const count = document.getElementById("count")
const total = document.getElementById("total")
let ticketPrice = parseInt(movieSelect.value)
console.log("ticketP",ticketPrice)

//Update total and count 
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
    console.log(selectedSeats)

    //copy selected seats into arr 
    //Map through array 
    //return a new array indexes
    const seatsIndex = [...selectedSeats].map(function(seat){
      return [...seats].indexOf(seat)
    })

    console.log(seatsIndex)

  




    const selectedSeatsCount = selectedSeats.length


    count.innerHTML = selectedSeatsCount;
    total.innerHTML =selectedSeatsCount* ticketPrice

}
 
// Movie select event
movieSelect.addEventListener("change",(e)=>{
  ticketPrice = parseInt(movieSelect.value)
  console.log("update",ticketPrice)
  updateSelectedCount()
})

// Seat click event 

container.addEventListener("click",(e)=>{
    
    
    if(e.target.classList.contains("seat") 
    && !e.target.classList.contains("occupied")
    ){
      e.target.classList.toggle("selected");
      updateSelectedCount()
    }
  
})




