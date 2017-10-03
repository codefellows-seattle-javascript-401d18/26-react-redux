import React from 'react';
import {connect} from 'react-redux';
import {
  categoryUpdate as categoryActionUpdate,
  categoryDelete as categoryActionDelete,
} from '../../action/category-actions';
import CategoryForm from '../category-form';

class CategoryItem  extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <li className="category-item">
        <h2>{this.props.category.title}</h2>
        <CategoryForm
          buttonText='update expense'
          onComplete={this.props.categoryUpdate}
          category={this.props.category}
        />
        <button onClick={()=>this.props.categoryDelete(this.props.category)}>X</button>
      </li>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     categories: state,
//   };
// };

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: (category) => dispatch(categoryActionUpdate(category)),
    categoryDelete: (category) => dispatch(categoryActionDelete(category)),
  };
};

export default connect(null, mapDispatchToProps)(CategoryItem);

//export default CategoryItem;
