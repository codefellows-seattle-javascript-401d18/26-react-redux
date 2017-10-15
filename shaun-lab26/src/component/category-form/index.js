import React from 'react';
import uuid from 'uuid/v4';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.category ? props.category.title : '',
      budget: props.category ? props.category.budget : '',
      id: props.category ? props.category.id :null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props) {
    if (props.category) {
      this.setState(props.category);
    }
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete({...this.state});

    if (!this.props.category) {
      this.setState({ title: '' });
    }
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
