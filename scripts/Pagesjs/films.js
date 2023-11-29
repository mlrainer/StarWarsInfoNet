const ctnFilms = document.getElementById("ctn-main");
const filmsPrevious = document.getElementById("films-previous");
const filmsNext = document.getElementById("films-next");

let URL_Films = "https://swapi.dev/api/films/?page=1";
let nextFilms;
let previousFilms;

filmsPrevious.addEventListener("click", pagePreviousFilms);
filmsNext.addEventListener("click", pageNextFilms);


async function fetchFilms() {
  document.querySelector('.overlay').classList.add('active');
  let results = await fetch(URL_Films);
  const data = await results.json();
  nextFilms = data.next;
  previousPeople = data.previous;
  let films = data.results;
  let outPut = ' ';
  document.querySelector('.overlay').classList.remove('active');
  films.forEach(item => {
    outPut += `<div class="card">
                  <h2>${item.title}</h2>
                  <h5>Episode: ${item.episode_id}</h5>
                  <h5>Opening Crawl: ${item.opening_crawl}</h5>
                  <h5>Director: ${item.director}</h5>
                  <h5>Producer: ${item.producer}</h5>
                  <h5>Release Date: ${item.release_date}</h5>
               </div>`
               
  })
  ctnFilms.innerHTML = outPut;
}
  
  function pageNextFilms() {
    if(nextFilms) {
      URL_Films = new URL(nextFilms);
    }
    fetchFilms()
      .then(response => { 
      console.log(`Success: Films`);
    })
      .catch(error => { 
      console.log(`error!`)
      console.error(error) 
    });
  }
  
  function pagePreviousFilms() {
    if(previousFilms) {
      URL_Films = new URL(previousFilms);
    }
    fetchFilms()
      .then(response => { 
      console.log(`Success: Films`);
    })
      .catch(error => { 
      console.log(`error!`)
      console.error(error) 
    });
  }