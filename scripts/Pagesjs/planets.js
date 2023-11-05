const ctnPlanets = document.getElementById("ctn-main");
const planetsPrevious = document.getElementById("planets-previous");
const planetsNext = document.getElementById("planets-next");

let URL_Planets = "https://swapi.dev/api/planets/?page=1";
let nextPlanets;
let previousPlanets;

planetsPrevious.addEventListener("click", pagePreviousPlanets);
planetsNext.addEventListener("click", pageNextPlanets);


async function fetchPlanets() {
    document.querySelector('.overlay').classList.add('active');
    let results = await fetch(URL_Planets);
    const data = await results.json();
    nextPlanets = data.next;
    previousPlanets = data.previous;
    let planets = data.results;
    let outPut = ' ';
    document.querySelector('.overlay').classList.remove('active');
    planets.forEach(item => {
      outPut += `<div class="card card-planet">
                    <h2>${item.name}</h2>
                    <h5>Climate: ${item.climate}</h5>
                    <h5>Terrain: ${item.terrain}</h5>
                    <h5>Population: ${item.population}</h5>
                 </div>`
    })
    ctnPlanets.innerHTML = outPut;
  }
  
  function pageNextPlanets() {
    if(nextPlanets) {
      URL_Planets = new URL(nextPlanets);
    }
    fetchPlanets()
      .then(response => { 
      console.log(`Success: Planets`);
    })
      .catch(error => { 
      console.log(`error!`)
      console.error(error) 
    });
  }
  
  function pagePreviousPlanets() {
    if(previousPlanets) {
      URL_Planets = new URL(previousPlanets);
    }
    fetchPlanets()
      .then(response => { 
      console.log(`Success: Planets`);
    })
      .catch(error => { 
      console.log(`error!`)
      console.error(error) 
    });
  }