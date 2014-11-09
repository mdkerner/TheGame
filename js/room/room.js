/**
 * Created by KERNER-M on 10/22/2014.
 */
function room(name, description, mobs, objects){
    return {
        name : name,
        description : description,
        mobs : mobs != undefined ? mobs : [],
        objects : objects != undefined ? objects : []

    };
}