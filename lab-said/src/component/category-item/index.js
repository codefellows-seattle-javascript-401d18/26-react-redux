import React from 'react';

import CategoryForm from '../category-form';

import ExpenseForm from '../expense-form';

import ExpenseItem from '../expense-item';

import { connect } from 'react-redux';

import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';

import {expenseUpdate, expenseDelete, expenseCreate} from '../../action/expense-actions.js';

class CategoryItem extends React.Component {

  render() {
    let {category, categoryUpdate, categoryDelete, expense, expenses} = this.props;
    return(
      <section>
        <li className='list'>
        <h3>Category Name: {this.props.category.title}.<br/>Item Cost:  ${this.props.category.budget}.</h3>
          <CategoryForm
            buttonText='Update'
            category={category}
            onComplete={this.props.categoryUpdate}
          />
          <button className='deleteButton' onClick={()=>this.props.categoryDelete(this.props.category)}>Delete</button>
          <div className='expense-container'>
            <ExpenseForm
              categoryID={category.id}
              buttonText='Create Expense'
              onComplete={this.props.expenseCreate}
            />

            <ul className='expense-items'>
              {this.props.expenses.map(expense =>
                <ExpenseItem key={expense.id} expense={expense} category={this.props} />
              )}
            </ul>
          </div>
        </li>

      </section>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses[props.category.id],
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
    expenseCreate: (expense) => dispatch(expenseCreate(expense)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);