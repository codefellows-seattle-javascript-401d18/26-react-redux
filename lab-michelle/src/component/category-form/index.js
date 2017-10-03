import React from 'react';

class CategoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      this.props.onComplete//something
    }
  }
  render() {
    <form className ="category-form" onSubmit = {this.handleSubmit} onClick = {this.handleClick}>
    <button type = "submit"> {this.props.buttonText}</button>
    </form>

  }
  onCompl
}


handleSubmit(e) {
  e.preventDefault();
  this.props.onComplete(Object.assign({}, this.state));
}




// should expect an onComplete prop to be a function
// that function should be invoked with the CategoryForm's state when the form is submitted
// should expect a buttonText prop to configure the submit button text
// should support an optional category prop that will initialize the state of the form
