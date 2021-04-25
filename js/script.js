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

scoreText = document.getElementById("score")
btnLeft = document.getElementById("btnDil")
btnRight = document.getElementById("btnDir")
score = 0
btnStart = document.getElementById("startBtn")
timer = document.getElementById("timer")
clip = document.getElementById("clip")
clipsList = [{ di: "left", time: "3640", src: "gifs/1.gif" }, { di: "left", time: "2510", src: "gifs/2.gif" }, { di: "right", time: "4210", src: "gifs/3.gif" }, { di: "right", time: "4010", src: "gifs/4.gif" }, { di: "left", time: "2710", src: "gifs/5.gif" }, { di: "right", time: "3610", src: "gifs/6.gif" },]
currentClip = {}
inputDi = 0
gameRunning = false

function start() {
    document.getElementById("titulo").style.color = "black"
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

function randomClip() {
    var random = Math.floor(Math.random() * (clipsList.length))
    currentClip = clipsList[random]
    clip.src = currentClip['src']
}

function checkDi() {
    document.getElementById("titulo").style.color = "red"
    if (inputDi == currentClip['di']) {
        console.log("ta certo")
        setTimeout(screenNext, 2000)
    }
    else {
        setTimeout(gameOver, 2000)
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
    btnStart.innerText = "Next Level"
}

function gameOver() {
    timer.innerText = "3"
    gameRunning = false;
    clip.style.visibility = "hidden";
    btnStart.style.visibility = "visible"
    btnStart.innerText = "Try Again"
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