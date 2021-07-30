
const pets = [

  {
    "image": "http://r.ddmcdn.com/w_606/s_f/o_1/cx_0/cy_15/cw_606/ch_404/APL/uploads/2014/06/01-kitten-cuteness-1.jpg",
    "name": "Zeus",
    "color": "Black & White",
    "specialSkill": "Can read minds",
    "typeOfPet": "Cat"
  },

  {
    "image": "https://pbs.twimg.com/media/CSVQ0WZWsAE3DJ0.jpg",
    "name": "Charley",
    "color": "White with black spots",
    "specialSkill": "Amazing bird watcher",
    "typeOfPet": "Dog",
  },

  {
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlS3V-JtQhI33Zb9hvCIZA4hwwnMmQbpXGeQ&usqp=CAU",
    "name": "Alfred",
    "color": "Orange",
    "specialSkill": "Wins every staring contest",
    "typeOfPet": "Cat"
  },

  {
    "image": "https://doglime.com/wp-content/uploads/2019/03/English-Cocker-Spaniel-Puppy.jpg",
    "name": "Frederick",
    "color": "Tan",
    "specialSkill": "Can eat your fruit loops faster than  you can",
    "typeOfPet": "Dog"
  },

  {
    "image": "https://static.boredpanda.com/blog/wp-content/uploads/2016/08/cute-kittens-69-57b32c431e8a7__605.jpg",
    "name": "Snuggles",
    "color": "Mixed Coat",
    "specialSkill": "Always knows when you're having a bad day",
    "typeOfPet": "Cat"
  },

  {
    "image": "https://uptownpuppies.com/wp-content/themes/mega-theme/images/labrador2.jpg",
    "name": "Henry",
    "color": "Chocolate",
    "specialSkill": "Thinks the best of you at all times",
    "typeOfPet": "Dog"
  }

];

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
}

//displays buttons on the DOM
const buttons = () => {
  const domString = `
    <button type="button" class="btn btn-primary" id="All">All</button>
    <button type="button" class="btn btn-secondary" id="Dogs">Dogs</button>
    <button type="button" class="btn btn-success" id="Cats">Cats</button>`;

    renderToDom("#petContainer", domString);
};


const handleButtonClick = (event) => {
  if (event.target.id === "All") {
    console.log("The All Button");
  }
  if (event.target.id === "Dogs") {
    console.log("Dogs Button");
  }
  if (event.target.id === "Cats") {
    console.log("Cats Button");
  }
}

const cardBuilder = (petsArray) => {
  let domString = "";
  petsArray.forEach((pet) => {
    domString += `
    <div class="card" style="width: 18rem;">
      <img src="${pet.image}" class="card-img-top" alt="${pet.name}">
      <div class="card-body">
        <h5 class="card-title">${pet.name}</h5>
        <p class="card-text">${pet.specialSkill}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `;
  });

  renderToDom("#buttonContainer", domString)
}


// Handles the button events

const buttonEvents = () => {
  document.querySelector("#buttonContainer")
  .addEventListener('click', handleButtonClick);
}

const init = () => {
  //this starts the app
  buttons(); //  Put DOM elements first
  buttonEvents(); //Put event listeners after
  cardBuilder(pets);
};

init();
