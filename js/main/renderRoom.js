
function renderRoom(room){
    //clear room
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(0, 0, canvas.width, canvas.height);

    var objects = room.objects;
    for(var i = 0; i < objects.length; i++){
        var object = objects[i];
        object.render(object.renderObj, object.x, object.y);
    }

    var mobs = room.mobs;
    for(var i = 0; i < mobs.length; i++){
        var mob = mobs[i];
        mob.render(mob.renderObj, mob.x, mob.y);
    }

    player.render(player.renderObj, player.x, player.y);
}