/*
 * dev/App.js
 * Author: kesav p
 * Date: 24.09.2019
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */
/* eslint-env browser */

import React from 'react';
import { render } from 'react-dom';
import MetisMenu from '../src';
import { store, history} from '../src/store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';

// Embeds styles
import '../less/standart.less';

const menu1 = [
  {
    id: 1,
    icon: 'dashboard',
    label: 'Menu 1',
    to: '#menu-1',
  },
  {
    id: 2,
    icon: 'bell',
    label: 'Menu 2',
    to: '#menu-2',
  },
];


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      menu: menu1,
    };
  }
  render() {
    return (
    <Provider store={store}>
    <ConnectedRouter history={history}>
     <Switch>
       <Route path="/" component={MetisMenu} />
     </Switch>
   </ConnectedRouter>
    </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
