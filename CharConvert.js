function charConvert (str) {
    let strSplit = str.split("");
    let splitArr = strSplit.map(function(val) {
         return val.charCodeAt()})
    return splitArr.join('')
 }

charConvert('the cat in the hat')