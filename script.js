
const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat:not(.occupied)")
const allSeats = document.querySelectorAll(".row .seat")
const movieSelect = document.getElementById("movie")

populateUI();

const count = document.getElementById("count")
const total = document.getElementById("total")
let ticketPrice = parseInt(movieSelect.value)


//save selected movie and preise

function setMovieData(movieIndex,moviePrice){

  localStorage.setItem("selectedMovieIndex",movieIndex)
  localStorage.setItem("selectedMoviePrice",moviePrice)
}

movieSelect.sele

//Update total and count 
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll(".row .seat.selected");
  

    //copy selected seats into arr 
    const seatsIndex = [...selectedSeats].map((seat)  => [...seats].indexOf(seat));

    //saving to local storage
    localStorage.setItem("selectedSeats",JSON.stringify(seatsIndex))
   

  
    //Map through array 
    //return a new array indexe

  

  




    const selectedSeatsCount = selectedSeats.length


    count.innerHTML = selectedSeatsCount;
    total.innerHTML =selectedSeatsCount* ticketPrice

}

//Get data from localstorage and populate UI

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
   console.log(selectedSeats.length)

   //check if selectedSeats arr has elements

  if(selectedSeats.length>-0 && selectedSeats !== null ){
    console.log("works")
  }else{
    console.log("falsy")
  }

   
  


  
}

// Movie select event
movieSelect.addEventListener("change",(e)=>{
  ticketPrice = parseInt(movieSelect.value)
 setMovieData(e.target.selectedIndex,e.target.value);

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




