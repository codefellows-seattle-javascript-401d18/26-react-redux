import React from 'react';
import CategoryForm from '../category-form';
import {connect} from 'react-redux';
import {categoryUpdate, categoryDelete} from '../../action/category-actions';

class CategoryItem extends React.Component {
  render() {
    return(
    <ul>
      <li>
        <h2>Item Name: {this.props.category.title}.</h2>
        <h2>Item Cost:  ${this.props.category.budget}.</h2>
      </li>
        <CategoryForm
          buttonText='Update'
          category={this.props.category}
          onComplete={this.props.categoryUpdate}
        />
        <button className='deleteButton' onClick={()=>this.props.categoryDelete(this.props.category)}>X</button>
    </ul>
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
