// //create a list of possible values



function CaesarCipher(str,num) { 
    const lowerValues= "abcdefghijklmnopqrstuvwxyz"
    const upperValues= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const output = "";
    for(let i = 0; i < cypher.length; i++){
        if(lowerValues.indexOf(str[i]) > -1){
            let valueIndex = lowerValues.indexOf(str[i]);
            let cypher = valueIndex + num
            if(cypher > 25 ){
                cypherLetter = cypherLetter-26
            }   
            output += lowerValues[cypherLetter]
        }else if(upperValues.indexOf(str[i]) >-1){
            let valueIndex = upperValues.indexOf(str[i]);
            let cypher = valueIndex + num
            if(cypher > 25 ){
                cypherLetter = cypherLetter-26
            }   
            output += upperValues[cypherLetter]
        }else{
            output += stri[i]
        }
            
        
    }
       return output 
    }
    CaesarCipher("hello and", 3)