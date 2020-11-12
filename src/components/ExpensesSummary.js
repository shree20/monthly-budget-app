import React from 'react'
import { connect } from 'react-redux'
import getExpensesTotal from '../selectors/expenses-total'
import getVisibleExpenses from "../selectors/expenses";
import numeral from 'numeral'

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {

    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00');
    
    return (
      <div>
        <h1>Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}</h1>
      </div>
    );
}



const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: getExpensesTotal(visibleExpenses)
    }

}

export default connect(mapStateToProps)(ExpensesSummary)