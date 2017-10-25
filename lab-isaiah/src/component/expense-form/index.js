import './_expense-form.scss';
import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.expense ? props.expense.id : null,
      timestamp: props.expense ? props.expense.timestamp : null,
      title: props.expense ? props.expense.title : '',
      categoryId: props.category ? props.category.categoryId: null,
      price: props.expense ? props.expense.price : '',
    };

    this.handleExpenseTitleChange = this.handleExpenseTitleChange.bind(this);
    this.handleExpensePriceChange = this.handleExpensePriceChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleExpenseTitleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleExpensePriceChange(e) {
    this.setState({ price: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('isaiah was here', this);
    this.props.onComplete(Object.assign({}, this.state));
    this.setState({title: '', price: 0});
  }

  render() {
    console.log('ex-form buttontext1:',this);
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          className="expForm"
          type="text"
          name="title"
          placeholder="enter expense"
          required
          value={this.state.title}
          onChange={this.handleExpenseTitleChange}/>

        <input
          className="expForm"
          type="number"
          name="price"
          placeholder="enter a price"
          required
          value={this.state.price}
          onChange={this.handleExpensePriceChange}/>

        <button type="submit">{this.props.buttonText1}</button>
      </form>
    );
  }
}

export default ExpenseForm;
