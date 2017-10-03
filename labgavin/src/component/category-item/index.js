import './_category-item.scss';
import React from 'react';
import CategoryForm from '../category-form';


class CategoryItem extends React.Component {
  render() {
    return(
      <li className='list'>
        <h2>{this.props.category.title}</h2>
        <h3>Budget: {this.props.category.budget}</h3>
        <CategoryForm
          buttonText='Update'
          category={this.props.category}
          onComplete={this.props.categoryUpdate}
        />
        <button className='deleteButton' onClick={()=>this.props.categoryDelete(this.props.category)}>X</button>
      </li>
    );
  }
}


export default CategoryItem;
