const gridSlider = document.querySelector("#gridSlider");
const gridCtr = document.querySelector("#gridCtr");
const grid = document.querySelector("#grid");
const lblgridSlider = document.querySelector("#lblGridSlider");
const btnReset = document.querySelector("#btnReset");
const btnRed = document.querySelector("#btnRed");
const btnRandom = document.querySelector("#btnRandom");

let color = "black"

drawGrid(16)
gridSlider.addEventListener("input", (e) => {
    lblgridSlider.textContent = e.target.value;
    drawGrid(e.target.value)
})

function drawGrid(gridSize) {

    // Clear existing grid?
    if (grid.hasChildNodes()) {
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild)
        }
    }

    for (let i = 0; i < (gridSize**2); i++) {
        const gridBox = document.createElement('div');
        gridBox.style.flex = `1 0 calc(100% / ${gridSize})`
        gridBox.className = "gridBox"
        grid.appendChild(gridBox);
    }

}

btnReset.addEventListener('click',()=>{drawGrid(gridSlider.value)})
btnRed.addEventListener('click',() => { color = "red"})
btnBlack.addEventListener('click',() => { color = "black"})
btnRandom.addEventListener('click',() => { 
    color = "random"
    //color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
})
grid.addEventListener("mouseover",(e) => {
    if (color === "random") {
        color = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
        console.log(color)
    } else {
        e.target.style.background = color;
    }
    
})