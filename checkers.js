let checkerSpot = document.getElementsByClassName("checker");
let gloudiao = document.getElementById("clicksound");
let checkerPiece;
let P1red = document.getElementById("P1red");
let P1green = document.getElementById("P1green");
let P1blue = document.getElementById("P1blue");
let P1yellow = document.getElementById("P1yellow");
let P1pink = document.getElementById("P1pink");
let P1purple = document.getElementById("P1purple");
let P1maroon = document.getElementById("P1maroon");
let P2red = document.getElementById("P2red");
let P2green = document.getElementById("P2green");
let P2blue = document.getElementById("P2blue");
let P2yellow = document.getElementById("P2yellow");
let P2pink = document.getElementById("P2pink");
let P2purple = document.getElementById("P2purple");
let P2maroon = document.getElementById("P2maroon");
let P1Checkers = document.getElementsByClassName("P1Checkers");
let P2Checkers = document.getElementsByClassName("P2Checkers");
let turnBox = document.getElementById("colorChangingBox");
let checkerNum;
let selectP1Color = document.getElementById("selectP1Color")
let selectP2Color = document.getElementById("selectP2Color")
let boxID = document.getElementsByClassName("checker");
let availableSpot1;
let availableSpot2;
let get


function checkler() {

    new Audio('click.wav').play();

}


function movePiece(){
    checkerNum = event.target.id;
    let parent1 = event.target.parentElement;
    parent1 = parent1.parentElement;
    parent1 = parent1.id;
    parent1 = parent1.substring(3);
    if(parent1 % 2 == 0){
        availableSpot1 = document.createElement('p');
        availableSpot1.classList.add("availableSpots");
        availableSpot1.setAttribute("id", parseInt(checkerNum) + 3);
        document.getElementById(parseInt(checkerNum) + 3).appendChild(availableSpot1);
    }




    console.log(checkerNum);
    console.log(parent1)

    // checkerNum = event.target.parentElement.id;
    // console.log(checkerNum)
    
}


function placeCheckers() {

    for (i = 1; i <= 12; i++) {

        checkerPiece = document.createElement('p');

        checkerPiece.classList.add("P1Checkers");
        checkerPiece.setAttribute("id", i);
        console.log(checkerPiece);

        document.getElementById(i).appendChild(checkerPiece);
    }

    for (x = 21; x <= 32; x++) {

        checkerPiece = document.createElement('p');

        checkerPiece.classList.add("P2Checkers");
        checkerPiece.setAttribute("id", x);

        document.getElementById(x).appendChild(checkerPiece);
    }
}





function colorChanging() {

    let colorName = this.id;
    let color = colorName.substring(2)
    console.log(color);
    let color2 = P2Checkers[0].style.backgroundColor
    console.log(color2);

    if (color != color2){
    for (i=0; i < 12; i++)
    P1Checkers[i].style.backgroundColor = color;
    }
    // P1Checkers[0].style.backgroundColor = color;
}

function colorChanging2() {

    let colorName = this.id;
    let color = colorName.substring(2)
    console.log(color);
    let color2 = P1Checkers[0].style.backgroundColor
    console.log(color2);

    if (color != color2){
        for (x=0; x < 12; x++)
        P2Checkers[x].style.backgroundColor = color;
        }
    
}





P1red.addEventListener('click', colorChanging);
P1blue.addEventListener('click', colorChanging);
P1green.addEventListener('click', colorChanging);
P1yellow.addEventListener('click', colorChanging);
P1pink.addEventListener('click', colorChanging);
P1purple.addEventListener('click', colorChanging);
P1maroon.addEventListener('click', colorChanging);
P2red.addEventListener('click', colorChanging2);
P2blue.addEventListener('click', colorChanging2);
P2green.addEventListener('click', colorChanging2);
P2yellow.addEventListener('click', colorChanging2);
P2pink.addEventListener('click', colorChanging2);
P2purple.addEventListener('click', colorChanging2);
P2maroon.addEventListener('click', colorChanging2);



placeCheckers();

eventListeners();

function eventListeners(){
    for(p=0; P1Checkers.length >p; p++){
        P1Checkers[p].addEventListener('click', movePiece);
        // checkerSpot[p].addEventListener('click', movePiece)
    }
}


console.log(P2Checkers[0])