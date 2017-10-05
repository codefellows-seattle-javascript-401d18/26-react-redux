import './_expense-item.scss';

import React from 'react';
import {connect} from 'react-redux';
import {
  expenseUpdate as expenseActionUpdate,
  expenseDelete as expenseActionDelete,
} from '../../action/expense-actions';
import ExpenseForm from '../expense-form';

class ExpenseItem  extends React.Component {
  render() {
    return (
      <div className="expense-item">
        <p>{this.props.expense.name}</p>
        <p>{this.props.expense.price}</p>
        <button className='expense-delete' onClick={()=>this.props.expenseDelete(this.props.expense)}>X</button>
        <ExpenseForm
          categoryId={this.props.expense.categoryId}
          buttonText='update expense'
          onComplete={this.props.expenseUpdate}/>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses[props.category.id],
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseUpdate: (expense) => dispatch(expenseActionUpdate(expense)),
    expenseDelete: (expense) => dispatch(expenseActionDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
