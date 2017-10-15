import React from 'react';


class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.category ? props.category.title : '',
      budget: props.category ? props.category.budget : '',
      id: props.category ? props.category.id : null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('__FORM_PROPS__', this.props);
  }

  handleChange(e) {
    this.setState({ title: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <h4>{this.props.buttonText} category</h4>
        <input
          required
          type="text"
          name="name"
          placeholder="Expense Category"
          value={this.state.title}
          onChange={this.handleChange}/><br/>

        <input
          name='budget'
          type='number'
          placeholder='cost'
          value={this.state.budget}
          onChange={this.handleChange}/><br/>

        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;
