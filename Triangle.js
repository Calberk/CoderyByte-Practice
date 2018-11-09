function isTriangle(a,b,c){
    const aTriangle = a + b;
    const bTriangle = b + c;
    const cTriangle = c + a;
    if(aTriangle > c && bTriangle > a && cTriangle > b){
        return true;
    }else{
        return false;
    }
}