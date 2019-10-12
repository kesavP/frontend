/**
 * src/components/MetisMenu.jsx
 * Author: kesav chaitanya
 * Date: 28.09.2019
 */

/* eslint react/prop-types: 0 */

import React from "react";

import LeftSideMenu from "./LeftSideMenu";
import Link from "./DefaultLink";
import { store, history } from "../store";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Test from "./Test";
import PropTypes from "prop-types";

const menu1 = [
  {
    id: 1,
    icon: "dashboard",
    label: "Menu 1",
    to: "#menu-1"
  },
  {
    id: 2,
    icon: "bell",
    label: "Menu 2",
    to: "#menu-2"
  },
  {
    id: 3,
    icon: "bolt",
    label: "Menu 3",
    content: [
      {
        id: 4,
        icon: "bolt",
        label: "Test",
        to: "#test"
      }
    ]
  },
  {
    id: 5,
    icon: "bars",
    label: "Menu 4",
    content: [
      {
        id: 6,
        icon: "bold",
        label: "Sub Menu 1",
        to: "#sub-menu-1"
      },
      {
        id: 7,
        icon: "italic",
        label: "Sub Menu 2",
        content: [
          {
            id: 8,
            icon: "cog",
            label: "Level 3 Menu 1",
            to: "#level-3-menu-1"
          },
          {
            id: 9,
            icon: "group",
            label: "Level 3 Menu 2",
            to: "#level-3-menu-2"
          }
        ]
      },
      {
        id: 10,
        icon: "image",
        label: "Sub Menu 3",
        content: [
          {
            id: 11,
            icon: "cog",
            label: "Level 3 Menu 3",
            to: "#level-3-menu-3"
          },
          {
            id: 12,
            icon: "group",
            label: "Level 3 Menu 4",
            to: "#level-3-menu-4"
          }
        ]
      },
      {
        id: 13,
        icon: "check",
        label: "Sub Menu 4",
        to: "#sub-menu-4"
      }
    ]
  },
  {
    id: 14,
    icon: "external-link",
    label: "External Link",
    externalLink: true,
    to: "https://www.google.com"
  }
];

class Template extends React.Component {
  constructor(props) {
    super(props);

    this.store = store;
    this.link = Link;
    this.oneRef = React.createRef();

    this.state = {
      menu: menu1,
      labelButtonClick : false,
    };
    this.doLabelChange = this.doLabelChange.bind(this);
  }

  doLabelChange(){
    console.log('label change button pressed ');
    this.setState({labelButtonClick : !this.state.labelButtonClick});
  }

  render() {
    return (
      <React.Fragment>
        <React.Fragment>
          <LeftSideMenu
            ref= {this.oneRef}
            className="menu"
            content={this.state.menu}
            labelChange={this.state.labelButtonClick}
            classNameItemHasVisibleChild="open"
            parentLabelToogle = {this.doLabelChange}
          ></LeftSideMenu>
        </React.Fragment>
        <div className="body">
        <BrowserRouter>
          <Switch>
          <Route exact path="/test" component={ () => <Test parentLabelToogle = {this.doLabelChange} btntext = 'showTest'/>} />
            // <Route exact path="/test" component={ () => <Test lsMenuRef = {() => this.oneRef} />} />
          </Switch>
        </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }

  getChildContext() {
    return {
      menuRef : this.oneRef,
      store: this.store,
      developer: "kesav",
      classStore: {},
      LinkComponent: this.link,
    };
  }
}

Template.defaultProps = {
  reduxStoreName: "metisMenuStore"
};

Template.childContextTypes = {
  developer: PropTypes.string.isRequired,
  store: PropTypes.object.isRequired,
  classStore: PropTypes.object.isRequired,
  LinkComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
    menuRef : PropTypes.object.isRequired,
};

export default Template;
