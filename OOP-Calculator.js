
class Calculator{
	constructor(){
		//takes in nothing
		//make storage for the operator and the numbers
			this.operator = operator;
			this.num1 = num1;
			this.num2 = num2;
			this.totalNums = totalNums
			this.hasOperator = false
	}
	loadOperator( op ){
		//adds the operator to the next calculation
		//takes in the operator
		//checks if it is a valid operation (+-*/)
			//save the op to the constructor storage
			//return true
		//or return false if not the right operator
			if(op === '+' || op === '-' || op === '*' || op === '/'){
				this.operator = op
				return true
			}else{
				return false
			}
	}
	loadNumber( num ){
		//takes in a number and stores it as one of the numbers to perform math on
		//takes in 1 number
		//checks if it is actually a number and if we have fewer than 2 numbers
		//if it is a number, and we have 2 or fewer numbers, store it
			//return the number of numbers stored
		//otherwise return false (too many numbers stored)

		if(!isNaN && this.num1 === undefined ){
			this.num1 = num 
			this.totalNums = 1 
		}else if(!isNaN && this.num2 === undefined ){
			this.num2 = num
			this.totalNums = 2
		}else{
			return false
		}
	}
	calculate(){
		//calculate the result of the stored numbers and operator
		//takes in nothing
		//calculates with the operator and 2 numbers
		//clears out the stored numbers
		//returns the calculated result
		var result;
		if(this.hasOperator === true && totalNums===2){
			storeNum1 = parseFloat(this.num1);
			storeNum2 = parseFloat(this.num2);
			operator = this.operator;
			if (operator === "+") {
				result = storeNum1 + storeNum2;
			} else if (operator === "-") {
				result = storeNum1 - storeNum2;
			} else if (operator === "/") {
				result = storeNum1 / storeNum2;
			} else if (operator === "*") {
				result = storeNum1 * storeNum2;
			}
			this.num1 = '';
			this.num2 = '';
			this.operator;
		return result
		}else{
			return;
		}
			
	}
}