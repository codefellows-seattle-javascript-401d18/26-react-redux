import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.categoryDestroy(e.target.value = e.target.name)
  }

  render() {
    return (
      <button onClick={this.handleClick}>delete</button>
      <CategoryForm />

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
