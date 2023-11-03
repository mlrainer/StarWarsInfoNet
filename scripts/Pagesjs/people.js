// Variables People
const peoplePrevious = document.getElementById("people-previous");
const peopleNext = document.getElementById("people-next");

let URL_People = "https://swapi.dev/api/people/?page=1";
let nextPeople;
let previousPeople;

peoplePrevious.addEventListener("click", pagePreviousPeople);
peopleNext.addEventListener("click", pageNextPeople);

// Functions People
async function fetchPeople() {
  document.querySelector('.overlay').classList.add('active');
    let results = await fetch(URL_People);
    const data = await results.json();
    nextPeople = data.next;
    previousPeople = data.previous;
    let people = data.results;
    let outPut = ' ';
  document.querySelector('.overlay').classList.remove('active');  
    people.forEach(item => {
      outPut += `<div class="card card-people">
                    <h2>${item.name}</h2>
                    <h5>Gender: ${item.gender}</h5>
                    <h5>Birth Year: ${item.birth_year}</h5>
                    <h5>Height: ${item.height}</h5>
                    <h5>Hair Color: ${item.hair_color}</h5>
                    <h5>Skin Color: ${item.skin_color}</h5>
                    <h5>Eye Color: ${item.eye_color}</h5>
                 </div>`
    })
    ctnPlanets.innerHTML = outPut;
  }
  
  function pageNextPeople() {
    if(nextPeople) {
      URL_People = new URL(nextPeople);
    }
    fetchPeople()
      .then(response => { 
      console.log(`Success: People`);
    })
      .catch(error => { 
      console.log(`error!`)
      console.error(error) 
    });
  }
  
  function pagePreviousPeople() {
    if(previousPeople) {
      URL_People = new URL(previousPeople);
    }
    fetchPeople()
      .then(response => { 
      console.log(`Success: People`);
    })
      .catch(error => { 
      console.log(`error!`)
      console.error(error) 
    });
  }