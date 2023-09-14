//creating the grid
let grid = "";

for (let i = 0; i < 1089; i++){
    grid = document.createElement("div");
    grid.classList.add("box");
    document.querySelector(".grid").appendChild(grid);
}

//changing color of boxes
let boxes = document.querySelectorAll(".box");

// boxes.forEach(box => {
//     box.onmouseenter = () => {
//         box.style.background = 'black';
//     }
// });

function changeColor(){
for (let i = 0; i < boxes.length; i++){
    boxes[i].onclick= () => {
        boxes[i].classList.add("black");
    };
}
}
changeColor();
