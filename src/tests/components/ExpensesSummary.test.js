
import { ExpensesSummary} from '../../components/ExpensesSummary'
import React from 'react'
import {shallow} from 'enzyme'


test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />);
    expect(wrapper).toMatchSnapshot();
  });
  
  test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={23512340987} />);
    expect(wrapper).toMatchSnapshot();
  });