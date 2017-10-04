import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseCreate, expenseUpdate, expenseDelete} from '../../action/category-actions';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "expense-item">
        <button onClick = {() => this.props.expenseDelete(this.props.expense)}>Delete</button>
        <h3>{this.props.expense.name}</h3>
        <ExpenseForm
          buttonText ="update"
          onComplete = {this.props.expenseUpdate}/>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    expenses: state,
  };
};

let mapDispatchToProps = (dispatch, getState) => {
  return{
    expenseUpdate: expense => dispatch(expenseUpdate(expense)),
    expenseCreate: expense => dispatch(expenseCreate(expense)),
    expenseDelete: expense => dispatch(expenseDelete(expense)),
  };
};

export default connect(null, mapDispatchToProps)(ExpenseItem);
