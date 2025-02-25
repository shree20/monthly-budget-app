import React from 'react'
import { connect } from 'react-redux'
import getExpensesTotal from '../selectors/expenses-total'
import getVisibleExpenses from "../selectors/expenses";
import numeral from 'numeral'
import { Link } from "react-router-dom";

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {

    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses' ;
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00');
    
    return (
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Viewing <span> {expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
          <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
          </div>
        </div>
      </div>
    );
}



const mapStateToProps = (state) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

    return {
        expensesCount: visibleExpenses.length,
        expensesTotal: getExpensesTotal(visibleExpenses)
    }

}

export default connect(mapStateToProps)(ExpensesSummary)