import './_expense-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expense-actions';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.expense ? props.expense.title : '',
      price: props.expense ? props.expense.price : null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    console.log(this);
    return (
      <div className="expense-item">
      <button className="delete-button" onClick={() => this.props.expenseDelete(this.props.expense)}>x</button>
      <h4>Expenses</h4>
      <ExpenseForm
        buttonText1="update"
        onComplete={this.props.expenseUpdate}
        expense={this.props.expense}
        />
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch, action) => {
  return {
    expenseUpdate: expense => dispatch(expenseUpdate(expense)),
    expenseDelete: expense => dispatch(expenseDelete(expense)),
  };
};

export default connect(null, mapDispatchToProps)(ExpenseItem);
