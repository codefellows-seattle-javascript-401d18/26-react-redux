import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem extends React.Component {
  render() {
    return(
    <ul>
      <li>
        <h2>Item Name: {this.props.category.title}.</h2>
        <h2>Item Cost:  ${this.props.category.budget}.</h2>
      </li>
        <CategoryForm
          buttonText='Update'
          category={this.props.category}
          onComplete={this.props.categoryUpdate}
        />
        <button className='deleteButton' onClick={()=>this.props.categoryDelete(this.props.category)}>X</button>
    </ul>
    );
  }
}

export default CategoryItem;
