//buttons
const btn_16 = document.querySelector(".b-16");
const btn_32 = document.querySelector(".b-32");
const btn_64 = document.querySelector(".b-64");
const btn_reset = document.querySelector(".reset");
const colorPicker = document.querySelector(".square");
const rainbowBtn = document.querySelector(".rainbow_btn");
const btn_color = document.querySelector(".color_txt");

//creating the grid
// let grid = "";
const gridWidth = 512;
const defaultSize = 16;

function createGrid (gridSize = defaultSize){
   for (let i = 0; i < gridSize**2; i++){
        let gridCell = document.createElement("div");
        Object.assign(gridCell.style, {
            height: `${(gridWidth/gridSize)}px`,
            width: `${(gridWidth/gridSize)}px`
        });
        gridCell.classList.add("box");
        gridCell.onmousemove = changeColor;
        document.querySelector(".grid").appendChild(gridCell);   
    }
}

//changing color of boxes

// boxes.forEach(box => {
//     box.onmouseenter = () => {
//         box.style.background = 'black';
//     }
// });

let currentColor = "#000000";

function changeColor(){
    let boxes = document.querySelectorAll(".box");

    for (let i = 0; i < boxes.length; i++){
        boxes[i].onmousemove = () => {
            boxes[i].style.backgroundColor = currentColor;
        };
    }
}

//changing color according to user's choice
colorPicker.addEventListener('input', function() {
    currentColor = colorPicker.value;
  })
  
btn_color.onclick = changeColor;

//rainbow colors
 function rainbowCells(){
    let boxes = document.querySelectorAll(".box");
    
    for (let i = 0; i < boxes.length; i++){
        boxes[i].onmousemove = () => {
            let red = (Math.floor(Math.random()*255));
            let green = (Math.floor(Math.random()*255));
            let blue = (Math.floor(Math.random()*255));
            let rainbowColor = (`${red}, ${green}, ${blue}`);
            currentColor = "rgb"+"(" + rainbowColor + ")";

            boxes[i].style.backgroundColor = currentColor;
        };
    }
}
rainbowBtn.addEventListener("click", rainbowCells, false);

//changing box's size
function f1 (){
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++){
        document.querySelector(".grid").removeChild(boxes[i]); 
    }
    createGrid(32);
}
btn_32.onclick = f1;

function f2 (){
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++){
        document.querySelector(".grid").removeChild(boxes[i]); 
    }
    createGrid(64);   
}
btn_64.onclick = f2;

function f3 (){
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++){
        document.querySelector(".grid").removeChild(boxes[i]); 
    }
    createGrid(16);   
}
btn_16.onclick = f3;

//Reset button
function reset(){
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++){
         boxes[i].style.backgroundColor = "white";
    };
}
btn_reset.onclick = reset;

window.onload = createGrid();
