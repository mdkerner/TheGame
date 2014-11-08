
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
