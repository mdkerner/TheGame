
function renderRoom(){
    //clear room
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.strokeRect(0, 0, canvas.width, canvas.height);

    //make grid
    for(var i = 0; i < canvas.width / blockSize; i++){

        context.beginPath();
        context.moveTo(block(i), block(0));
        context.lineTo(block(i), canvas.height);

        context.moveTo(block(0), block(i));
        context.lineTo(canvas.width, block(i));
        context.lineWidth = 1;

        // set line color
        context.strokeStyle = lightgrey;
        context.stroke();
        context.strokeStyle = black;
    }

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