// Triangle Perimeter Assignment Start Code

let calcBtn = document.getElementById('calc');
calcBtn.addEventListener("click", btnClicked)

function btnClicked() {

    let xA = +document.getElementById("xA").value
    let yA = +document.getElementById("yA").value
    let xB = +document.getElementById("xB").value
    let yB = +document.getElementById("yB").value
    let xC = +document.getElementById("xC").value
    let yC = +document.getElementById("yC").value

    let ablen = document.getElementById("ablen").innerHTML = calcDist([xA, yA], [xB, yB])
    let aclen = document.getElementById("aclen").innerHTML = calcDist([xA, yA], [xC, yC])
    let bclen = document.getElementById("bclen").innerHTML = calcDist([xB, yB], [xC, yC])  
    
    document.getElementById("perimeter").innerHTML = ablen + aclen + bclen

    

}



function calcDist(point1, point2) {
    return Math.sqrt((point1[0] - point2[0])**2 + (point1[1] - point2[1])**2)
}
