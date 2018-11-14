// //create a list of possible values, one for uppercase and one for lowercase
//create a variable for the string output
//loop through the letters of the string checking the upper/lowercase
//Add the num to the index of each letter found in the value key
//add letter to the output string
//Add all none letters (space or special characters) accordingly


function CaesarCipher(str,num) { 
    function CaesarCipher(str,num) { 
        const lowerValues= "abcdefghijklmnopqrstuvwxyz"
        const upperValues= "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let output = "";
        for(let i = 0; i < str.length; i++){
            if(lowerValues.indexOf(str[i]) > -1){
                let valueIndex = lowerValues.indexOf(str[i]);
                let cypher = valueIndex + num
                if(cypher > 25 ){
                    cypher = cypher-26
                }   
                output += lowerValues[cypher]
            }else if(upperValues.indexOf(str[i]) >-1){
                let valueIndex = upperValues.indexOf(str[i]);
                let cypher = valueIndex + num
                if(cypher > 25 ){
                    cypher = cypher-26
                }   
                output += upperValues[cypher]
            }else{
                output += str[i]
            }
                
            
        }
           return output 
        }
    CaesarCipher("hello and", 3)