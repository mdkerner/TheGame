/**
 * Created by mdkerner on 10/23/2014.
 */
function player(renderObj, x, y, name, description, health, stamina, speed, equipment, inventory, skills) {
    var m = new mob(
        renderObj,
        x,
        y,
        name,
        description,
        health != undefined ? health : 100,
        mobType.humanoid,
        stamina != undefined ? stamina : 100,
        speed != undefined ? speed : 100,
        equipment != undefined ? equipment : [],
        inventory != undefined ? inventory : [],
        skills != undefined ? skills : []
    );
    return m;
}