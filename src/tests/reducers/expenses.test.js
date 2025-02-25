import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'


test('should setup default state', ()=>{

    const state = expensesReducer(undefined, {type:'@@INIT'})

    expect(state).toEqual([])
})

test('should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense if id not found', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', ()=>{

    const expense = {
        id:'4',
        description: 'CNG',
        note:'',
        amount:300,
        createdAt:5657433
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses,expense])
})

test('should edit an expense', ()=>{

    const updates = {
        description: 'Rental',
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id:'2',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].description).toBe('Rental')
})

test('should not edit an expense if expense not found', ()=>{

    const updates = {
        description: 'Universe Boss',
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id:'34',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expense', ()=>{
    const action = {
        type: 'SET_EXPENSES',
        expenses:[expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
})