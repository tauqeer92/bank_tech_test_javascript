const Statement = require('./statement.js')

describe('Statement', () => {
    it('should return the statement', () => {
        const statement = new Statement()
        expect(statement.printStatement()).toBe('date || credit || debit || balance')
    })

})