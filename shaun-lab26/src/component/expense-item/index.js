// import './expense-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete, expenseCreate} from '../../action/expense-actions.js';


//host my expense items
class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseEdit: false,
    };
    this.toggleUpdate = this.toggleUpdate.bind(this);
  }

  toggleUpdate(e) {
    this.setState({
      expenseEdit: !this.state.expenseEdit,
    });
  }

  render() {
    return (
      <div className='expense-item'>
        <h3 key={this.props.expense.id}>{this.props.expense.name} at ${this.props.expense.price}</h3>
        // <button className='remove' onClick={() => expenseDelete(expense)}>X</button>
      </div>
    );
  }
}


// let mapDispatchToProps = (dispatch) => ({
//   expenseUpdate: (expense) => dispatch(expenseUpdate(expense)),
//   expenseDelete: (expense) => dispatch(expenseDelete(expense)),
// });

export default ExpenseItem
