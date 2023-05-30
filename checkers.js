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
let availableSpotArray = ["filler"];
let evenPiece;
let parent1;
let pulledOut = 1;



function checkler() {

    new Audio('click.wav').play();

}


function checkAvaliableSpots(){
    checkerNum = event.target.id;
    parent1 = event.target.parentElement;
    parent1 = parent1.parentElement;
    parent1 = parent1.id;
    parent1 = parent1.substring(3);
    checkerNum = parseInt(checkerNum);
    availableSpot = document.createElement('p');
    availableSpot.classList.add("hiddenAvailableSpots");
    for(i=1; i<=32; i++){
        evenPiece = "availableSpot" + i;
        availableSpotArray.push(evenPiece);
        availableSpotArray[i] = document.createElement('p');
        availableSpotArray[i].classList.add("hiddenAvailableSpots");
        availableSpotArray[i].classList.remove("availableSpots");
        document.getElementById(i).appendChild(availableSpotArray[i]);
    }


    if(parent1 % 2 == 0){
        
        
        availableSpot.setAttribute("id", checkerNum + 3);
        if(document.getElementById(checkerNum + 3).hasChildNodes()){
            return;
        }else{
            document.getElementById(checkerNum + 3).appendChild(availableSpot);
        }
        
    }else if(parent1 % 2 == 1){        
        // availableSpot.setAttribute("id", checkerNum + 4);
        // availableSpot.setAttribute("id", checkerNum + 5);
        if(document.getElementById(checkerNum + 4).hasChildNodes > 1 || document.getElementById(checkerNum + 5).hasChildNodes > 1){
           
            return;
        }else{

            availableSpotArray[checkerNum + 4].classList.remove("hiddenAvailableSpots");
            availableSpotArray[checkerNum + 4].classList.add("availableSpots");
            availableSpotArray[checkerNum + 5].classList.remove("hiddenAvailableSpots");
            availableSpotArray[checkerNum + 5].classList.add("availableSpots");
        }
        
    }


    
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

function dropOutMenu() {


   if (pulledOut == 0){

    document.getElementById('colorChangingBox').style.transform = "translateX(-900px)";
    document.getElementById('tableID').style.transform = "translateX(-400px)";
    document.getElementById('pullTab').style.transform = "translateX(-750px)";
    pulledOut = 1

} else if (pulledOut == 1){
    let test1 = document.getElementById('colorChangingBox');
    document.getElementById('colorChangingBox').style.transform = "translateX(0)";
    document.getElementById('tableID').style.transform = "translateX(0)";
    document.getElementById('pullTab').style.transform = "translateX(0)";
    pulledOut = 0
    
}
    
}



function colorChanging() {

    let colorName = this.id;
    let color = colorName.substring(2)
    console.log(color);
    let color2 = P2Checkers[0].style.backgroundColor;
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
document.getElementById('pullTab').addEventListener('click', dropOutMenu)


placeCheckers();

eventListeners();

function eventListeners(){
    for(p=0; P1Checkers.length >p; p++){
        P1Checkers[p].addEventListener('click', checkAvaliableSpots);
        // checkerSpot[p].addEventListener('click', movePiece)
    }
}


console.log(P2Checkers[0])