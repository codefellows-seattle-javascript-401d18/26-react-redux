import React from 'react';
// import {expenseUpdate} from '../../action/expense-actions';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.expense ? props.expense.name: '',
      price: props.expense ? props.expense.price: 0,
      categoryId: props.expense ? props.expense.categoryId : props.categoryId,
      id: props.expense ? props.expense.id : undefined,
      timestamp: props.expense ? props.expense.timestamp : undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return (
      <form
        className = "expense-form"
        onSubmit= {this.handleSubmit}>

        <input
          required
          name ="price"
          type= "number"
          price= ""
          placeholder = "0"
          value = {this.state.price}
          onChange = {this.handleChange}/>

        <input
          required
          type="text"
          name="name"
          placeholder="enter an expense"
          value={this.state.name}
          onChange = {this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
        </form>
    );
  }
}

export default ExpenseForm;

// ExpenseItem Component
//
// should have a button that will delete the expense from the appState onClick
// should display the name and price of the component
// should display an ExpenseForm that will enable the user to update the expense in the app state
