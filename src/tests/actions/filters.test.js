
import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from "../../actions/filters";
import moment from 'moment'

test('should set up set start date action object',()=>{

    const action = setStartDate(moment(0))

    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0) 
    })

})

test('should set up set end date action object',()=>{

    const action = setEndDate(moment(0))

    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0) 
    })

})

test('should set up sortbydate action object',()=>{

    const action = sortByDate()

    expect(action).toEqual({
        type:'SORTBYDATE' 
    })

})

test('should set up sortbyamount action object',()=>{

    const action = sortByAmount()

    expect(action).toEqual({
        type:'SORTBYAMOUNT' 
    })

})

test('should set up settextfilter action object with provided value',()=>{

    const action = setTextFilter('robo')

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'robo' 
    })

})

test('should set up settextfilter action object with default value',()=>{

    const action = setTextFilter()

    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: '' 
    })

})