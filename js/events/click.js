/**
 * Created by mdkerner on 10/23/2014.
 */
canvas.addEventListener("click", handleClick, false);

function handleClick(event)
{
    var position = getPosition(event);
    evaluateClick(position);


}

function evaluateClick(position){

    player.y = position.y;
    player.x = position.x;
}

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