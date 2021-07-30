
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
  },
  {
    "image": "https://previews.123rf.com/images/red33/red331112/red33111200077/11655607-cute-little-dinosaur-vector-illustration.jpg",
    "name": "Walter",
    "color": "Green",
    "specialSkill": "Dominates Halloween",
    "typeOfPet": "Dino"
  },
  {
    "image": "https://previews.123rf.com/images/dualororua/dualororua1510/dualororua151000450/46818902-cute-little-dinosaur.jpg",
    "name": "A-Rod",
    "color": "Purple",
    "specialSkill": "Can reach the top shelf at all times",
    "typeOfPet": "Dino"
  },
  {
    "image": "https://i2.wp.com/image.freepik.com/free-vector/cute-little-dinosaur-portrait-with-watercolor-effect_102385-342.jpg",
    "name": "Daisy",
    "color": "Blue",
    "specialSkill": "Makes friends with all the neighbors",
    "typeOfPet": "Dino"
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
    <button type="button" class="btn btn-success" id="Cats">Cats</button>
    <button type="button" class="btn btn-danger" id="Dinos">Dinos</button>`;

    renderToDom("#buttonContainer", domString);
};

const filterPets = (array, instructor) => {
  return array.filter(petObject => petObject.instructor === instructor);
}


const handleButtonClick = (event) => {

  if (event.target.id === "All") {
    cardBuilder(pets);
  }
  if (event.target.it === "Dogs") {
    const dogPets = filterPets(pets, event.target.id);
    cardBuilder(dogPets);
  }
  if (event.target.it === "Cats") {
    const catPets = filterPets(pets, event.target.id);
    cardBuilder(catPets);
  }
  if (event.target.it === "Dinos") {
    const dinoPets = filterPets(pets, event.target.id);
    cardBuilder(dinoPets);
  }
};

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

  renderToDom("#petContainer", domString)
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
