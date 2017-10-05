import './_expense-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  render() {


    return (
      <div className='expenseItem'>
        <div>
          <div className='expense-content'>
            <h4>{this.props.buttonText} Expense</h4>
            <p>{this.props.expense.title}</p>
            <p>{this.props.expense.price}</p>
            <button className='remove' onClick={() => this.props.expenseDelete(this.props.expense)}>X</button>
          </div>
          <div className='expenseEditing'>
            <ExpenseForm
              categoryID={this.props.expense.categoryID}
              buttonText='Update'
              onComplete={this.props.expenseUpdate}
            />
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = () => ({});


let mapDispatchToProps = (dispatch, getState) => ({
  expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
  expenseDelete: (expense) => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
