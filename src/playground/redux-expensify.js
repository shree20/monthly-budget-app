import { createStore, combineReducers } from 'redux'
import { v4 as uuid } from 'uuid'

//ADD_EXPENSE

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createAt = 0

    } = {}
) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            note,
            amount,
            createAt
        }
    }
}

//Remove EXPENSE

const removeExpense = ({id} = {})=>{
    return {
        type: 'REMOVE_EXPENSE',
        expense: {
            id
        }
    }
}

//EDIT_EXPENSE

const editExpense = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id,
        updates
    }
}

//SET_TEXT_FILTER

const setTextFilter = (text = '')=>{
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

//SORTBYAMOUNT
const sortByAmount = () =>{
    return {
        type:'SORTBYAMOUNT'
    }
}

//SORTBYDATE
const sortByDate = () =>{
    return {
        type:'SORTBYDATE'
    }
}

//SET_START_DATE
const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

//SET_END_DATE
const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}

//Expenses Reducer

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
                return state.filter(({id})=>{
                    return id !== action.expense.id
                }) ;
        case 'EDIT_EXPENSE':
                return state.map((expense)=>{
                    if (expense.id === action.id) {
                        return {
                            ...expense,
                            ...action.updates
                        }
                    }
                }) ;        
        default:
            return state;
    }
}

//Filters reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {

    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORTBYAMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }; 
        case 'SORTBYDATE':
            return {
                ...state,
                sortBy: 'date'
            };   
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
                };
        case 'SET_END_DATE':
                return {
                  ...state,
                  endDate: action.endDate
             };              
        default:
            return state;
    }
}

//Get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) =>{

    return expenses.filter((expense)=>{
        const isStartDateMatch = typeof(startDate) !=='number' || expense.createAt >= startDate
        const isEndDateMatch = typeof(endDate) !=='number' || expense.createAt <= endDate
        const isTextMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        
        return isStartDateMatch && isEndDateMatch && isTextMatch
    }).sort((a, b)=>{
        if (sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1
        }
        else {
            return a.amount < b.amount ? 1 : -1
        }
    })
}



//Store Creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpense = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpense)
})


const expenseOne = store.dispatch(addExpense({
    description: 'A rent',
    amount: 100,
    createAt: 50
}))

const expenseTwo = store.dispatch(addExpense({
    description: 'Coffer',
    amount: 500,
    createAt: 5000
}))



// store.dispatch(removeExpense({
//  id: expenseOne.expense.id
// }))

// store.dispatch(editExpense(expenseTwo.expense.id, {
//     amount:1000
// }))

//store.dispatch(setTextFilter('e'))
// store.dispatch(setTextFilter())


 store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

 //store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
 //store.dispatch(setEndDate(-100))


const demoState = {
    expenses: [{
        id: 'sddfeaeaa',
        description: 'Jan rent',
        note: 'This is final',
        amount: 55500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //amount or date
        startDate: undefined,
        endDate: undefined
    }
}

