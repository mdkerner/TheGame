/**
 * Created by KERNER-M on 10/22/2014.
 *
 * this is where a "Block" is defined
 */

var block = function(blocks){
    var b = blocks * blockSize
    return Math.floor(b);
};

var pixel = function(pixels){
    var p = pixels / blockSize;
    return Math.floor(p);
};