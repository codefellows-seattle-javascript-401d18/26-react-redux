//Check the refs to expense in here//
import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //state of our expense
      // name: props.expense.name,
      // price: props.expense.price,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps() {
    console.log('__EXPENSE_PROPS__', this.props);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === value;
    const nameForInput = target.nameForInput;

    this.setState({
      [nameforinput]: value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));

  }

  render() {
    return (
      <form className = "expense-form" onSubmit= {this.handleSubmit}>
        <input
          required
          nameforinput = 'cost'
          type="number"
          price= "0"
          placeholder = "0"
          value = {this.state.price}
          onChange = {this.handleChange}/>

        <input
          required
          type="text"
          nameforinput = 'expenseDesc'
          name="name"
          placeholder="enter an expense"
          value={this.state.name}/>

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
