import { removeExpense, editExpense, addExpense } from "../../actions/expenses";


test('should set up remove expense action method', ()=>{

    const action = removeExpense({id:'123abc'})

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id:'123abc'
        
    })

})

test('should set up editexpense action method', ()=>{
  const action = editExpense('123a',{
      note:'This is note'
  })

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id:'123a',
    updates:{
        note: 'This is note'
    }
  })

})


test('should setup addexpense action method for provided values', ()=>{
    const expenseData = {
        description : 'water',
        note : 'water bill ',
        amount : 788,
        createdAt : 1900
    }

    const action = addExpense(expenseData)

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })

})

test('should setup addexpense action method for default values', ()=>{
    const expenseDefaultData = {
        description : '',
        note : '',
        amount : 0,
        createdAt : 0
    }

    const action = addExpense()

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseDefaultData,
            id: expect.any(String)
        }
    })

})


