function filterAnimals(e) {
    const animals = document.querySelectorAll(".list div"); // select all animal divs
    let filter = e.target.dataset.filter; // grab the value in the event target's data-filter attribute
    animals.forEach(animal => {
      animal.classList.contains(filter) // does the animal have the filter in its class list?
      ? animal.classList.remove('hidden') // if yes, make sure .hidden is not applied
      : animal.classList.add('hidden'); // if no, apply .hidden
    });
  };


  // code to add:
if (filter === '*') {
    animals.forEach(animal => animal.classList.remove('hidden'));
  }
  
  // full JS code:
  function filterAnimals(e) {
    const animals = document.querySelectorAll(".list div");
    let filter = e.target.dataset.filter;
    if (filter === '*') {
      animals.forEach(animal => animal.classList.remove('hidden'));
    }  else {
      animals.forEach(animal => {
        animal.classList.contains(filter) ? 
        animal.classList.remove('hidden') : 
        animal.classList.add('hidden');
      });
    };
  };