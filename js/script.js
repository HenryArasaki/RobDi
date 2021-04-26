document.addEventListener('keydown', function () {
    if (event.key === "a" || event.key === "ArrowLeft") {
        btnDiLeft()
    }
    if (event.key === "d" || event.key === "ArrowRight") {
        btnDiRight()
    }
    if (event.key === " " || event.key === "Enter") {
        if (gameRunning == false) start()
    }
})

controleConectado = 0

window.addEventListener('gamepadconnected', (event) => {
    controleConectado = 1

});


setInterval(() => {
    if(controleConectado==1){
        myGamepad = navigator.getGamepads()[0];
        if (myGamepad.axes[0] < -0.4) btnDiLeft()
        if (myGamepad.axes[0] > 0.4) btnDiRight()
        if (myGamepad.buttons[0].pressed) if (gameRunning == false) start()
        if (myGamepad.buttons[1].pressed) if (gameRunning == false) start()
        if (myGamepad.buttons[2].pressed) if (gameRunning == false) start()
        if (myGamepad.buttons[3].pressed) if (gameRunning == false) start()
    }
}, 100)

scoreText = document.getElementById("score")
btnLeft = document.getElementById("btnDil")
btnRight = document.getElementById("btnDir")
score = 0
btnStart = document.getElementById("startBtn")
timer = document.getElementById("timer")
clip = document.getElementById("clip")
clipsList = [{ di: "left", time: "3640", src: "gifs/1.gif"},
{ di: "left", time: "2510", src: "gifs/2.gif"},
{ di: "right", time: "4210", src: "gifs/3.gif"},
{ di: "right", time: "4010", src: "gifs/4.gif"},
{ di: "left", time: "2710", src: "gifs/5.gif"},
{ di: "right", time: "3460", src: "gifs/6.gif"},
{ di: "right", time: "2650", src: "gifs/7.gif"},
{ di: "left", time: "4000", src: "gifs/8.gif"},
{ di: "right", time: "3250", src: "gifs/9.gif"},
{ di: "left", time: "3900", src: "gifs/10.gif"},
{ di: "right", time: "3950", src: "gifs/11.gif"},
{ di: "left", time: "2240", src: "gifs/12.gif"},
{ di: "left", time: "2940", src: "gifs/13.gif"},
{ di: "right", time: "4250", src: "gifs/14.gif"},
{ di: "left", time: "3680", src: "gifs/15.gif"},
{ di: "right", time: "3000", src: "gifs/16.gif"},]
currentClip = {}
inputDi = 0
gameRunning = false
function randomClip() {
    var random = Math.floor(Math.random() * (clipsList.length))
    currentClip = clipsList[random]
    clip.src = currentClip['src']
}

function start() {
    navigator.getGamepads()
    document.getElementById("titulo").style.color = "white"
    document.getElementById("titulo").style.visibility = "hidden"
    scoreText.innerText = score
    gameRunning = true
    btnRight.classList.remove("btnSelected")
    btnLeft.classList.remove("btnSelected")
    inputDi = 0
    btnStart.style.visibility = "hidden"
    timer.style.visibility = "visible"
    randomClip()
    setTimeout(timer2, 1000)
    setTimeout(timer1, 2000)
    setTimeout(timer0, 3000)
    setTimeout(clipVisible, 3000)
    setTimeout(checkDi, parseInt(currentClip['time']) + 3000)
}


function checkDi() {
    if (inputDi == currentClip['di']) {
        console.log("ta certo")
        setTimeout(screenNext, 1700)
    }
    else {
        setTimeout(gameOver, 1700)
        console.log("ta errado")
    }
}

function screenNext() {
    timer.innerText = "3"
    score += 1
    scoreText.innerText = score
    gameRunning = false;
    clip.style.visibility = "hidden";
    btnStart.style.visibility = "visible"
    document.getElementById("titulo").style.visibility = "visible"
    document.getElementById("titulo").innerText = "Boa, acertou o DI"
    document.getElementById("titulo").style.color = "#7FFF00"
    btnStart.innerText = "Next Level"

}

function gameOver() {
    timer.innerText = "3"
    gameRunning = false;
    clip.style.visibility = "hidden";
    btnStart.style.visibility = "visible"
    btnStart.innerText = "Try Again"
    document.getElementById("titulo").innerText = "Lixo, errou o DI / demorou pra fazer"
    document.getElementById("titulo").style.visibility = "visible"
    document.getElementById("titulo").style.color = "red"
    score = 0

}

//funções do start
function timer2() {
    timer.innerText = "2"
}
function timer1() {
    timer.innerText = "1"
}
function timer0() {
    timer.style.visibility = "hidden"
}
function clipVisible() {
    clip.style.visibility = "visible"
}

//funções botoes DI
function btnDiLeft() {
    inputDi = "left"
    btnLeft.classList.add("btnSelected")
    btnRight.classList.remove("btnSelected")
}
function btnDiRight() {
    inputDi = "right"
    btnRight.classList.add("btnSelected")
    btnLeft.classList.remove("btnSelected")
}