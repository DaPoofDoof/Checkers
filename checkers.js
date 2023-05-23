let checkerSpot = document.getElementsByClassName("checker");
let gloudiao = document.getElementById("clicksound");
let checkerPiece;
let red = document.getElementById("red");
let P1Checkers = document.getElementsByClassName("P1Checkers");

function placeCheckers() {
    for (let i = 0; i <= 12; i++) {
        checkerPiece = document.createElement('p');


        checkerPiece.textContent = i; // Update with your desired content


        checkerPiece.classList.add("P1Checkers");


        P1Checkers.appendChild(checkerPiece);
    }







    for (let i = 21; i <= 32; i++) {

        checkerPiece = document.createElement('p');

        checkerPiece.textContent = i; // Update with your desired content

        checkerPiece.classList.add("P1Checkers");

        P1Checkers.appendChild(checkerPiece);

    }
}

function checkler() {
    console.log(this.id);

    new Audio('click.wav').play();
}

function toggleDropdown() {
    var dropdownContent = document.getElementById("player1-color");
    dropdownContent.classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches(".dropdown-button")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};

for (let i = 0; i < checkerSpot.length; i++) {
    checkerSpot[i].addEventListener("click", checkler);
}

function colorChanging() {
 let color = this.id;
    

     console.log(color);
    P1Checkers[0].style.backgroundColor = color;
}

red.addEventListener('click', colorChanging);
