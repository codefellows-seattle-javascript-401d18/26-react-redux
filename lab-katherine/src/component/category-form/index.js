import React from 'react';
import uuid from 'uuid/v4';


class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuid(),
      title: props.category ? props.category.title : '',
      expense: props.category ? props.category.expense : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
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
          name="title"
          placeholder="enter a title"
          value={this.state.title}
          onChange={this.handleChange}/>

        <input
          type="number"
          name="expense"
          placeholder="expense"
          value={this.state.expense}
          onChange={this.handleChange} />


        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;
