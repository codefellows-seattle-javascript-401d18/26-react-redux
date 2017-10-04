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

  // componentDidMount() {
  //   console.log('__DASHBOARD__', this.props);
  //
  //   this.props.categoryCreate({title: 'Dining Out', budget: '500'});
  // }
  //
  // componentDidReceiveProps(){
  //
  // }

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
    totalMonthly: 2000,
    // totalRemaining: 2000 - this.state.totalSpent,
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
