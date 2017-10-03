import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.cateogry ? props.category.title : '',
      budget: props.category ? props.category.budget : '',
      id: props.category ? props.category.id : null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState ({ [e.target.name] : e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>

      <h3>{this.props.buttonText} an expense category</h3>

      <input
      type="text"
      name="title"
      placeholder="enter a title"
      value={this.state.title}
      onChange={this.handleChange} required/>

      <input
          name='budget'
          type='number'
          placeholder='cost'
          value={this.state.budget}
          onChange={this.handleChange} required/>

      <button type="submit">{this.props.buttonText}</button>
      </form>

    );
  }
}

export default CategoryForm;
