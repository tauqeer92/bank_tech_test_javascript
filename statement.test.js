const Statement = require('./statement.js')

describe('Statement', () => {
    it('should return the statement', () => {
        const statement = new Statement()
        const fakeDate = jest.fn(() => '14/01/2023')
        statement.getDate = fakeDate
        expect(statement.printStatement()).toBe('date || credit || debit || balance')
    })

})