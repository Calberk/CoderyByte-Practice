// for the array [1,2,-3,2,3,4,-6,1,2,3,4,5,-8,5,6], 
// the function should return 5, with start index = 7.  

function longestSequence(arr){
    var sLength = 0;
    var sPosition = null;
    var trackPoint = 0
    var currentLength = 0
    var currentPosition = null

    while (trackPoint < arr.length) {

        if(arr[trackPoint] > 0){
            currentLength++
            currentPosition = trackPoint
            trackPoint++ 
        } else{
            SLength = currentLength;
            SPosition = currentPosition;
            currentLength = 0
            currentPosition = trackPoint++
            trackPoint++
        }
    }
}

var b = [1,2,-3,2,3,4,-6,1,2,3,4,5,-8,5,6]
longestSequence(b)