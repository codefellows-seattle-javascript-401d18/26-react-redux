import React from 'react';
import {connect} from 'react-redux';
import {
  expenseUpdate as expenseActionUpdate,
  expenseDelete as expenseActionDelete,
} from '../../action/expense-actions';
import CategoryForm from '../category-form';

class ExpenseItem  extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="expense-item">
        <h2>{this.props.expense.title}</h2>
        <ExpenseForm
          buttonText='update expense'
          onComplete={this.props.expenseUpdate}
        />
        <button onClick={()=>this.props.expenseDelete(this.props.expense)}>X</button>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     categories: state,
//   };
// };

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseUpdate: (category) => dispatch(expenseActionUpdate(category)),
    expenseDelete: (category) => dispatch(expenseActionDelete(category)),
  };
};

export default connect(null, mapDispatchToProps)(ExpenseItem);

//export default CategoryItem;
