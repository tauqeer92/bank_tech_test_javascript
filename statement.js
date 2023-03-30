class Statement {
    constructor() {
        this.statement = 'date || credit || debit || balance'
    }

    printStatement() {
        return this.statement
    }

    addDeposit(amount, balance) {
        this.statement += `\n14/01/2023 || ${amount} || || ${balance}`
    }

    addWithdrawal(amount, balance) {
        this.statement += `\n14/01/2023 || || ${amount} || ${balance}`
    }



}


// date || credit || debit || balance
// 14/01/2023 || || 500.00 || 2500.00
// 13/01/2023 || 2000.00 || || 3000.00
// 10/01/2023 || 1000.00 || || 1000.00

module.exports = Statement