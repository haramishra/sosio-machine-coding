
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

function handleclick(e, index) {
  //hide every image
  images.forEach(element => {
    element.style.display = "none";
  });
  //set to default class in every button
  buttons.forEach(element => {
    element.classList.replace("focused", "button-hover");
  });
  //add 'focused' class to clicked button
  e.target.classList.replace("button-hover", "focused");
  //display image on button click
  images[index].style.display ='block';
}

//click event handleer to the buttons
buttons.forEach((element, index) => {
  element.addEventListener("click", function() {
    handleclick(event, index);
  });
});
