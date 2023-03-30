const Statement = require('./statement.js')
const Banking = require('./banking.js')

describe('Banking', () => {
    it('should return the statement when deposited', () => {
        const statement = new Statement()
        const banking = new Banking(statement)
        banking.deposit(500)
        expect(statement.printStatement()).toBe('date || credit || debit || balance\n14/01/2023 || 500 || || 500')
    })

})