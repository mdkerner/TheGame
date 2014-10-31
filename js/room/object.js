/*Created by Michael Kerner on 10/22/2014.
*
*name
*   the name of your object
*
*description
*   the description of your object
*
*weight
*   the weight of the object
*
*renderFunc(canvas, x, y)
*   function used to render the object
*   each object will be rendered differently,
*   so pass in a custom function that renders
*   the object on canvas at x, y
*
*canvas
*   the canvas to render your object on
*
*x
*   the x axis position to render your object
*
*y
*   the y axis position to render your object at
*/
function object(renderObj, x, y, name, description){
    return {
        renderObj : renderObj,
        x : x,
        y : y,
        name : name,
        description : description,
        render : function(renderObj, x, y) {
            context.fillText(renderObj, block(x), block(y));
        }
    };
}