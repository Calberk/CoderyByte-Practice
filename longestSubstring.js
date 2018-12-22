
// RETURNS THE ACTUAL LONGEST SUB STRING

// var lengthOfLongestSubstring = function(s) {
//     let subStr = ''
//     let currentStr = '';
//     for(let strInd = 0; strInd < s.length; strInd++ ){
//         if(currentStr.indexOf(s[strInd]) < 0){   
//             currentStr += s[strInd]
//         }else{
//             if(currentStr > subStr){
//             subStr = currentStr;
//             currentStr = ''
//             strInd--
//             }
//         }
        
//     }
//     return subStr    
// };



// //SHOULD RETURN THE LONGEST SUBSTRING LENGTH

var lengthOfLongestSubstring = function(s) {
    let subStr = 0
    for(let strInd = 0; strInd < s.length; strInd++ ){
        let currentStr = '';
        if(currentStr.indexOf(s[strInd]) < 0){
            currentStr+= s[strInd];
            if(currentStr.length > subStr){
                subStr = currentStr.length; 
        }else{
            currentStr = ''
            strInd--
            }
        }
        
    }
    if(!s.length){
        return 0
    }
    return subStr
function longestSubstring(s){
    const sArray = s.split('')
    const longestSubstring = [];
    while(sArray.length){
        const currentStr = [""];
        if(currentStr.indexOf(s[i])===-1){
            currentStr.push(s[i])
            i++
        }else{
            
        }
    }
}