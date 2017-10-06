import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.category ? props.category.title : '',
      budget: props.category ? props.category.budget : '',
      id: props.category ? props.category.id : null,
      timestamp: props.category ? props.category.timestamp : null,
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
    this.setState ({ [e.target.name] : e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete({...this.state});
    this.setState({title:'', budget:0});
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
      onChange={this.handleChange}/>

      <input
          name='budget'
          type='number'
          placeholder='cost'
          value={this.state.budget}
          onChange={this.handleChange}/>

      <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;
