//Filters reducer
import moment from 'moment'

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
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

export default filtersReducer