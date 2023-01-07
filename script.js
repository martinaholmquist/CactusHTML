//meny
const listEl = document.getElementById("Meny");
const menyKnappEl = document.getElementById("menyKnapp"); 

function taFramKnapp(){
    listEl.classList.toggle("show");
}
menyKnappEl.addEventListener('click', taFramKnapp);




var nextStep = document.querySelector('#submitknapp');

  nextStep.addEventListener('click', function (e) {
    e.preventDefault();
    // Hide first view
    document.getElementById('kontaktformular').style.display = 'none';

    // Show thank you message element
    document.getElementById('thank_you').style.display = 'block'
  });




