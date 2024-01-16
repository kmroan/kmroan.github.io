const gridSlider = document.querySelector("#gridSlider");
const gridCtr = document.querySelector("#grid");
const lblgridSlider = document.querySelector("#lblGridSlider");

//Set slider lable to curernt value
drawGrid(16)
gridSlider.addEventListener("input", (e) => {
    lblgridSlider.textContent = e.target.value;
    drawGrid(e.target.value)
})

function drawGrid(gridSize) {

    // Clear existing grid?
    if (gridCtr.hasChildNodes()) {
        while (gridCtr.firstChild) {
            gridCtr.removeChild(gridCtr.firstChild)
        }
    }
    
    for (let i = 0; i < (gridSize); i++) {
        const gridBox = document.createElement('div');
        gridBox.className = "gridBox"
        gridCtr.appendChild(gridBox);
    }

}

console.log(
    gridCtr.children.length
)
