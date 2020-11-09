import moment from 'moment'
import filtersReducer from '../../reducers/filters'


test('should setup default filter values',()=>{

    const state = filtersReducer(undefined, {type:'@@INIT'})

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should setup sortBy to Amount', ()=>{
    const state = filtersReducer(undefined, {type:'SORTBYAMOUNT'})

    expect(state.sortBy).toBe('amount')
})

test('should setup sortBy to Date', ()=>{

    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const state = filtersReducer(currentState, {type:'SORTBYDATE'})

    expect(state.sortBy).toBe('date')
})

test('should setup set text filter', ()=>{

    const action = {
        type:'SET_TEXT_FILTER',
        text: 'Demo'
    }

    const state = filtersReducer(undefined, action)

    expect(state.text).toBe('Demo')
})

test('should setup set startDate filter', ()=>{

    const action = {
        type:'SET_START_DATE',
        startDate: moment().startOf('month').valueOf()
    }

    const state = filtersReducer(undefined, action)

    expect(state.startDate).toBe(moment().startOf('month').valueOf())
})

test('should setup set endDate filter', ()=>{

    const action = {
        type:'SET_END_DATE',
        endDate: moment().endOf('month').valueOf()
    }

    const state = filtersReducer(undefined, action)

    expect(state.endDate).toBe(moment().endOf('month').valueOf())
})