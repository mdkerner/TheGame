/**
 * Created by KERNER-M on 10/22/2014.
 */

function mob(renderObj, x, y, name, description, health, mobType, stamina, speed, equipment, inventory, skills){
    return {

        renderObj : renderObj,
        x : x,
        y : y,
        name : name,
        description : description,
        health : health,
        mobType : mobType,
        stamina : stamina,
        speed : speed,
        equipment : equipment,
        inventory : inventory,
        skills : skills,
        render : function(obj, x, y){
            context.fillText(obj, block(x)+5, block(y)-3, blockSize);
            context.strokeRect(block(x), block(y-1), blockSize, blockSize);
        }
    };
}


var mobType = {
    creature : 'creature',
    humanoid : 'humanoid'
};