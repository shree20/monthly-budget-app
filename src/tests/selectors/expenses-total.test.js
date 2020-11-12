import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'


test('should add up multiple expense correctly', ()=>{
    const total = getExpensesTotal(expenses)
    expect(total).toBe(114195)
})

test('should add up single expense correctly', ()=>{

    const total = getExpensesTotal([expenses[0]])
    expect(total).toBe(195)
})

test('should return zero if no expense', ()=>{

    const total = getExpensesTotal([])
    expect(total).toBe(0)
})