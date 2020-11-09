import {shallow} from 'enzyme'
import expenses from '../fixtures/expenses'
import React from 'react'
import ExpenseListItem from '../../components/ExpenseListItem'


test('should render ExpenseList item', ()=>{

    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot()
})