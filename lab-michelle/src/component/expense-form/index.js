//Check the refs to expense in here//
import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //state of our expense
      name: props.expense ? props.expense.name: '',
      price: props.expense ? props.expense.price: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps() {
    console.log('__EXPENSE_PROPS__', this.props);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
    this.setState({ price: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
    this.setState({price: 0});
    this.setState({name: ''});
  }

  render() {
    return (
      <form className = "expense-form" onSubmit= {this.handleSubmit}>
        <input
          required
          type="number"
          price= "0"
          placeholder = "0"
          value = {this.state.price}
          onChange = {this.handleChange}/>

        <input
          required
          type="text"
          name="name"
          placeholder="enter an expense"
          value={this.state.price}
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
