import './_category-item.scss';
import React from 'react';
import {connect} from 'react-redux';
import CategoryForm from '../category-form';
import {categoryUpdate, categoryDelete} from '../../action/category-actions';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.category ? props.category.title : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
  }

  render() {
    return (
      <div className="category-item">
        <button id="delete-button" onClick={() => this.props.categoryDelete(this.props.category)}>x</button>
        <h3>{this.props.category.title}</h3>
        <CategoryForm
          buttonText="update"
          onComplete={this.props.categoryUpdate}
          category={this.props.category}/>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch, action) => {
  return {
    categoryUpdate: category => dispatch(categoryUpdate(category)),
    categoryDelete: category => dispatch(categoryDelete(category)),
  };
};

export default connect(null, mapDispatchToProps)(CategoryItem);
