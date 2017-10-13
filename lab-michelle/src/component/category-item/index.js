import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from '../expense-item';
import ExpenseForm from '../expense-form';
import CategoryForm from '../category-form';
import {expenseCreate, expenseUpdate, expenseDelete} from '../../action/expense-actions';
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
          <button onClick={()=> this.props.categoryDelete(this.props.category)}>X</button>
          <button onClick={this.toggleCategory}>edit category</button>

          {this.state.editCategory ?
            <CategoryForm
              buttonText='update'
              category={this.props.category}
              onComplete={this.props.categoryUpdate}/>
              :
              undefined
          }

        <div className = 'expense-container'>
          <ExpenseForm
            categoryId={this.props.category.id}
            buttonText='create an expense!!'
            onComplete={this.props.expenseCreate}/>

            </div>
        </div>
      </div>
    );
  }
}
    //       <button onClick={() => this.props.categoryDestroy(this.props.category)}>X</button>
    //       <button onClick={this.toggleExpense}>new expense</button>
    //       <h3>{this.props.category.title}</h3>
    //
    //   <CategoryForm
    //     buttonText="update"
    //     onComplete = {this.props.categoryUpdate}
    //     category = {this.props.category}/>
    //   </div>
    // </div>



let mapStateToProps = state => {
  return {
    categories: state.categories,
  };
};

let mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDestroy: category => dispatch(categoryDestroy(category)),
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
