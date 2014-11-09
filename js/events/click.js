/**
 * Created by mdkerner on 10/23/2014.
 */

var moveIntervalId = -1;
canvas.addEventListener("mousedown", function(event)
{
    if (moveIntervalId != -1)return;
    moveIntervalId = setInterval(function(){
        var position = getPosition(mouse);
        move(player, position.x, position.y);
    }, player.speed);
}, false);

canvas.addEventListener("mouseup", function(event) {
    if (moveIntervalId === -1)return;
    clearInterval(moveIntervalId);
    moveIntervalId = -1;
}, false);

canvas.addEventListener('mousemove', function(e){
    mouse.x = e.clientX || e.pageX;
    mouse.y = e.clientY || e.pageY
}, false);





function getPosition(event){
    var x = event.x;
    var y = event.y;

    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    //convert to blocks from pixels
    x = pixel(x);
    y = pixel(y);

    return {x:x, y:y};
}