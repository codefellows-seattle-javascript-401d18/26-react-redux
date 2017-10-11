import React from 'react';
import uuid from 'uuid/v4';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      budget: 0,
      // id: uuid(),
      // timestamp: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
    this.setState({
      title: '',
      budget: 0,
    });
  }

  render() {
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="enter a budget category"
          value={this.state.title}
          onChange={this.handleChange} />
        <input
          type="number"
          name="budget"
          value={this.state.budget}
          onChange={this.handleChange} />
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;
