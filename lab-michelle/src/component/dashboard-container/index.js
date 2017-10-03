import React from 'react';
import {connect} from 'react-redux';
import {
  categoryCreate,
  categoryUpdate,
  categoryDestroy,
} from '../../action/category-actions';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';


class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__', this);
    this.props.categoryCreate({name: 'Fake Category'});
  }

  render() {
    return(
      <main className="main-content">
        <h2>Dashboard</h2>

        <CategoryForm
          buttonText = "create"
          onComplete = {this.props.categoryCreate}/>

          {this.props.categories.length ?
          <div>
            {this.props.categories.map(item => { return <div key={item.id}>
              <h3>{item.name}</h3>
            </div>
            })} </div>
            :
            <h2>Add some categories</h2>
        }
      </main>
    )
  }


//wtf...
  const mapStateToProps = state => {
    return {
      categories: state,
    }
  }

  const mapDispatchToProps = (dispatch, getState) => {
    return {
      categoryCreate: category => dispatch(categoryCreate(category)),
      categoryUpdate: category => dispatch(categoryUpdate(category)),
      categoryDestroy: category => dispatch(categoryDestroy(category)),
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer)

// Dashboard Component
//
// should be displayed on the / route
// should use react-redux's connect to map state and dispatch methods to props
// should display a CategoryForm for adding categories to the application state
// should display a CategoryItem for each category in the application state
