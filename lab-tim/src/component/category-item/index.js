import React from 'react';
import CategoryForm from '../category-form';

class CategoryItem  extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>
        <h2>{this.props.category.title}</h2>
        <CategoryForm
          buttonText='Update'
          category={this.props.category}
          onComplete={this.props.categoryUpdate}
        />
        <button className='delete-button' onClick={()=>this.props.categoryDelete(this.props.category)}>X</button>
      </li>
    );
  }
}

export default CategoryItem;
