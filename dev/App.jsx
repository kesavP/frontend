/*
 * dev/App.js
 * Author: kesav p
 * Date: 24.09.2019
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-env browser */

import React from 'react';
import { render } from 'react-dom';
import Template from '../src';
import { store, history} from '../src/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';

// Embeds styles
import '../less/standart.less';


class App extends React.Component {
  constructor() {
    super();


  }
  render() {
    return (
    <Provider store={store}>
    <ConnectedRouter history={history}>
     <Switch>
       <Route path="/" component={Template} />
     </Switch>
   </ConnectedRouter>
    </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
