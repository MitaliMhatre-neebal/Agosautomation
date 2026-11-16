class ATM {

    withdraw(amount) {
        console.log(`Withdrawing ₹${amount}`);
    }

    checkBalance() {
        console.log("Checking Account Balance");
    }

}

const atm = new ATM();

atm.withdraw(5000);
atm.checkBalance();