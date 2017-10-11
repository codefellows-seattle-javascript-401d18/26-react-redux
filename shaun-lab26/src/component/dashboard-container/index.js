import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions';
import CategoryForm from '../category-form';

class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__', this);
    // this.props.categoryCreate({title: 'Savings'});
    // this.props.categoryCreate({title: 'Groceries'});
    // this.props.categoryCreate({title: 'Gas'});
  }

  render() {
    return (
      <main className="main-content">
        <h2>Dashboard</h2>
        <CategoryForm
          buttonText="create"
          onComplete={this.props.categoryCreate} />

        {this.props.categories.length ?
          <div>
            {this.props.categories.map(item => {
              return <div key={item.id}>
                <h3>{item.title}: ${item.budget} budget</h3></div>;
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
