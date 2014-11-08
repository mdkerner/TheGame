
var canvas = document.getElementById("game-canvas");
var context = canvas.getContext('2d');
var blockSize = canvas.width / 20;
context.font = blockSize + "px Arial";
var player = new player(
    "T",
    15,
    15,
    "Toranaga",
    "A large Japanese man",
    100,
    100,
    [],
    [],
    []
);