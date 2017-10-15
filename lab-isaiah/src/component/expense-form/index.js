import './_expense-form.scss';
import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.expense ? props.expense.id : null,
      timestamp: props.expense ? props.expense.timestamp : null,
      title: props.expense ? props.expense.title : '',
      categoryId: props.expense ? props.expense.categoryId: null,
      price: props.expense ? props.expense.price : '$' + Number,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('isaiah was here', this.state);
    this.props.onComplete(Object.assign({}, this.state));
    this.setState({title: ''});
  }

  render() {
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          className="cateForm"
          type="text"
          name="title"
          placeholder="enter an expense"
          required
          value={this.state.title}
          onChange={this.handleChange}/>

          <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;
