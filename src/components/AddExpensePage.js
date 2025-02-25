import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">This is AddExpensePage</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm
                        onSubmit={this.onSubmit}
                    />
                </div>
            </div>
        )
    }

}


// const AddExpensePage = (props) => {
//     return (
//         <div>
//             <h1>This is AddExpensePage</h1>
//             <ExpenseForm 
//             onSubmit = {(expense)=>{
//             //   props.dispatch(addExpense(expense))
//                props.onSubmit(expense)
//                props.history.push('/')
//             }}
//             />
//         </div>
//     )
// }

const mapDispatchToProps = (dispatch) => {
    return {
        startAddExpense: (expense) => {
            return dispatch(startAddExpense(expense))
        }
    }
}


export default connect(undefined, mapDispatchToProps)(AddExpensePage)  