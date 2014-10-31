
var room = new room(
    //name
    "The Forest Clearing",
    //description
    "It's a clearing in the forest, dude."
);


room.objects.push(
    new wall(
        "#",
        10,
        10
    )
);

setInterval(function(){renderRoom(room);}, 500);
