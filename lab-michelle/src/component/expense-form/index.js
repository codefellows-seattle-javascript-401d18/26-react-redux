//Check the refs to expense in here//
import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //state of our expense
      categoryId: props.expense ? props.expense.categoryId : props.categoryId,
      id: props.expense ? props.expense.id : undefined,
      timestamp: props.expense ? props.expense.timestamp : undefined,
      title: props.expense ? props.expense.title: '',
      price: props.expense ? props.expense.price: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps() {
    console.log('__EXPENSE_PROPS__', this.props);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.props.toggle();
  }

  render() {
    return (
      <form className = "expense-form" onSubmit= {this.handleSubmit}>
        <input
          required
          name = 'cost'
          type="number"
          price= "0"
          placeholder = "0"
          value = {this.state.price}
          onChange = {this.handleChange}/>

        <input
          required
          type="text"
          name="title"
          placeholder="enter an expense"
          value={this.state.title}
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
