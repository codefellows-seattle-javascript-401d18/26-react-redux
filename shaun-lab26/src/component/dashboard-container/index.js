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
    // this.props.categoryCreate({title: 'Savings'});
    // this.props.categoryCreate({title: 'Groceries'});
    // this.props.categoryCreate({title: 'Gas'});
  }

  render() {
    return (
      <main className="dashboard-container">
        <h1>Dashboard</h1>
        <h2>Total Monthly Budget: {this.props.totalMonthly}</h2>
        <h2>Total remaining: {this.props.totalRemaining}</h2>

        <CategoryForm
          buttonText='Create'
          onComplete={this.props.categoryCreate} />
        <ul className="categoryList">
          {this.props.category.map((item) => {
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
    categories: state,
    totalMonthly: 2000,

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
