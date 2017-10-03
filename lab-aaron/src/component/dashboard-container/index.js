import React from 'react';
import {connect} from 'react-redux';
import {
  expenseCreate,
  expenseUpdate,
  expenseDelete,
} from '../../action/expense-actions';
import ExpenseForm from '../expense-form';

class DashBoardContainer extends React.Component {
  componentDidMount() {
    console.log('__DASHBOARD__'. this);
    this.props.expenseCreate({title: 'use me maybe?'});
  }

  render() {
    return (
      <main className="main-content">
        <h2>Expense DashBoard</h2>
        <ExpenseForm
          buttontext="create"
          onComplete={this.props.expenseCreate}/>

        {this.props.expenses.length ?
          <div>
            {this.props.expenses.map(item => {
              return <div key={item.id}>
                <h3>{item.title}</h3>
              </div>;
            })}
          </div> :
          <h2>Add some Expenses</h2>
        }
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    expenses: state,
  };
};

const mapDispatchToProps = (dispatch, getState) => {
  return {
    expenseCreate: expense => dispatch(expenseCreate(expense)),
    expenseUpdate: expense => dispatch(expenseUpdate(expense)),
    expenseDelete: expense => dispatch(expenseDelete(expense)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardContainer);
