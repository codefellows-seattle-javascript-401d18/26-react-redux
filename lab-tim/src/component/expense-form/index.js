import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.expense ? props.expense.id : '',
      name: props.expense ? props.expense.name : '',
      price: props.expense ? props.expense.price : '',
      timestamp: props.expense ? props.expense.timestamp : '',
      categoryId: props.expense ? props.expense.categoryId : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // if a new expense is being passed in update the state to reflect the change
  componentWillReceiveProps(props) {
    if(props.expense) this.setState(props.expense);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
    this.setState({title: ''});   //this line clears out the submit box on submit click
  }

  render() {
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          required
          type="text"
          name="title"
          placeholder="enter an expense"
          value={this.state.title}
          onChange={this.handleChange}/>
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;
