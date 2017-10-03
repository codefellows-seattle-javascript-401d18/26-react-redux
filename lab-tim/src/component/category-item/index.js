import React from 'react';

class CategoryItem  extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('__ITEM_STATE__', this.state);
    console.log('__ITEM_PROPS__', this.props);
  }

  render() {
    return (
      <div className="category-item">
        {this.props.categories.length ?
          <div>
            {this.props.categories.map((item) => {
              return <div key={item.id}>
                <h3>{item.title}</h3>
              </div>;
            })}
          </div> :
          <h2>Add some expense categories</h2>
        }
      </div>
    );
  }
}

export default CategoryItem;
