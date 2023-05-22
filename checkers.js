hanburgra = document.getElementsByClassName("checker")

function checkler() {
    console.log(event.target)
}


for(i=0; i < hanburgra.length; i++) {
    hanburgra[i].addEventListener("click", checkler)
}
