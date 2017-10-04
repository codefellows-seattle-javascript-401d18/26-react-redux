import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import {categoryUpdate, categoryDelete} from '../../action/category-actions';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryEdit: false,
    };
    this.toggleUpdate =this.toggleUpdate.bind(this);
  }

  toggleUpdate(e) {
    this.setState({
      categoryEdit: !this.state.categoryEdit,
    });
  }

  render() {
    return(
      <div className="category-item">
        <h3 key={this.props.category.id} onDoubleClick={this.toggleUpdate}>{this.props.category.title}: ${this.props.category.budget} budget</h3>
        <button onClick={() => this.props.categoryDelete(this.props.category)}>delete</button>
        {this.state.categoryEdit ?
          <CategoryForm
            buttonText="update"
            onComplete={this.props.categoryUpdate}
            category={this.props.category}/> :
          undefined
        }
      </div>
    );
  }
}

let mapStateToProps = state => {
  return {
    category: state,
  };
};

let mapDispatchToProps = (dispatch, getState) => {
  return{
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  };
};

export default connect(null, mapDispatchToProps)(CategoryItem);
