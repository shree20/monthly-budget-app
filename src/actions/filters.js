//SET_TEXT_FILTER

export const setTextFilter = (text = '')=>{
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}


//SORTBYAMOUNT
export const sortByAmount = () =>{
    return {
        type:'SORTBYAMOUNT'
    }
}

//SORTBYDATE
export const sortByDate = () =>{
    return {
        type:'SORTBYDATE'
    }
}

//SET_START_DATE
export const setStartDate = (startDate) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

//SET_END_DATE
export const setEndDate = (endDate) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}