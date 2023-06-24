

// Function to toggle the bar
function geeksforgeeks() {
  let x = document.getElementById("menu_side");
   
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}

// Function to toggle the plus menu into minus
function myFunction(x) {
  x.classList.toggle("hamberg");
}