let checkerSpot = document.getElementsByClassName("checker");
let gloudiao = document.getElementById("clicksound");
let checkerPiece;
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
let clickedOnPiece;
let numArray = [5,13,21,29];

function colorChanging() {
    let p1color = document.getElementById("p1colorwheel").value
    for (x=0; x < 12; x++) {
        P1Checkers[x].style.backgroundColor = p1color;
    }
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

function checkler() {

    new Audio('click.wav').play();

}

for(i=1; i<=32; i++){
    evenPiece = "availableSpot" + i;
    availableSpotArray.push(evenPiece);
    availableSpotArray[i] = document.createElement('p');
    availableSpotArray[i].classList.add("hiddenAvailableSpots");
    availableSpotArray[i].classList.remove("availableSpots");
    document.getElementById(i).appendChild(availableSpotArray[i]);
}

function checkAvaliableSpots(){
    checkerNum = event.target.id;
    clickedOnPiece = event.target;
    parent1 = event.target.parentElement;
    parent1 = parent1.parentElement;
    parent1 = parent1.id;
    parent1 = parent1.substring(3);
    checkerNum = parseInt(checkerNum);
    for(i=1; i<= 32; i++){
        availableSpotArray[i].classList.add("hiddenAvailableSpots");
        availableSpotArray[i].classList.remove("availableSpots");
    }
    // availableSpot = document.createElement('p');
    // availableSpot.classList.add("hiddenAvailableSpots");
    


    if(parent1 % 2 == 0){
        
        
        if(document.getElementById(checkerNum + 3).querySelector('.P1Checkers') === null || 
        document.getElementById(checkerNum + 4).querySelector('.P1Checkers') === null){
           
            // availableSpotArray[checkerNum + 3].classList.remove("hiddenAvailableSpots");
            // availableSpotArray[checkerNum + 3].classList.add("availableSpots");
            availableSpotArray[checkerNum + 4].classList.remove("hiddenAvailableSpots");
            availableSpotArray[checkerNum + 4].classList.add("availableSpots");
            
           
            if(document.getElementById(checkerNum + 3).querySelector('.P1Checkers') === null || 
            document.getElementById(checkerNum + 4).querySelector('.P1Checkers') === null){
               
               if(document.getElementById(checkerNum + 3).parentElement.id == document.getElementById(checkerNum + 4).parentElement.id){
                
                availableSpotArray[checkerNum + 3].classList.remove("hiddenAvailableSpots");
                availableSpotArray[checkerNum + 3].classList.add("availableSpots");
                availableSpotArray[checkerNum + 4].classList.remove("hiddenAvailableSpots");
                availableSpotArray[checkerNum + 4].classList.add("availableSpots");
               } else if (document.getElementById(checkerNum + 3).parentElement.id == document.getElementById(checkerNum + 3).parentElement.id && !numArray.includes(checkerNum)){
                availableSpotArray[checkerNum + 3].classList.remove("hiddenAvailableSpots");
                availableSpotArray[checkerNum + 3].classList.add("availableSpots");
    
               } else if(document.getElementById(checkerNum + 5).parentElement.id == document.getElementById(checkerNum + 4).parentElement.id){
                availableSpotArray[checkerNum + 4].classList.remove("hiddenAvailableSpots");
                availableSpotArray[checkerNum + 4].classList.add("availableSpots");
               }
            }
            
            
        }
        
    }else if(parent1 % 2 == 1){        
        // availableSpot.setAttribute("id", checkerNum + 4);
        // availableSpot.setAttribute("id", checkerNum + 5);
        if(document.getElementById(checkerNum + 4).querySelector('.P1Checkers') === null || 
        document.getElementById(checkerNum + 5).querySelector('.P1Checkers') === null){
           
           if(document.getElementById(checkerNum + 4).parentElement.id == document.getElementById(checkerNum + 5).parentElement.id){
            
            availableSpotArray[checkerNum + 4].classList.remove("hiddenAvailableSpots");
            availableSpotArray[checkerNum + 4].classList.add("availableSpots");
            availableSpotArray[checkerNum + 5].classList.remove("hiddenAvailableSpots");
            availableSpotArray[checkerNum + 5].classList.add("availableSpots");
           } else if (document.getElementById(checkerNum + 4).parentElement.id == document.getElementById(checkerNum + 4).parentElement.id){
            availableSpotArray[checkerNum + 4].classList.remove("hiddenAvailableSpots");
            availableSpotArray[checkerNum + 4].classList.add("availableSpots");

           } else if(document.getElementById(checkerNum + 6).parentElement.id == document.getElementById(checkerNum + 5).parentElement.id){
            availableSpotArray[checkerNum + 5].classList.remove("hiddenAvailableSpots");
            availableSpotArray[checkerNum + 5].classList.add("availableSpots");
           }
        }
        
    }
    else{
        return;
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

    document.getElementById('colorChangingBox').style.transform = "translateX(-750px)";
    document.getElementById('tableID').style.transform = "translateX(-20vw)";
    document.getElementById('pullTab').style.transform = "translateX(-38vw)";
    document.getElementById('pullTab').innerHTML = ">";
    pulledOut = 1

} else if (pulledOut == 1){
    let test1 = document.getElementById('colorChangingBox');
    document.getElementById('colorChangingBox').style.transform = "translateX(0)";
    document.getElementById('tableID').style.transform = "translateX(0)";
    document.getElementById('pullTab').style.transform = "translateX(0)";
    document.getElementById('pullTab').innerHTML = "<";
    pulledOut = 0
    
}
    
}




function movePiece() {

let poop = event.target.children[0].classList[0]
let boxPlayerCheck = event.target.id
if (poop == "availableSpots" && document.getElementById(boxPlayerCheck).querySelector(".P2Checkers") === null && document.getElementById(boxPlayerCheck).querySelector(".P1Checkers") === null){
    console.log(event.target.children.length)
   
   

    event.target.appendChild(clickedOnPiece)
   
    clickedOnPiece.id = event.target.id
     } else {
        for(p=1; p<= 32; p++){
            availableSpotArray[p].classList.add("hiddenAvailableSpots");
            availableSpotArray[p].classList.remove("availableSpots");
        }
    }


    for(i=1; i<= 32; i++){
        availableSpotArray[i].classList.add("hiddenAvailableSpots");
        availableSpotArray[i].classList.remove("availableSpots");
    }

}






for(p=1; p<=32; p++){
    document.getElementById(p).addEventListener('click', movePiece);
}
document.getElementById('p1colorwheel').addEventListener('change', colorChanging);
document.getElementById('pullTab').addEventListener('click', dropOutMenu);


placeCheckers();

eventListeners();

function eventListeners(){
    for(p=0; P1Checkers.length >p; p++){
        P1Checkers[p].addEventListener('click', checkAvaliableSpots);
        // checkerSpot[p].addEventListener('click', movePiece)
    }
}


console.log(P2Checkers[0])