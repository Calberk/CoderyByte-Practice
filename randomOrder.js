//Create a function, randomize_list(), that takes an array and ranzomizes the order, without resorting to the use of any pre-existing array methods.

var numList = [1,44,6,2,10]

function listRandomizer(arr){
    var newArr = []
    for(var index = arr.length; index>0; index--){
        randomPos = Math.floor(Math.random() * arr.length)
        newArr.push(arr[randomPos]);
        arr.splice(randomPos,1)
    }
    return console.log(newArr)
}

listRandomizer(numList)
