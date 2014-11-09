
var canvas = document.getElementById("game-canvas");
var context = canvas.getContext('2d');
var blockSize = canvas.width / 20;
context.font = blockSize + "px Arial";
var path;
var moveMob;
var player = new player(
    "T",
    15,
    15,
    "Toranaga",
    "A large Japanese man",
    100,
    100,
    100,
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