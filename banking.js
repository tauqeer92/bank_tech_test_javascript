class Banking {
    constructor () {
        this.balance = 0
        this.transactions = []
        this.num = 1
    }

    deposit(amount) {
        this.balance += amount
        console.log(this.balance)
        this.transactions.push(1)
    }

    withdraw(amount) {
        this.balance -= amount
        this.transactions.push({id: this.num, credit: amount})
    }

    readBalance() {
        console.log(this.balance)
        return this.balance
        
    }

    readTransactions() {
        return this.transactions
    }
}

// const banking = new Banking()
// // banking.deposit(100)
// console.log(banking.readTransactions())

module.exports = Banking

