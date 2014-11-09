
function move(mob, x, y){
    if(mob.x == x && mob.y == y) return;
    var nextX = x;
    var nextY = y;
    if(mob.x != x) {
        nextX = mob.x < x ? mob.x + 1 : mob.x - 1;
    }
    if(mob.y != y){
        nextY = mob.y < y ? mob.y + 1 : mob.y - 1;
    }
    var position = closestValidPosition(mob, nextX, nextY);
    mob.x = position.x;
    mob.y = position.y;
    renderRoom();
    context.strokeRect(block(x), block(y), blockSize, blockSize);
}

//will return object {x,y} with closest valid position.
function closestValidPosition(mob, x, y){
    if(!isValidPosition(x, y)) {
        x = x > mob.x ? x - 1 : x + 1;
        y = y > mob.y ? y - 1 : y + 1;
        return closestValidPosition(mob, x, y);
    }
    return {x:x, y:y};
}

function isValidPosition(x, y){
    //room should be a global variable containing the current room
    for(var i = 0; i < room.objects.length; i++) {
        var obj = room.objects[i];
        if (obj.x === x && obj.y === y) {
            return false;
        }
    }
    return true;
}

function move2(mob, x, y){

}

function findPath(start, x, y, path){
    if(start.x == x && start.y == y) return path;
    if(start.x != x) {
        start.x = start.x < x ? start.x + 1 : start.x - 1;
    }
    if(start.y != y){
        start.y = start.y < y ? start.y + 1 : start.y - 1;
    }
    var next = {
        x: start.x,
        y: start.y
    };
    path.push(next);
    return findPath(next, x, y, path);
}