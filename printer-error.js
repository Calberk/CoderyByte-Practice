s = 'aaaxbbbyyhwawiw' 
function printError(str){
    const validLetters = "abcdefghijklm"
    let validCount = 0;
    for(let i = 0; i <str.length; i++){
        const strSplit = str.split('');
        const eachLetter = strSplit[i];
        for(let validIndex = 0; validIndex<validLetters.length; validIndex++){
            if(eachLetter === validLetters[validIndex]){
                validCount++
            }
        }
    }
    const error = str.length-validCount;
    return (error + "/" + str.length)
}
printError(s);