import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.category ? props.category.title : '',
      id: props.category ? props.category.id : null,
      timestamp: props.category ? props.category.timestamp: null,
      budget: props.category ? props.category.budget: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidMount() {
  //   console.log('__FORM_PROPS__', this.props);
  // }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
    // this.props.toggle();
  }

  render() {
    return(
      <form className = "category-form" onSubmit= {this.handleSubmit}>
        <input
          required
          type ="text"
          name="title"
          placeholder="enter a category for your expenses"
          value={this.state.title}
          onChange={this.handleChange}/>

        <input
          name='budget'
          type='number'
          placeholder='budget'
          onChange = {this.handleChange}
          value={this.state.budget}/>

          <button type ="submit">{this.props.buttonText}</button>
        </form>
    );
  }
}

export default CategoryForm;
