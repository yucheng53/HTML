
function reverse(arr) {
    var newarr = [];
    for(var i=arr.length-1;i>=0;i--){
    newarr.push(arr[i]);   
    }
    return newarr;
}
var arr = ["a","b","c","d","e"]
var newarr = reverse(arr);
    console.log(newarr);


    /* function reverse(arr) {
        for(var i=0; i< arr.length/2; i++) {
            var temp = arr[i];
            arr[i] = arr[arr.length- i- 1];
            arr[arr.length-1-i] = temp;
        }
            return arr;
    } */