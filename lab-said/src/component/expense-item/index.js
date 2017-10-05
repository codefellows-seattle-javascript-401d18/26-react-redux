import React from 'react';

import {connect} from 'react-redux';

import ExpenseForm from '../expense-form';

import {expenseUpdate, expenseDelete} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  render() {
    return (
      <li className='expense-item'>
        <div>
          <div className='expense-content'>
            <p>{this.props.expense.title}</p>
            <p>{this.props.expense.price}</p>
            <button className='remove' onClick={() => this.props.expenseDelete(this.props.expense)}>Delete</button>
          </div>
          <div className='expense-editing'>
            <ExpenseForm
              categoryID={this.props.expense.categoryID}
              buttonText='update expense'
              onComplete={this.props.expenseUpdate}
            />
          </div>
        </div>
      </li>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = (dispatch, getState) => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
