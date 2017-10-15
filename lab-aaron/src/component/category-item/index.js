import React from 'react';
import CategoryForm from '../category-form';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';
import {connect} from 'react-redux';
import {categoryUpdate, categoryDelete} from '../../action/category-actions';
import {expenseUpdate, expenseDelete, expenseCreate} from '../../action/expense-action';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editCategory: false,
      expenseBox: false,
    };
    this.toggleCategory = this.toggleCategory.bind(this);
    this.toggleExpense = this.toggleExpense.bind(this);
  }

  toggleCategory() {
    this.setState({editCategory: !this.state.editCategory});
  }

  toggleExpense(){
    this.setState({expenseBox: !this.state.expenseBox});
  }

  render() {
    let {category, categoryUpdate, categoryDelete, expense, expenses} = this.props;
    return (
      <section>
        <div className="expense-list">
          <h2>{category.title}</h2>
          <h3>Budget: {category.budget}</h3>
          <button onClick={() => this.props.categoryDelete(this.props.category)}>Delete</button>
          <button onClick={this.toggleCategory}>Edit</button>
          {this.state.editCategory ?
            <CategoryForm
              buttonText="update"
              category={category}
              onComplete={this.props.categoryUpdate}
            />
            :
            undefined
          }
          <div className='expense-container'>
            <ExpenseForm
              categoryId={category.id}
              buttonText='New Expense'
              onComplete={this.props.expenseCreate}
            />

            <div className='expense-items'>
              {this.props.expenses.map(expense =>
                <p>
                  <ExpenseItem key={expense.id} expense={expense} category={this.props} />
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

let mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses[props.category.id],
  };
};

let mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
    expenseCreate: (expense) => dispatch(expenseCreate(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
