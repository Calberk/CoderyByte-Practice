const getMiddle = string => {
  
  const strLength = s.length;
       const index = strLength/2
    if(strLength%2===0){
        return evenMiddle = s.slice(index-1, index) + '' + s.slice(index, index+1);
    }else{
        return oddMiddle = s.slice(parseInt(index), index+1)
    }
}