let checkerSpot = document.getElementsByClassName("checker")
let gloudiao = document.getElementById("clicksound")
let checkerPiece;

function placeCheckers() {

    for(i=0; i <= 12; i++){


        if (i % 2 == 0) {
            h += 1
        } else { 
            return h
        }

       
        checkerPiece = document.createElement('p');
        checkerPiece.appendChild(row1[h])

        checkerPiece.classList.add ="P1Checkers"
        
        
    }

    for(i=21; i <= 32; i++){

        if (i % 2 == 0) {
            h += 1
        } else { 
            return h
        }
        
        checkerPiece = document.createElement('p');
        checkerPiece.appendChild(row1[h])

        checkerPiece.classList.add ="P1Checkers"
        
    }
}


function checkler() {
    console.log(event.target)
    new Audio('click.wav').play()



    // if (event.target == "P1Checkers") {



    // }


}


for(i=0; i < checkerSpot.length; i++) {
    checkerSpot[i].addEventListener("click", checkler)
}
