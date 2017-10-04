import './_dashboard-container.scss';
import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

import {
  expenseCreate,
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-actions';
import ExpenseForm from '../expense-form';
import ExpenseItem from '../expense-item';

class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__', this.props);
    this.props.categoryCreate({title: 'Star Wars'});
    this.props.categoryCreate({title: 'Dune'});
    this.props.categoryCreate({title: 'Star Trek'});
    this.props.expenseCreate({title: 'popcorn', price: 12});
    this.props.expenseCreate({title: 'popcorn', price: 12});
    this.props.expenseCreate({title: 'popcorn', price: 12});
  }
  render() {
    console.log(this.props);
    return (
      <main className="main-content">
        <header className="main-header">
          <h2>Dashboard</h2>
        </header>

        <CategoryForm
          buttonText="create"
          onComplete={this.props.categoryCreate}/>

        {this.props.categories.length ?

            <div>
              {this.props.categories.map(item => {
                return <CategoryItem
                          key={item.id}
                          category={item}/>;
              })}
            
            </div> :


              <h2>Add some categories</h2>

        }
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state,
    expenses: state,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
    expenseCreate: expense => dispatch(expenseCreate(expense)),
    expenseUpdate: expense => dispatch(expenseUpdate(expense)),
    expenseDelete: expense => dispatch(expenseDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
