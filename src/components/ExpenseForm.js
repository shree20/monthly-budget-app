import React from 'react'
import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';


// const now = moment()
// console.log(now)

export default class ExpenseForm extends React.Component {
   constructor(props){
       super(props)
       this.state = {
        description : props.expense? props.expense.description : '',
        note: props.expense ? props.expense.note : '',
        amount: props.expense ? (props.expense.amount).toString() : '',
        createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
        calenderFocused: false,
        error: ''
       }
   }
   
   
    onDescriptionChange = (e)=>{
        const description = e.target.value
        this.setState(()=>{
            return {
                description
            }
        })
    }

    onNoteChange = (e)=>{
        const note = e.target.value
        this.setState(()=>{
            return {
                note
            }
        })
    }

    onAmountChange = (e) =>{
        const amount = e.target.value
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(()=>{
                return{
                    amount
                }
            })
        }
    }

    onDateChange = (createdAt) =>{
        if (createdAt) {
            this.setState(()=>{
                return {
                    createdAt
                }
            })
        }
    }

    onFocusChange = ({focused})=>{
        this.setState(()=>{
            return {
                calenderFocused : focused
            }
        })        
    }

    onSubmit = (e)=>{
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            this.setState(()=>{
                return {
                    error: 'Please provide Description and Amount.'
                }
            })
        } else {
            this.setState(()=>{
                return {
                    error:''
                }
            })

            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount,10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }

    }

    render(){
        return (
            <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input type="text" placeholder="Description" 
            className="text-input"
            autoFocus value = {this.state.description} onChange = {this.onDescriptionChange} />

            <input type="text" placeholder="Amount"
            className="text-input"
            value = {this.state.amount}
            onChange={this.onAmountChange}
            />

            <SingleDatePicker 
            date = {this.state.createdAt}
            onDateChange = {this.onDateChange}
            focused = {this.state.calenderFocused}
            onFocusChange = {this.onFocusChange}
            numberOfMonths = {1}
            isOutsideRange = { () => false }
            />
            <textarea placeholder="Add a note for your expense(optional)"
            className="textarea"
            value = {this.state.note}
            onChange={this.onNoteChange}
            >
            </textarea>
            <div>
            <button className="button">Save Expense</button>
            </div>
            </form>
        )
    }

}