/**
 * Created by KERNER-M on 10/22/2014.
 *
 * this is where a "Block" is defined
 */

var blockSize = canvas.width / 100;
var block = function(blocks){
    return blocks * blockSize;
};

var pixel = function(pixels){
    return pixels / blockSize;
};