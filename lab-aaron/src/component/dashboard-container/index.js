import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions';
import categoryForm from '../category-form';

class DashBoardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__'. this);
    this.props.categoryCreate({title: 'use me maybe?'});
  }

  render() {
    return (
      <main className="main-content">
        <h2>Category DashBoard</h2>
        <categoryForm
          buttontext="create"
          onComplete={this.props.categoryCreate}/>

        {this.props.categories.length ?
          <div>
            {this.props.categories.map(item => {
              return <div key={item.id}>
                <h3>{item.title}</h3>
              </div>;
            })}
          </div> :
          <h2>Add some Categories</h2>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer);
