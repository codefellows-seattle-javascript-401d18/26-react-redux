import React from 'react';
import uuid from 'uuid/v4';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: uuid,
      budget: 100,
      //do they need a category?//
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
  }

  handleClick(e){
    e.preventDefault();
//SOMETHING
  }

  render() {
    return (
      <form className ="category-form" onSubmit = {this.handleSubmit} onClick = {this.handleClick}>
      <button type = "submit"> {this.props.buttonText}</button>
      </form>
    );
  }
}

export default CategoryItem;

// CategoryItem Component
//
// should display the category's name and budget
// should display a delete button
// onClick the category should be removed from the application state
// should display a CategoryForm
// onComplete the form should update the component in the application state
