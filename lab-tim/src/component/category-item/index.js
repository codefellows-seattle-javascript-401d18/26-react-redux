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
import ExpenseForm from '../expense-form';

class CategoryItem  extends React.Component {
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
          categoryId={this.props.categoryId}
          onComplete={this.props.expenseCreate}
        // List of expense items {expense}
        />
      </div>
    );
  }
}

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: (category) => dispatch(categoryActionUpdate(category)),
    categoryDelete: (category) => dispatch(categoryActionDelete(category)),
    expenseCreate: (category) => dispatch(expenseActionCreate(category)),
    expenseUpdate: (category) => dispatch(expenseActionUpdate(category)),
    expenseDelete: (category) => dispatch(expenseActionDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);

//export default CategoryItem;
