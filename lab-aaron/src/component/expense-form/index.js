import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: props.expense ? props.expense.name : '',
      price: props.expense ? props.expense.price : '',
      categoryId: props.expense ? props.expense.categoryId : props.categoryId,
      id: props.expense ? props.expense.id : props.id,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this. handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState(
      {
        [e.target.name]: e.target.value,
      });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    if(!this.props.expense) {
      this.setState({ content: '' });
    }
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <h4>{this.props.buttonText} Expense</h4>
        <input
          name='title'
          type='text'
          placeholder='title'
          value={this.state.value}
          onChange={this.handleChange} /><br/>
        <input
          name='amount'
          type='number'
          placeholder='amount'
          value={this.state.value}
          onChange={this.handleChange} /><br/>
        <button type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;
