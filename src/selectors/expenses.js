//Get visible expenses
import moment from 'moment'


const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) =>{

    return expenses.filter((expense)=>{
        const createdAtMoment = moment(expense.createdAt)
        const isStartDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment,'day')   : true
        const isEndDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const isTextMatch =  expense.description.toLowerCase().includes(text.toLowerCase())
        
        return isStartDateMatch && isEndDateMatch && isTextMatch
    }).sort((a, b)=>{
        if (sortBy === 'date') {  
            return a.createdAt < b.createdAt ? 1 : -1
        }
        else {
            return a.amount < b.amount ? 1 : -1
        }
    })
}


export default getVisibleExpenses