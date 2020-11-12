const getExpensesTotal = (expenses) => {

    return expenses.map((expense) => {
        return expense.amount
    }).reduce((sum, value) => {
        return sum + value
    }, 0)

}


export default getExpensesTotal