import './_expense-form.scss';
import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: props.expense ? props.expense.categoryId: props.categoryId,
      id: props.expense ? props.expense.id : undefined,
      timestamp: props.expense ? props.expense.timestamp : undefined,
      title: props.expense ? props.expense.title : '',
      price: props.expense ? props.expense.price : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.props.toggle();
  }

  render() {
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          className="expForm"
          type="text"
          name="title"
          placeholder="enter expense"
          required
          value={this.state.title}
          onChange={this.handleChange}/>

        <input
          className="expForm"
          type="number"
          name="price"
          placeholder="enter price"
          required
          value={this.state.price}
          onChange={this.handleChange}/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;
