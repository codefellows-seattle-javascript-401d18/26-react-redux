import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import {
  categoryCreate as categoryActionCreate,
  categoryUpdate as categoryActionUpdate,
  categoryDelete as categoryActionDelete,
} from '../../action/category-actions';

class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__', this);
    this.props.categoryCreate({title: 'Rent'});
    this.props.categoryCreate({title: 'Food'});
    this.props.categoryCreate({title: 'Auto'});
  }

  render() {
    return (
      <main className="main-content">

        <h2>Dashboard</h2>
        <CategoryForm
          buttonText='create expense'
          onComplete={this.props.categoryCreate} />
        <div className="category-list">
          {this.props.categories.map((item) => {
            return (
              <CategoryItem
                key={item.id}
                category={item}
                //categoryDelete={this.props.categoryDelete}
                //categoryUpdate={this.props.categoryUpdate}
              />
            );
          }
          )}
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryActionCreate(category)),
    categoryUpdate: (category) => dispatch(categoryActionUpdate(category)),
    categoryDelete: (category) => dispatch(categoryActionDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
