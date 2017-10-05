import './_expense-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseUpdate, expenseDelete} from '../../action/expense-actions.js';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editCard: false,
    };
    this.toggleCard = this.toggleCard.bind(this);
  }

  toggleCard() {
    this.setState({
      editExpense: !this.state.editExpense,
    });
  }
  render() {


    return (
      <div className='expenseItem'>

        <div className='expense-content'>
          <h4>{this.props.buttonText} Expense</h4>
          <p>{this.props.expense.title}</p>
          <p>{this.props.expense.price}</p>
          <button className='remove' onClick={() => this.props.expenseDelete(this.props.expense)}>X</button>
          <button onClick={this.toggleCard}>edit card</button>
        </div>

        {this.state.editExpense ? 
          <ExpenseForm
            id={this.props.expense.id}
            categoryID={this.props.expense.categoryID}
            buttonText='Update'
            onComplete={this.props.expenseUpdate}
          />
          :
          undefined
        }
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
