const Banking = require('./banking')
const Statement = require('./statement.js')

describe('Banking', () => {

    it('should state the balance is 100 after a deposit', () => {
        const statement = new Statement()
        const banking = new Banking(statement)
        banking.deposit(100)
        expect(banking.readBalance()).toEqual(100)
    })

    it('should state the balance is 300 after a deposit & withdrawal', () => {
        const statement = new Statement()
        const banking = new Banking(statement)
        banking.deposit(400)
        banking.withdraw(100)
        expect(banking.readBalance()).toEqual(300)
    })
})