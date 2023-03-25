const Banking = require('./banking')

describe('Banking', () => {

    it('should state the balance is 100 after a deposit', () => {
        const banking = new Banking()
        banking.deposit(100)
        expect(banking.readBalance()).toEqual(100)
    })

    it('should state the balance is 300 after a deposit & withdrawal', () => {
        const banking = new Banking()
        banking.deposit(400)
        banking.withdraw(100)
        expect(banking.readBalance()).toEqual(300)
    })
})