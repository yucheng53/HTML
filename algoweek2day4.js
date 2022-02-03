var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
function isPresent2d(arr2d,value) {
    var result = 0;
    for(var i = 0; i < arr2d.length; i++) {
        for(var j = 0; j < arr2d[i].length; j++) {
            if (arr2d[i][j] == value) {
                return true;                
            } 
        }
    }
    return false;
}

function flatten(arr2d) {
    var flattened = [];
    for(var i = 0; i < arr2d.length; i++) {
        for(var j = 0; j < arr2d[i].length; j++) {
            flattened.push(arr2d[i][j]);
        }     
    }
    return flattened;
}

console.log(flatten(arr2d));




console.log(isPresent2d(arr2d, 9));

