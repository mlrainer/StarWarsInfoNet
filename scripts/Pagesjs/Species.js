const ctnSpecies = document.getElementById("ctn-main");
const speciesPrevious = document.getElementById("species-previous");
const speciesNext = document.getElementById("species-next");

let URL_Species = "https://swapi.dev/api/species/?page=1";
let nextSpecies;
let previousSpecies;

speciesPrevious.addEventListener("click", pagePreviousSpecies);
speciesNext.addEventListener("click", pageNextSpecies);


async function fetchSpecies() {
    document.querySelector('.overlay').classList.add('active');
    let results = await fetch(URL_Species);
    const data = await results.json();
    nextSpecies = data.next;
    previousSpecies = data.previous;
    let species = data.results;
    let outPut = ' ';
    document.querySelector('.overlay').classList.remove('active');
    species.forEach(item => {
      outPut += `<div class="card card-species">
                    <h2>${item.name}</h2>
                    <h5>Classification: ${item.classification}</h5>
                    <h5>Designation: ${item.designation}</h5>
                    <h5>Language: ${item.language}</h5>
                    <h5>Homeworld: ${item.homeworld}</h5>
                    <h5>Average Height: ${item.average_height} Meters</h5>
                    <h5>Eye Colors: ${item.eye_colors}</h5>
                    <h5>Hair Colors: ${item.hair_colors}</h5>
                    <h5>Skin Colors: ${item.skin_colors}</h5>
                    <h5>Average Lifespan: ${item.average_lifespan}</h5>
                 </div>`
    })
    ctnSpecies.innerHTML = outPut;
  }
  
  function pageNextSpecies() {
    if(nextSpecies) {
      URL_Species = new URL(nextSpecies);
    }
    fetchSpecies()
      .then(response => { 
      console.log(`Success: Species`);
    })
      .catch(error => { 
      console.log(`error!`)
      console.error(error) 
    });
  }
  
  function pagePreviousSpecies() {
    if(previousSpecies) {
      URL_Species = new URL(previousSpecies);
    }
    fetchSpecies()
      .then(response => { 
      console.log(`Success: Species`);
    })
      .catch(error => { 
      console.log(`error!`)
      console.error(error) 
    });
  }