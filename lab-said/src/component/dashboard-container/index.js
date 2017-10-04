import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions';
import CategoryForm from '../category-form';

import CategoryItem from '../category-item';

class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__', this);
  }

  render() {
    return (
      <main className="main-content">
        <h2>Dashboard</h2>

        <h2>Monthly Budget: {this.props.totalMonthly}</h2>
        <h2>
        Total Spent: </h2>
        <h2>Total remaining: {this.props.totalMonthly}</h2>

        <CategoryForm
          buttonText='Create'
          onComplete={this.props.categoryCreate}/>

          <ul className="categoryList">
          {this.props.categories.map((item) => {
            return (
              <CategoryItem
                key={item.id}
                category={item}
                categoryDelete={this.props.categoryDelete}
                categoryUpdate={this.props.categoryUpdate}
              />
            );
          }
          )}
        </ul>
          <h2>Add some categories</h2>

      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    expenses: state.expenses,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
