// question: `correctCalcChecker: Given an array of objects with math equations, return all objects that have correct equations
//    for example: [
//        { num1: 3, num2: 3, op: '/', result: 3},
//        { num1: 12, num2: 4, op: '-', result: 8},
//        { num1: 2, num2: 3, op: '+', result: 5},
//        { num1: -5, num2: -2, op: '*', result: 10}
//      ]
//      returns [
//        { num1: 12, num2: 4, op: '-', result: 8},
//        { num1: 2, num2: 3, op: '+', result: 5}
//      ]`,
//  testVals: {
//    inputs: [
//      [[
//        { num1: 3, num2: 3, op: '/', result: 3},
//        { num1: 12, num2: 4, op: '-', result: 8},
//        { num1: 2, num2: 3, op: '+', result: 5},
//        { num1: -5, num2: -2, op: '*', result: -10}
//      ]],
//      [[
//        { num1: 2, num2: 1, op: '+', result: 3},
//        { num1: -3, num2: -1, op: '+', result: -4},
//        { num1: 20, num2: 2, op: '/', result: 2}
//      ]],
//    ],
//    outputs: [
//      [
//        { num1: 12, num2: 4, op: '-', result: 8},
//        { num1: 2, num2: 3, op: '+', result: 5}
//      ],
//      [
//        { num1: 2, num2: 1, op: '+', result: 3},
//        { num1: -3, num2: -1, op: '+', result: -4}
//      ]
//    ]
//  },
//  functionToTest: 'correctCalcChecker'


  function correctCalc (arr) {
      var correctChoices = [];
      var answer = null
      var i = 0
      while(arr.length > 0 ){
        if(arr[i].op === '+'){
          answer = arr[i].num1 + arr[i].num2
        }else if (arr[i].op === '-') {
          answer = arr[i].num1 - arr[i].num2
        }else if (arr[i].op === '*') {
          answer = arr[i].num1 * arr[i].num2
        }else if (arr[i].op === '/') {
          answer = arr[i].num1 / arr[i].num2
        }
        if(answer === arr[i].result){
            correctChoices.push(arr[i])
        }
        i++
      }
      
      return correctChoices
  }

  var a = [
          { num1: 3, num2: 3, op: '/', result: 3},
          { num1: 12, num2: 4, op: '-', result: 8},
          { num1: 2, num2: 3, op: '+', result: 5},
          { num1: -5, num2: -2, op: '*', result: 10}
        ]

        correctCalc(a)