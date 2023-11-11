const ctnStarships = document.getElementById("ctn-main");
const starshipsPrevious = document.getElementById("starships-previous");
const starshipsNext = document.getElementById("starships-next");

let URL_Starships = "https://swapi.dev/api/starships/?page=1";
let nextStarships;
let previousStarships;

starshipsPrevious.addEventListener("click", pagePreviousStarships);
starshipsNext.addEventListener("click", pageNextStarships);


async function fetchStarships() {
    document.querySelector('.overlay').classList.add('active');
    let results = await fetch(URL_Starships);
    const data = await results.json();
    nextStarships = data.next;
    previousStarships = data.previous;
    let starships = data.results;
    let outPut = ' ';
    document.querySelector('.overlay').classList.remove('active');
    starships.forEach(item => {
      outPut += `<div class="card card-starships">
                    <h2>${item.name}</h2>
                    <h5>Model: ${item.model}</h5>
                    <h5>Star Ship Class: ${item.starship_class}</h5>
                    <h5>Manufacturer: ${item.manufacturer}</h5>
                    <h5>Hyper Drive Rating: ${item.hyperdrive_rating}</h5>
                    <h5>Max Atmosphering Speed: ${item.max_atmosphering_speed}</h5>
                    <h5>Length: ${item.length} Meters</h5>
                    <h5>Crew: ${item.crew}</h5>
                    <h5>Passengers: ${item.passengers}</h5>
                    <h5>Consumables: ${item.consumables}</h5>
                    <h5>Cargo Capacity: ${item.cargo_capacity}</h5>
                    <h5>Cost: ${item.cost_in_credits} Credits</h5>
                 </div>`
    })
    ctnStarships.innerHTML = outPut;
  }
  
  function pageNextStarships() {
    if(nextStarships) {
      URL_Starships = new URL(nextStarships);
    }
    fetchStarships()
      .then(response => { 
      console.log(`Success: Starships`);
    })
      .catch(error => { 
      console.log(`error!`)
      console.error(error) 
    });
  }
  
  function pagePreviousStarships() {
    if(previousStarships) {
      URL_Starhips = new URL(previousStarships);
    }
    fetchStarships()
      .then(response => { 
      console.log(`Success: Starships`);
    })
      .catch(error => { 
      console.log(`error!`)
      console.error(error) 
    });
  }