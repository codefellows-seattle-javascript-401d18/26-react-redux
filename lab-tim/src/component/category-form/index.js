import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.category ? props.category.title : '',
      id: props.category ? props.category.id : '',
      name: props.category ? props.category.name : '',
      budget: props.category ? props.category.budget : '',
      timestamp: props.category ? props.category.timestamp : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // if a new category is being passed in update the state to reflect the change
  componentWillReceiveProps(props) {
    if(props.category) this.setState(props.category);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
    this.setState({title: ''});   //this line clears out the submit box on submit click
  }

  render() {
    return (
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          required
          type="text"
          name="title"
          placeholder="enter a category"
          value={this.state.title}
          onChange={this.handleChange}/>
        <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;
