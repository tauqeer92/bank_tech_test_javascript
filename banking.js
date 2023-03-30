const Statement = require('./statement.js')

class Banking {
    constructor (statement) {
        this.statement = statement
        this.balance = 0
        this.transactions = []
        this.num = 1
    }

    deposit(amount) {
        this.balance += amount
        this.transactions.push({id: this.num, credit: amount})
        this.statement.addDeposit(amount, this.balance)
        return this.statement.printStatement()
    }

    withdraw(amount) {
        this.balance -= amount
        this.transactions.push({id: this.num, debit: amount})
        this.statement.addWithdrawal(amount, this.balance)
        return this.statement.printStatement()
    }

    readBalance() {
        return this.balance
    }

    readTransactions() {
        return this.transactions
    }
}

// const statement = new Statement()
// const banking = new Banking(statement)
// console.log(banking.deposit(100))

module.exports = Banking

