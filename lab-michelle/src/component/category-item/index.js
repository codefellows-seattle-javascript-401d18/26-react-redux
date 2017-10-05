import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
// import uuid from 'uuid/v4';
import {categoryUpdate, categoryDestroy} from '../../action/category-actions';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "category-item">
      <h3>{this.props.category.title}</h3>
      <button onClick={() => this.props.categoryDestroy(this.props.category)}>X</button>
      <CategoryForm
        buttonText="update"
        onComplete = {this.props.categoryUpdate}
        category = {this.props.category}/>
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    categories: state,
  };
};

let mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDestroy: category => dispatch(categoryDestroy(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);

// CategoryItem Component
//
// should display the category's name and budget
// should display a delete button
// onClick the category should be removed from the application state
// should display a CategoryForm
// onComplete the form should update the component in the application state
