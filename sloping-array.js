// An array is monotonic if it is either monotone increasing or monotone decreasing.

// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

// Return true if and only if the given array A is monotonic.


var isMonotonic = function(A) {
    var increasing = A[0] < A[A.length - 1];
    
    for(var i = 1; i < A.length; i++) {
        if (increasing && (A[i - 1] > A[i])) {
            return false;
        }
        
        if (!increasing && (A[i - 1] < A[i])) {
            return false;
        }
    }
    
    return true;
};