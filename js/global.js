
//since movement is by dragging the mouse we want to disable text highlighting
document.onselectstart=new Function ("return false");

//global variables
var canvas = document.getElementById("game-canvas");
var context = canvas.getContext('2d');
var mouse = {x: 0, y: 0};
var blockSize = canvas.width / 20;
var black = "#000000";
var lightgrey = "#aaaaaa"
context.font = blockSize + "px Arial";

var player = new player(
    "T",
    15,
    15,
    "Toranaga",
    "A large Japanese man",
    100,
    100,
    250,
    [],
    []
);

var room = new room(
    //name
    "The Forest Clearing",
    //description
    "It's a clearing in the forest, dude."
);


room.objects.push(
    new wall("#",0 , 0),
    new wall("#",1 , 0),
    new wall("#",9 , 9),
    new wall("#",9 ,10),
    new wall("#",9 ,11),
    new wall("#",10, 9),
    new wall("#",10,10),
    new wall("#",10,11),
    new wall("#",11, 9),
    new wall("#",11, 10),
    new wall("#",11, 11)
);

setInterval(function(){renderRoom(room);}, 500);