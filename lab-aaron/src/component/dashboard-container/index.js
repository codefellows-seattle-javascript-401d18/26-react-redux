import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashBoardContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.categoryCreate({title: 'Mortgage/Rent', budget: '1500'});
  }

  render() {
    return (
      <main className="dashboard-container">
        <h1>Expense Tracker</h1>
        <h2>Total Budget: {this.props.totalMonthly}</h2>
        <h2>Remaining Budget: {this.props.poop}</h2>
        <div className='category-form'>
          <CategoryForm
            buttonText="create"
            onComplete={this.props.categoryCreate} />
        </div>
        <div className='category-list'>
          {this.props.categories.map(item => {
            return (
              <CategoryItem
                key={item.id}
                category={item} />
            );
          })}
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    totalMonthly: 3000,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer);
