import './_category-item.scss';
import React from 'react';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import { connect } from 'react-redux';
import {categoryUpdate, categoryDelete} from '../../action/category-actions.js';
import {expenseUpdate, expenseDelete, expenseCreate} from '../../action/expense-actions.js';


class CategoryItem extends React.Component {




  render() {
    let {category, categoryUpdate, categoryDelete, expenseCreate, expense, expenses} = this.props;
    return(
      <section>
        <li className='list'>
          <h2>{category.title}</h2>
          <h3>Budget: {category.budget}</h3>
          <CategoryForm
            buttonText='Update'
            category={category}
            onComplete={categoryUpdate}
          />
          <button className='deleteButton' onClick={()=>this.props.categoryDelete(this.props.category)}>X</button>
          <div className='expense-container'>
            <ExpenseForm
              categoryID={category.id}
              buttonText='create expense'
              onComplete={expenseCreate}
            />

            <ul className='expense-items'>
            console.log(expenses, 'expenses');
              {expenses.map(expense =>
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
