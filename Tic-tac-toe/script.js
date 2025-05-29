let current_player = "O"
let boxes = document.querySelectorAll(".box");
let wintext = document.getElementById("win")
const winningCombinations = [
  [0, 1, 2], // Top row
  [3, 4, 5], // Middle row
  [6, 7, 8], // Bottom row
  [0, 3, 6], // First column
  [1, 4, 7], // Second column
  [2, 5, 8], // Third column
  [0, 4, 8], // Diagonal
  [2, 4, 6]
];

function disableAllbuttons() {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}
function enableAllbuttons() {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
}
function checkWin() {
   for (let i = 0; i < winningCombinations.length; i++) {
    const [a,b,c] = winningCombinations[i];
    boxA = document.getElementById(a).innerText
    boxB = document.getElementById(b).innerText
    boxC = document.getElementById(c).innerText

    if (boxA !=='' && boxA === boxB && boxB === boxC) {
        console.log("Win Win Win")
        return true
    }
   }
   console.log("No win")
    return false
}
  


boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === '') {
        box.innerText = current_player
        if (checkWin()) {
            disableAllbuttons()
            wintext.innerText = `${current_player} has won!`
            wintext.classList.remove('hidden')

        }else if (!checkWin() && Array.from(boxes).every(box => box.innerText.trim() !== '')) {
         draw()
        }
        else if(current_player === "O"){
            current_player = "X"
        }else if (current_player === "X") {
            current_player = "O"
        }
    }
  });
});
function reset() {
    boxes.forEach(box=>{
        box.innerText = ""
    })
    enableAllbuttons()
    current_player="O"
    wintext.classList.add('hidden')
}
function draw() {
  wintext.innerText = "Draw"
  wintext.classList.remove('hidden')
  disableAllbuttons()
}