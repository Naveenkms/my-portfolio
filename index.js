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


const resumeBtn = document.querySelector(".span");

const addYellow = () => {
  resumeBtn.classList.add("span-transition");
}

const removeYellow = () => {
  resumeBtn.classList.remove("span-transition");
}


const menu = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const linkElements =document.querySelectorAll(".menu ul li")

const displayMenu = () => {
  menu.classList.add("menu-transition");
  
}

hamburger.onclick = displayMenu;

const closeMenu = () => {
  menu.classList.remove("menu-transition")
}

closeBtn.onclick = closeMenu;
linkElements.forEach((link) => link.onclick = closeMenu);