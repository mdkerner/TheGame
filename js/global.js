
var canvas = document.getElementById("game-canvas");
var context = canvas.getContext('2d');
context.font = "20px Arial";
var player = new player(
    "T",
    30,
    30,
    "Toranaga",
    "A large Japanese man",
    100,
    100,
    [],
    [],
    []
);