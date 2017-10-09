import './_dashboard-container.scss';
import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import CategoryItem from '../category-item';
import {categoryCreate} from '../../action/category-actions';

class DashboardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__', this);
    this.props.categoryCreate({title: 'Houston'});
    this.props.categoryCreate({title: 'Chicago'});
    this.props.categoryCreate({title: 'Seattle'});
  }

  render() {
    return (
      <main className="main-content">
        <header className="main-header">
          <h2>Smash Dashboard</h2>
        </header>

        <CategoryForm
          buttonText="create"
          toggle={() => {}}
          onComplete={this.props.categoryCreate}/>

        {this.props.categories.length ?
            <div>
              {this.props.categories.map(item => {
                return <CategoryItem
                          key={item.id}
                          category={item}/>;
              })}

            </div> :

              <h3>Add some categories</h3>

        }
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: category => dispatch(categoryCreate(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
