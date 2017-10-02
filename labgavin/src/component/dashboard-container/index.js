import React from 'react';
import './_dashboard-container.scss';
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
    this.props.categoryCreate({title: 'Dining Out', budget: '500'});

  }

  render() {
    return (
      <main className="dashboard-container">
        <h1>Dashboard</h1>
        <h2>Total Monthly Budget: {this.props.totalMonthly}</h2>
        <h2>Total remaining: {this.props.totalMonthly}</h2>

        <CategoryForm
          buttonText='Create'
          onComplete={this.props.categoryCreate} />
        <ul className="categoryList">
          {this.props.categories.map((item) => {
            console.log(item);
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
      </main>

    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state,
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
