let checkerSpot = document.getElementsByClassName("checker");
let gloudiao = document.getElementById("clicksound");
let checkerPiece;
let P1red = document.getElementById("red");
let P1green = document.getElementById("green");
let P1blue = document.getElementById("blue");
let P1yellow = document.getElementById("yellow");
let P1pink = document.getElementById("pink");
let P1purple = document.getElementById("purple");
let P1maroon = document.getElementById("maroon");
let P2red = document.getElementById("red");
let P2green = document.getElementById("green");
let P2blue = document.getElementById("blue");
let P2yellow = document.getElementById("yellow");
let P2pink = document.getElementById("pink");
let P2purple = document.getElementById("purple");
let P2maroon = document.getElementById("maroon");
let P1Checkers = document.getElementsByClassName("P1Checkers");
let P2Checkers = document.getElementsByClassName("P2Checkers");
let turnBox = document.getElementById("colorChangingBox");

function checkler() {

    console.log(this.id);

    new Audio('click.wav').play();

}


function movePiece(test){
    console.log(test);
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






function colorChanging() {

    let colorName = this.id;
    let color = colorName.substring(1)
    let color2 = P2Checkers[0].style.backgroundColor
    console.log(color);

    if (!color == color2){
    for (i=0; i < 12; i++)
    P1Checkers[i].style.backgroundColor = color;
    }
    // P1Checkers[0].style.backgroundColor = color;
}

function colorChanging2() {

    let color = this.id;

    console.log(color);

    P1Checkers[0].style.backgroundColor = color;
    
    // P1Checkers[0].style.backgroundColor = color;
}

P1red.addEventListener('click', colorChanging);
P1blue.addEventListener('click', colorChanging);
P1green.addEventListener('click', colorChanging);
P1yellow.addEventListener('click', colorChanging);
P1pink.addEventListener('click', colorChanging);
P1purple.addEventListener('click', colorChanging);
P1maroon.addEventListener('click', colorChanging);
P2red.addEventListener('click', colorChanging);
P2blue.addEventListener('click', colorChanging);
P2green.addEventListener('click', colorChanging);
P2yellow.addEventListener('click', colorChanging);
P2pink.addEventListener('click', colorChanging);
P2purple.addEventListener('click', colorChanging);
P2maroon.addEventListener('click', colorChanging);
placeCheckers();


function eventListeners(){
    for(p=1; P1Checkers.length >p; p++){
        P1Checkers[p].addEventListener('click', movePiece(p))
    }
}