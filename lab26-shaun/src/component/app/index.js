import React from 'react';
import ReactDom from 'react-dom';
import createNewStore from '../lib';


const store = createNewStore()

console.log('store', store)
class App extends React.Component {


  render() {
    return (
      <h1> Hey </h1>

      )
    }
}

export default App;
