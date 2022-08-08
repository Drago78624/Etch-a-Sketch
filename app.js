"use strict";

const gridContainer = document.querySelector(".grid-container");
const btns = document.querySelectorAll("button");
const colorPicker = document.querySelector(".color");

const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

let color = "purple"

function populateDivs(boxSize) {
  let boxWidth = 500 / boxSize;
  let numOfBoxes = boxSize * boxSize;
  gridContainer.innerHTML = "";
  for (let i = 0; i < numOfBoxes; i++) {
    const div = document.createElement("div");
    div.style.width = `${boxWidth}px`;
    div.style.height = `${boxWidth}px`;
    div.classList.add("box");
    gridContainer.appendChild(div);
  }
}

populateDivs(16);

colorPicker.addEventListener("input", ()=>{
  color = colorPicker.value
  addingEventListener(color)
})

function addingEventListener(color) {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
      box.style.backgroundColor = color;
    });
  });
}

addingEventListener(color);


btns.forEach((btn) => {
  btn.addEventListener("click", () => {
      const boxes = document.querySelectorAll(".box");
    if (btn.classList.contains("reset")) {
      boxes.forEach((box) => {
        box.style.backgroundColor = "lightgray";
      });
      color = colorPicker.value
    } else if (btn.classList.contains("size")) {
      const userInput = Number(
        prompt("enter the number of boxes (max: 100) : ")
      );
      if (userInput <= 100) {
        populateDivs(userInput);
        addingEventListener("purple");
      } else {
        console.log("you want to crash or what !?");
      }
    } else if (btn.classList.contains("rainbow")) {
        boxes.forEach((box) => {
            box.addEventListener("mouseover", () => {
                for(let i = 0, length = colorArray.length; i < length; i++){
                    const randomColor = Math.floor(Math.random() * length)
                    color = colorArray[randomColor]
                    box.style.backgroundColor = color;
                }
            });
        });
    }else if(btn.classList.contains("eraser")){
      addingEventListener("lightgray")
  }
  });
});
