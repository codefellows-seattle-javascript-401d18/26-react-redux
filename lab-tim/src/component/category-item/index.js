import React from 'react';
import {connect} from 'react-redux';
import {
  categoryUpdate as categoryActionUpdate,
  categoryDelete as categoryActionDelete,
} from '../../action/category-actions';
import {
  expenseCreate as expenseActionCreate,
  expenseUpdate as expenseActionUpdate,
  expenseDelete as expenseActionDelete,
} from '../../action/expense-actions';
import CategoryForm from '../category-form';

class CategoryItem  extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="category-item">
        <h2>{this.props.category.title}</h2>
        <CategoryForm
          buttonText='update category'
          onComplete={this.props.categoryUpdate}
          category={this.props.category}
        />
        <button onClick={()=>this.props.categoryDelete(this.props.category)}>X</button>
        <ExpenseForm
          category={this.props.categoryId}
          onComplete={this.props.expenseUpdate}
        // List of expense items {expense}
        />
      </div>
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
    expenseCreate: (category) => dispatch(expenseActionCreate(category)),
    expenseUpdate: (category) => dispatch(expenseActionUpdate(category)),
    expenseDelete: (category) => dispatch(expenseActionDelete(category)),
  };
};

export default connect(null, mapDispatchToProps)(CategoryItem);

//export default CategoryItem;
