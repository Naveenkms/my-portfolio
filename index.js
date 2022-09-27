//========================= SCROLL ANIMATION ====================
let observer = new IntersectionObserver( (entries) => {
  entries.forEach( (entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
    } 
})
}, {
  threshold: 0.8
})

let target = document.querySelectorAll(".hidden");
target.forEach( (el) => observer.observe(el))


//========================= NAV-SECTION ====================
//====== function to animate resume button ======
const resumeBtn = document.querySelector(".span");
// function definition
const addYellow = () => {
  resumeBtn.classList.add("span-transition");
}

const removeYellow = () => {
  resumeBtn.classList.remove("span-transition");
}
// function call
// resumeBtn.onmouseover = animateBtn


//====== function to show menubar on smallscreen ======
const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
// function definition
const displayMenu = () => {
  menu.classList.add("menu-transition");
}
// function call
hamburger.onclick = displayMenu;

// function definition
const closeMenu = () => {
  menu.classList.remove("menu-transition")
}

// function call
closeBtn.onclick = closeMenu;