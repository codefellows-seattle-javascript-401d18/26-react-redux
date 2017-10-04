import React from 'react';


//host my expense form along with the needed handle functions
class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.expense ? props.expense.name : '',
      price: props.expense ? props.expense.price : '',
      categoryId: props.expense ? props.expense.categoryId : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if(props.expense) {
      this.setState(props.expense);
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    if(!this.props.expense) {
      this.setState({ content: ''});
    }
  }

  render() {
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="enter a budget category"
          value={this.state.title}
          onChange={this.handleChange} />
        <input
          type="number"
          name="price"
          placeholder="price"
          value={this.state.budget}
          onChange={this.handleChange} />
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;
