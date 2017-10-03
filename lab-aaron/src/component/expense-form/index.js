import React from 'react';


class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.category ? props.category.title : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return (
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Your Expense!"
          value={this.state.title }
          onChange={this.handleChange}/>

        <button tyoe="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;
