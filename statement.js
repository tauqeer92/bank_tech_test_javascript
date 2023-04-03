class Statement {
    constructor() {
        this.transactions = ['date || credit || debit || balance']
        this.date = null
    }

    setDate() {
        // it might not update the date, use getters and setters?
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const currentMonth = currentDate.getMonth() + 1;
        const currentDay = currentDate.getDate();
        const formattedDate = currentDay + '/' + currentMonth + '/' + currentYear;
        this.date = formattedDate
    }

    getDate() {
        this.setDate()
        return this.date
    }


    printStatement() {
        return this.transactions.join('')
    }

    addDeposit(amount, balance) {
        this.transactions.splice(1, 0, `\n${this.getDate()} || ${amount} || || ${balance}`)
    }

    addWithdrawal(amount, balance) {
        this.transactions.splice(1, 0, `\n${this.getDate()} || || ${amount} || ${balance}`)
    }



}


// date || credit || debit || balance
// 14/01/2023 || || 500.00 || 2500.00
// 13/01/2023 || 2000.00 || || 3000.00
// 10/01/2023 || 1000.00 || || 1000.00

module.exports = Statement