import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';
import CategoryForm from '../category-form';
import {expenseCreate} from '../../action/expense-actions';
import {categoryUpdate, categoryDestroy} from '../../action/category-actions';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expenseForm: false,
      categoryForm: false,
    };
    this.toggleExpense = this.toggleExpense.bind(this);
    this.toggleCategory = this.toggleCategory.bind(this);
  }

  toggleExpense() {
    this.setState({expenseForm: !this.state.expenseForm});
  }

  toggleCategory() {
    this.setState({categoryForm: !this.state.categoryForm});
  }

  componentDidUpdate() {
    console.log('Is it updating? YES!');
  }

  render() {
    return (
      <div className = "category-item">
        <div className= "content-container">
          <button className = "remove" onClick={() => this.props.categoryDestroy(this.props.category)}>X</button>
          <button onClick={this.toggleCategory}>edit category</button>
          <button onClick={this.toggleExpense}>new expense</button>
          <h3>{this.props.category.title}</h3>

    {this.state.categoryForm ?
      <CategoryForm
        buttonText="update"
        onComplete = {this.props.categoryUpdate}
        category = {this.props.category}
        toggle = {this.toggleCategory}
      /> :
      undefined
    }
  </div>
  <div className="content-container">
    {this.state.expenseForm ?
      <ExpenseForm
        buttonText="log your expense"
        categoryId = {this.props.category.id}
        onComplete = {this.props.expenseCreate}
        toggle={this.toggleExpense}/>: undefined
    }

    {this.props.expenses[this.props.category.id].length ?
      this.props.expenses[this.props.category.id].map(expense => <ExpenseItem key={expense.id} expense={expense}/>)
    :
    <h3>No expenses, you must be rich!</h3>
    }
    </div>
  </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    expenses: state.expenses,
  };
};

let mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDestroy: category => dispatch(categoryDestroy(category)),
    expenseCreate: expense => dispatch(expenseCreate(expense)),
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
