import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.expense ? props.expense.name : '',
      price: props.expense ? props.expense.price : '',
      categoryID: props.expense ? props.expense.categoryID  : props.categoryID,
      id: props.expense ? props.expense.id  : props.id,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.expense)
      this.setState({...props.expense});
    if(props.categoryID)
      this.setState({categoryID: props.categoryID});
  }

  handleChange(e){
    if(e.target.name === 'content'){
      this.setState({content: e.target.value});
    }
    this.setState({price: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    if(!this.props.expense)
      this.setState({content: ''});
      this.setState({price: ''});
  }

  render(){
    return (
      <form className='expense-form' onSubmit={this.handleSubmit} >
        <input
          name='content'
          type='text'
          placeholder='content'
          value={this.state.val}
          onChange={this.handleChange} required/>

        <input
          name='price'
          type='number'
          placeholder='price'
          value={this.state.value}
          onChange={this.handleChange} required/>

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }
}

export default ExpenseForm;
