// Vareables
const items = document.querySelectorAll(".slider_item");
const itemCount = items.length - 1;
const nextItem = document.querySelector(".next");
const prevItem = document.querySelector(".previonus")
const menu_bar = document.querySelector(".hamburger")
const navbar = document.querySelector(".nav-links")

// Event
nextItem.addEventListener("click", showNext);
prevItem.addEventListener("click", showPrev);
menu_bar.addEventListener("click", forMenu);

// Function
let count = 0;
 function showNext() {
  items[count].classList.remove("active");
  if(count < itemCount) {
    count++;
    console.log(count);
  } else {
    count = 0;
  }
  items[count].classList.add("active")
 }

 function showPrev() {
  items[count].classList.remove("active");
  if(count > 0) {
    count--;
    console.log(count);
  } else {
    count = itemCount;
  }
  items[count].classList.add("active")

 }

function forMenu () {
  navbar.classList.toggle( "shows")
}