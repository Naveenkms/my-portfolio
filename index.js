//============================ HEADER-SECTION ==================================

// to add color to first nav link before scrolling
const firstChild = document.querySelector(".first-navchild");

firstChild.classList.add("nav-active");

// Function to change color of navigation links during scroll through each section
document.getElementById("main").addEventListener("scroll", () => {

  // Function definition
  const changeNavColor = (section, index) => {
    const sectionPositionTop = section.getBoundingClientRect().top;

    const sectionPositionBottom = section.getBoundingClientRect().bottom;

    const screenPosition = window.innerHeight;

    const list = document.querySelectorAll(".nav_link")[index].classList;

    // add class when section top is above half of the screen and remove when not
    sectionPositionTop < screenPosition / 2
      ? list.add("nav-active")
      : list.remove("nav-active");

    // remove class when section bottom is above half of the screen
    sectionPositionBottom < screenPosition / 2 && list.remove("nav-active");
  };

  const sections = document.querySelectorAll("section");

  //   function call
  sections.forEach(changeNavColor);

});


// var styles = window.getComputedStyle(element,':before')
// 

// const element = document.getElementById("test");

// console.log(value);

// for (x in cssObj) { 
//     let text = "";
//   cssObjProp = cssObj.item(x)
//   text += cssObjProp + " = " + cssObj.getPropertyValue(cssObjProp);
//   console.log(text);
// }



// var content = styles['content'];
// styles.style.border="none";

// let d = document.querySelector('#about h2')
// d.addEventListener('animationend', function(ev) {
//    if (ev.animationName === 'typing') {
//     var element = document.querySelector('#about h2');
//     const cssObj = window.getComputedStyle(element, ':before');
    
//      cssObj["border-left-width"] = "0px";
//    }
// })