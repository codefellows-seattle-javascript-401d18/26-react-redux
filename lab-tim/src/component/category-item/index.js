import React from 'react';
import {connect} from 'react-redux';
import {
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions';
import CategoryForm from '../category-form';

class CategoryItem  extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="category-item">
        <h2>{this.props.category.title}</h2>
        <CategoryForm
          buttonText='update expense'
          onComplete={this.props.categoryUpdate}
          category={this.props.category}
        />
        <button className='delete-button' onClick={()=>this.props.categoryDelete(this.props.category)}>X</button>
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  };
};

export default connect(mapDispatchToProps)(CategoryItem);

//export default CategoryItem;
