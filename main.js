const mediaQuery = window.matchMedia("(max-width:  960px)");
const buttons = document.querySelectorAll(".action-button");
const images = document.querySelectorAll(".image");

// checkfor media query

//set innitial state of the components
const init = () => {
  buttons[0].classList.add("focused");
  buttons[0].classList.remove("button-hover");
  images[0].style.display = "block";
};

init();

//function to add 'focused' class to target elemetn
const addFocus = element => {
  element.add("focused");
  element.remove("button-hover");
};

function handleclick(e, index) {
  const targetClassLIst = e.target.classList;
  //hide every image
  images.forEach(element => {
    element.style.display = "none";
  });
  //set to default class in every button
  buttons.forEach(element => {
    element.classList.remove("focused");
    element.classList.add("button-hover");
  });
  //add 'focused' class to clicked button
  addFocus(targetClassLIst);
  //display image on button click
  images[index].style.display = "block";
}

//click event handleer to the buttons
buttons.forEach((element, index) => {
  element.addEventListener("click", function() {
    handleclick(event, index);
  });
});

