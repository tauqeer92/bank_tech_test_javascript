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
        this.statement.addDeposit(amount, this.balance)
    }

    withdraw(amount) {
        this.balance -= amount
        this.statement.addWithdrawal(amount, this.balance)
    }

    readBalance() {
        return this.balance
    }

    readTransactions() {
        return this.transactions
    }
}

const statement = new Statement()
const banking = new Banking(statement)
banking.deposit(500)
banking.deposit(200)
banking.withdraw(100)
banking.withdraw(50)
console.log(statement.printStatement())

module.exports = Banking

