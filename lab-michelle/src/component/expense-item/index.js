import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
import {expenseCreate, expenseUpdate, expenseDelete} from '../../action/category-actions';


import React from 'react';
import {connect} from 'react-redux';
import ExpenseForm from '../expense-form';
// import uuid from 'uuid/v4';
import {categoryUpdate, categoryDelete} from '../../action/category-actions';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "category-item">
      <button onClick={() => this.props.categoryDelete(this.props.catgory)}>X</button>
      <h3>{this.props.category.title}</h3>
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
    categoryDelete: category => dispatch(categoryDelete(category)),
  };
};

export default connect(null, mapDispatchToProps)(CategoryItem);

// CategoryItem Component
//
// should display the category's name and budget
// should display a delete button
// onClick the category should be removed from the application state
// should display a CategoryForm
// onComplete the form should update the component in the application state
