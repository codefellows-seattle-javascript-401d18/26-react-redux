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
          <h2>{this.props.category.title}</h2>
          <button className="remove" onClick={()=> this.props.categoryDestroy(this.props.category)}>X</button>
          <button onClick={this.toggleCategory}>edit category</button>
          <button onClick={this.toggleExpense}> new expense </button>

          {this.state.categoryForm ?
            <CategoryForm
              buttonText='update'
              category={this.props.category}
              toggle={this.toggleCategory}
              onComplete={this.props.categoryUpdate}/>
              :
              undefined
          }

        <div className = 'expense-container'>
          {this.state.expenseForm ?
            <ExpenseForm
            buttonText='create an expense!!'
            categoryId={this.props.category.id}
            toggle = {this.toggleExpense}
            onComplete={this.props.expenseCreate}/>
            :
            undefined
          }

          {this.props.expenses[this.props.category.id].length ?
            this.props.expenses[this.props.category.id].map(expense => <ExpenseItem key={expense.id} expense={expense}/>)
            :
            <h2> No expenses </h2>
          }

            </div>
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
