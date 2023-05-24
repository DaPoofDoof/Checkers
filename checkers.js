let checkerSpot = document.getElementsByClassName("checker");
let gloudiao = document.getElementById("clicksound");
let checkerPiece;
let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let yellow = document.getElementById("yellow");
let pink = document.getElementById("pink");
let purple = document.getElementById("purple");
let maroon = document.getElementById("maroon");
let P1Checkers = document.getElementsByClassName("P1Checkers");
let turnBox = document.getElementById("colorChangingBox");

function checkler() {

    console.log(this.id);

    new Audio('click.wav').play();

}




function placeCheckers() {

    for (i = 1; i <= 12; i++) {

        checkerPiece = document.createElement('p');

        checkerPiece.classList.add("P1Checkers");

        document.getElementById(i).appendChild(checkerPiece);
    }

    for (x = 21; x <= 32; x++) {

        checkerPiece = document.createElement('p');

        checkerPiece.classList.add("P2Checkers");

        document.getElementById(x).appendChild(checkerPiece);
    }
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

    turnBox.style.backgroundColor = color;
    
    // P1Checkers[0].style.backgroundColor = color;
}

function colorChanging2() {

    let color = this.id;

    console.log(color);

    document.getElementById('colorTitle').style.backgroundColor = color;
    
    // P1Checkers[0].style.backgroundColor = color;
}

red.addEventListener('click', colorChanging);
blue.addEventListener('click', colorChanging);
green.addEventListener('click', colorChanging);
yellow.addEventListener('click', colorChanging);
pink.addEventListener('click', colorChanging);
purple.addEventListener('click', colorChanging);
maroon.addEventListener('click', colorChanging);
placeCheckers();
