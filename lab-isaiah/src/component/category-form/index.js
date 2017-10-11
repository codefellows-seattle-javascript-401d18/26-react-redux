import './_category-form.scss';
import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.category ? props.category.title : '',
      id: props.category ? props.category.id : null,
      timestamp: props.category ? props.category.timestatmp : null,
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
      <form className="category-form" onSubmit={this.handleSubmit}>
        <input
          className="cateForm"
          type="text"
          name="title"
          placeholder="enter a title"
          required
          value={this.state.title}
          onChange={this.handleChange}/>

          <button type="submit">{this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryForm;
