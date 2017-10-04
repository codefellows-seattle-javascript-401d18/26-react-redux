import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import DashboardContainer from '../dashboard-container';
import createAppStore from '../../lib/store';

const store = createAppStore();

class App extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      console.log('__STATE__', store.getState());
    });

    store.dispatch({ type: null });
  }

  render() {
    return (
      <section className="expense-tracker">
        <Provider store={store}>
          <BrowserRouter>
            <section>
              <Route exact path="/" component={DashboardContainer} />
            </section>
          </BrowserRouter>
        </Provider>
      </section>
    );
  }
}

export default App;
