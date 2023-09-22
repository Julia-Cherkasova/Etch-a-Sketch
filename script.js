//buttons
let btn_16 = document.querySelector(".b-16");
let btn_32 = document.querySelector(".b-32");
let btn_64 = document.querySelector(".b-64");
let btn_reset = document.querySelector(".reset");

//creating the grid
let grid = "";
const gridWidth = 512;

function createGrid (gridSize = 16){
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

window.onload = createGrid();

//changing color of boxes

// boxes.forEach(box => {
//     box.onmouseenter = () => {
//         box.style.background = 'black';
//     }
// });
function changeColor(){
    let boxes = document.querySelectorAll(".box");
    for (let i = 0; i < boxes.length; i++){
        boxes[i].onmousemove = () => {
            boxes[i].style.backgroundColor = "black";
        };
    }
}

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
