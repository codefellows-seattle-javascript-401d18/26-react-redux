import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';

import {expenseUpdate, expenseDelete} from '../../action/expense-actions';


class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editExpense: false,
    };
    this.toggleExpense = this.toggleExpense.bind(this);
  }

  toggleExpense() {
    this.setState({editExpense: !this.state.editExpense});
  }

  render() {
    return (

      <div className = "expense-item" id={this.props.expense.id}>
        <button className="remove" onClick = {() => this.props.expenseDelete(this.props.expense)}>Delete</button>
        <button onClick={this.toggleExpense}>edit expense</button>
        <h3>{this.props.expense.name}</h3>
        <p>{this.props.expense.price}</p>

        {this.state.editExpense ?
          <ExpenseForm
            buttonText="update"
            toggle={this.toggleExpense}
            onComplete={this.props.expenseUpdate}
            expense = {this.props.expense}/>
            :
            undefined
        }
        </div>

    );
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = (dispatch, getState) => {
  return{
    expenseUpdate: expense => dispatch(expenseUpdate(expense)),
    expenseDelete: expense => dispatch(expenseDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
