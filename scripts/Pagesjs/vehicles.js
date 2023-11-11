const ctnVehicles = document.getElementById("ctn-main");
const vehiclesPrevious = document.getElementById("vehicles-previous");
const vehiclesNext = document.getElementById("vehicles-next");

let URL_Vehicles = "https://swapi.dev/api/vehicles/?page=1";
let nextVehicles;
let previousVehciles;

vehiclesPrevious.addEventListener("click", pagePreviousVehicles);
vehiclesNext.addEventListener("click", pageNextVehicles);


async function fetchVehicles() {
    document.querySelector('.overlay').classList.add('active');
    let results = await fetch(URL_Vehicles);
    const data = await results.json();
    nextVehicles = data.next;
    previousVehicles = data.previous;
    let vehicles = data.results;
    let outPut = ' ';
    document.querySelector('.overlay').classList.remove('active');
    vehicles.forEach(item => {
      outPut += `<div class="card card-vehicles">
                    <h2>${item.name}</h2>
                    <h5>Model: ${item.model}</h5>
                    <h5>Vehicle Class: ${item.vehicle_class}</h5>
                    <h5>Manufacturer: ${item.manufacturer}</h5>
                    <h5>Max Atmosphering Speed: ${item.max_atmosphering_speed}</h5>
                    <h5>Length: ${item.length} Meters</h5>
                    <h5>Crew: ${item.crew}</h5>
                    <h5>Passengers: ${item.passengers}</h5>
                    <h5>Consumables: ${item.consumables}</h5>
                    <h5>Cargo Capacity: ${item.cargo_capacity}</h5>
                    <h5>Cost: ${item.cost_in_credits} Credits</h5>
                 </div>`
    })
    ctnVehicles.innerHTML = outPut;
  }
  
  function pageNextVehicles() {
    if(nextVehicles) {
      URL_Vehicles = new URL(nextVehicles);
    }
    fetchVehicles()
      .then(response => { 
      console.log(`Success: Vehicles`);
    })
      .catch(error => { 
      console.log(`error!`)
      console.error(error) 
    });
  }
  
  function pagePreviousVehicles() {
    if(previousVehicles) {
      URL_Vehicles= new URL(previousVehicless);
    }
    fetchVehicles()
      .then(response => { 
      console.log(`Success: Vehicles`);
    })
      .catch(error => { 
      console.log(`error!`)
      console.error(error) 
    });
  }