

class Account{
	constructor(){
		//store the amount of money in the account
		this.balance = balance
	}
	add( deposit ){
		//add money to the amount stored in the account
		//takes in an amount
		//adds it to the existing amount
		//returns the new amount in the account
		var accountUpdate = this.balance + deposit;
		return accountUpdate;
	}
	remove( amount ){
		//removes funds from an account
		//check if the amount to withdraw is more than the account
		//if more, only withdraw the amount in the account, not more
		//if less, withdraw the amount specified
		//return the amount actually withdrawn
		var withdrawal;
		if(amount > this.balance){
			withdrawal = this.balance;
		}else{
			withdrawal = amount;
		}
		return withdrawal;
	}
	getAmount(){
		//returns the amount in the account
		return this.balance;
	}
}