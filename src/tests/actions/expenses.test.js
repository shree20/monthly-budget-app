import { startAddExpense, removeExpense, editExpense, addExpense, setExpenses, startSetExpenses, startRemoveExpense } from "../../actions/expenses";
import expenses from '../fixtures/expenses'
import ConfigureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'

const createMockStore = ConfigureMockStore([thunk])

beforeEach((done)=>{
    const expenseData = {}
    expenses.forEach(({id, description, note, createdAt, amount})=>{
        expenseData[id] = {description, note, createdAt, amount}
    })

    database.ref('expenses').set(expenseData).then(() => done())
})



test('should set up remove expense action method', () => {

    const action = removeExpense({ id: '123abc' })

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'

    })

})

test('should remove expense from firebase',(done)=>{
    const store = createMockStore({});
    const id = expenses[0].id
    store.dispatch(startRemoveExpense({id})).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy()
        done()
    })
  })

test('should set up editexpense action method', () => {
    const action = editExpense('123a', {
        note: 'This is note'
    })

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123a',
        updates: {
            note: 'This is note'
        }
    })

})


test('should setup addexpense action method for provided values', () => {

    const action = addExpense(expenses[2])

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })

})


test('should add expense to database and store', (done) => {

    const store = createMockStore({})

    const expenseData = {
        description: 'Mouse',
        amount: 564,
        createdAt: 1000,
        note: 'Better'
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})

    const expenseDefaults = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults)
        done()
    })
})

test('should setup expense action object with data', ()=>{
    const action = setExpenses(expenses)

    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'SET_EXPENSES',
        expenses
      });
      done();
    });
  });

  


