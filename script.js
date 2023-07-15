
const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat:not(.occupied)")
const movieSelect = document.getElementById("movie")
const count = document.getElementById("count")
const total = document.getElementById("total")

populateUI();

let ticketPrice = parseInt(movieSelect.value)


//save selected movie and preise

function setMovieData(movieIndex,moviePrice){
  
  localStorage.setItem("selectedMovieIndex",movieIndex)
  localStorage.setItem("selectedMoviePrice",moviePrice)
}

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
  console.log("1",selectedSeats.length)
  
  //check if selectedSeats arr has elements
  
  if(selectedSeats.length>0 && selectedSeats !== null ){
    console.log("?",selectedSeats)
    seats.forEach((seat,index)=>{
      console.log("seat",seat)
     
      //const storedSeat = seats[seat]

      //console.log("storedSeat",storedSeat)
      console.log("seat",selectedSeats)
      
      
      if(selectedSeats.indexOf(index)>-1){
        seat.classList.add("selected")
        
      }
      
    })
  }
  const selectedMovieIndex = localStorage.getItem("selectedMovie")

  if(selectedMovieIndex !==null){
    movieSelect.selectedIndex = selectedMovieIndex   
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

// initial count and total set

updateSelectedCount()




