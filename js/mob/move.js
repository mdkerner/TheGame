
function move(mob, x, y){
    var position = checkCollision(mob, x, y)
    mob.x = position.x;
    mob.y = position.y;
}

//will return object {x,y} with closest valid position.
function checkCollision(mob, x, y){
    //room should be a global variable containing the current room
    for(var i = 0; i < room.objects.length; i++){
        var obj = room.objects[i];
        if(obj.x === x && obj.y === y ){
            x = x > mob.x ? x-1 : x+1;
            y = y > mob.y ? y-1 : y+1;
            return checkCollision(mob, x, y);
        }
    }
    return {x:x, y:y};
}