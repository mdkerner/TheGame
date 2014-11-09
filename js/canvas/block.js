
var block = function(blocks){
    var b = blocks * blockSize
    return Math.floor(b);
};

var pixel = function(pixels){
    var p = pixels / blockSize;
    return Math.floor(p);
};