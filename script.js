
const container = document.querySelector(".container")
const seats = document.querySelectorAll(".row .seat:not(.occupied)")
const movieSelect = document.getElementById("movie")
const count = document.getElementById("count")
const total = document.getElementById("total")

populateUI();

let ticketPrice = parseInt(movieSelect.value)

function setMovieData(movieIndex,moviePrice){
  
  localStorage.setItem("selectedMovieIndex",movieIndex)
  localStorage.setItem("selectedMoviePrice",moviePrice)
}

function updateSelectedCount(){
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  
  const seatsIndex = [...selectedSeats].map((seat)  => [...seats].indexOf(seat));
  
  localStorage.setItem("selectedSeats",JSON.stringify(seatsIndex))
  
  const selectedSeatsCount = selectedSeats.length
  
  
  count.innerHTML = selectedSeatsCount;
  total.innerHTML =selectedSeatsCount* ticketPrice
  
}


function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
 
  
  
  
  if(selectedSeats.length>0 && selectedSeats !== null ){
  
    seats.forEach((seat,index)=>{
  
      
      
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

movieSelect.addEventListener("change",(e)=>{
  ticketPrice = parseInt(movieSelect.value)
  setMovieData(e.target.selectedIndex,e.target.value);
  
  updateSelectedCount()
})

container.addEventListener("click",(e)=>{
  
  
  if(e.target.classList.contains("seat") 
  && !e.target.classList.contains("occupied")
  ){
    e.target.classList.toggle("selected");
    updateSelectedCount()
  }
  
})

updateSelectedCount()




