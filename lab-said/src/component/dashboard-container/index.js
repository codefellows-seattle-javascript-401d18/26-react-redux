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
    console.log('__DASHBOARD__', this.props);
  }

  render() {
    return (
      <main className="dashboard-container">
        <h1>Dashboard</h1>
        <h2>Monthly Budget: ${this.props.totalMonthly}</h2>
        <h2>Total Spent: ${this.props.totalRemaining}</h2>
        <h2>Remaining: ${this.props.totalRemaining}</h2>
        <div className='categoryForm'>
          <CategoryForm
            buttonText='Create'
            onComplete={this.props.categoryCreate} />
        </div>
        <ul className="categoryList">
          {this.props.categories.map((item) => {
            console.log(item, 'thisisitem');
            return (
              <CategoryItem
                key={item.id}
                category={item}
              />
            );
          }
          )}
        </ul>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    totalMonthly: 5000,
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
