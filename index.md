<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DI ROB</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<div id="game">
    <h1 id="titulo">Acerte o DI nessa poha de up air</h1>
    <h2>Feito por TomatoRed</h2>
    <h3>obs: se vc estiver no computador, vc pode usar as teclas "A/seta esquerda", "D/seta direita" e "enter/espaço"</h3>
    <p id="timer">3</p>
    <img id="clip" src="gifs/combo.gif" alt="mario">
</div>


    <button id="startBtn" onclick="start()">Start</button>
    <button class="btnDi" id="btnDil" onclick="btnDiLeft()">Left</button>
    <p id="score">0</p>
    <button class="btnDi" id="btnDir" onclick="btnDiRight()">Right</button>

    <script src="js/script.js"></script>
</body>
</html>