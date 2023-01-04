//meny
const listEl = document.getElementById("Meny");
const menyKnappEl = document.getElementById("menyKnapp"); 

function taFramKnapp(){
    listEl.classList.toggle("show");
}
menyKnappEl.addEventListener('click', taFramKnapp);