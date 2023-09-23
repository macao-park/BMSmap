


// 필터먹이기

if (filter === '*') {
    animals.forEach(animal => animal.classList.remove('hidden'));
  }
  
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
  
  
  
  // 햄버거 클릭하면 미니메뉴 나오기
  
  function show() {
    let x = document.getElementById("menu_mini");
     
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
  }