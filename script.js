//meny
const listEl = document.getElementById("Meny");
const menyKnappEl = document.getElementById("menyKnapp"); 

function taFramKnapp(){
    listEl.classList.toggle("show");
}
menyKnappEl.addEventListener('click', taFramKnapp);


/*


document.getElementById("submitknapp").addEventListener("click", function(event){
event.preventDefault()
});


const kontakt = document.getElementById("kontaktformular");
const subknapp = document.getElementById("submitknapp"); 

function hideformular(){
    kontakt.classList.toggle("hideformular");
}
subknapp.addEventListener('click', hideformular);


const kontakt2 = document.getElementById("kontaktformular");
const subknapp2 = document.getElementById("submitknapp"); 
function changeText() {
    kontakt2.innerHTML = "Tack för ditt meddelande!";
}

subknapp2.addEventListener('click', changeText);

*/



var nextStep = document.querySelector('#submitknapp');

  nextStep.addEventListener('click', function (e) {
    e.preventDefault();
    // Hide first view
    document.getElementById('kontaktformular').style.display = 'none';

    // Show thank you message element
    document.getElementById('thank_you').style.display = 'block';
  });





/*

  var nextStep = document.querySelector('#nextStep');

  nextStep.addEventListener('click', function (e) {
    e.preventDefault();
    // Hide first view
    document.getElementById('my_form').style.display = 'none';

    // Show thank you message element
    document.getElementById('thank_you').style.display = 'block';
  });

*/

