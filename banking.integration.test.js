const Statement = require('./statement.js')
const Banking = require('./banking.js')

describe('Banking', () => {
    it('should return the statement when deposited', () => {
        const statement = new Statement()
        const banking = new Banking(statement)
        banking.deposit(500)
        expect(statement.printStatement()).toBe('date || credit || debit || balance\n14/01/2023 || 500 || || 500')
    })

    it('should return the statement when withdraw', () => {
        const statement = new Statement()
        const banking = new Banking(statement)
        banking.withdraw(500)
        expect(statement.printStatement()).toBe('date || credit || debit || balance\n14/01/2023 || || 500 || -500')
    })
    it('should return the statement when deposit and withdraw', () => {
        const statement = new Statement()
        const banking = new Banking(statement)
        banking.deposit(500)
        banking.withdraw(100)
        expect(statement.printStatement()).toBe('date || credit || debit || balance\n14/01/2023 || || 100 || 400\n14/01/2023 || 500 || || 500')
    })

    it('should return the statement when deposit and withdraw', () => {
        const statement = new Statement()
        const banking = new Banking(statement)
        banking.deposit(500)
        banking.deposit(200)
        banking.withdraw(100)
        banking.withdraw(50)
        expect(statement.printStatement()).toBe('date || credit || debit || balance\n14/01/2023 || || 50 || 550\n14/01/2023 || || 100 || 600\n14/01/2023 || 200 || || 700\n14/01/2023 || 500 || || 500')
    })

})