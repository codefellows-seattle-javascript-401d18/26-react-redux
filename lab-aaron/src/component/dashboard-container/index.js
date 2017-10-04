import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate} from '../../action/category-actions';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';

class DashBoardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__'. this);
    this.props.categoryCreate({title: 'Automatic Payments'});
    this.props.categoryCreate({title: 'Debit Card Purchases'});
    this.props.categoryCreate({title: 'Mortgage/Rent'});
  }

  render() {
    return (
      <main className="main-content">
        <h2>Category DashBoard</h2>
        <CategoryForm
          buttontext="create"
          onComplete={this.props.categoryCreate}/>

        {this.props.categories.length ?
          <div>
            {this.props.categories.map(item => {
              return <CategoryItem
                key={item.id}
                category={item}/>;
            })}
          </div> :
          <h2>Add some Expense Categories</h2>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer);
