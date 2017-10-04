import './_expense-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete, expenseCreate} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  render() {
    let {expenseUpdate, expenseDelete, expense, category} = this.props;

    return (
      <li className='expense-item'>
        <div>
          <div className='expense-content'>
            <p>{expense.title}</p>
            <p>{expense.price}</p>
            <button className='remove' onClick={() => expenseDelete(expense)}>X</button>
          </div>
          <div className='expense-editing'>
            <ExpenseForm
              buttonText='update expense'
              onComplete={expenseUpdate}
            />
          </div>
        </div>
      </li>
    );
  }
}



let mapDispatchToProps = (dispatch) => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
});

export default connect(mapDispatchToProps)(ExpenseItem);
