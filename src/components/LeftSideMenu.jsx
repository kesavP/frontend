/*
 * dev/App.js
 * Author: Kesav P 'keshav.pheelkhana@gmail.com'
 * Date: 22.09.2019
 */

import React from 'react';
import {
  render
} from 'react-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {
  updateContent
} from '../actions/content';
import LeftMenuContainer from '../containers/LeftMenuContainer';
import Link from './DefaultLink';

let lastReduxUid = -1;
class LeftSideMenu extends React.Component {
  constructor(props) {
    super(props);
    console.log('props ',props);

    lastReduxUid += 1;
    this.reduxUid = lastReduxUid;
    this.reduxStoreName = props.reduxStoreName;
    this.devName ="KESAVA",
    this.LinkComponent = props.LinkComponent;

    this.classStore = {
      classMainWrapper: classnames(
        { 'metismenu': !props.noBuiltInClassNames },
        props.className,
      ),
      classContainer: typeof props.classNameContainer === 'function'
         ? props.classNameContainer
         : classnames(
           { 'metismenu-container': !props.noBuiltInClassNames },
           props.classNameContainer,
         ),
         // to toggle visable class on click
         classContainerVisible: classnames(
         { visible: !props.noBuiltInClassNames },
         props.classNameContainerVisible,
      ),
      // to add line height and icon
      classItem: classnames(
         { 'metismenu-item': !props.noBuiltInClassNames },
         props.classNameItem,
       ),
       classLink: classnames(
         { 'metismenu-link': !props.noBuiltInClassNames },
         props.classNameLink,
       ),
       // to show icon and allign
       classIcon: classnames(
         { 'metismenu-icon': !props.noBuiltInClassNames },
         props.classNameIcon,
       ),
       // to show arrow at parent have childs and toggle
       classStateIcon: classnames(
         { 'metismenu-state-icon': !props.noBuiltInClassNames },
         props.classNameStateIcon,
       ),
       // to prefix icon in item group
       iconNamePrefix: props.iconNamePrefix,
       //to add css class open if menu item has subchilds in open
       classItemHasVisibleChild: props.classNameItemHasVisibleChild,
       // show arrow placeholder at parent having child menu
       iconNameStateHidden: props.iconNameStateHidden,
       //toggle haschildren placeholder
       iconNameStateVisible: props.iconNameStateVisible,

    }

    if(props.content){
      this.updateContent(props.content,props.store);
    }
}

updateContent(content,store) {
  // console.log('in the update content method ',content);
    store.dispatch(updateContent(this.reduxUid, content));
  }

  getChildContext() {
    console.log(this.classStore)
      return {
        classStore: this.classStore,
        LinkComponent: this.LinkComponent,
        developer : this.devName,
      };
    }

  render() {
    const mainWrapper = (<div className={this.classStore.classMainWrapper}>
      <LeftMenuContainer
        reduxStoreName={this.reduxStoreName}
        reduxUid={this.reduxUid}
      />
      </div>
    );
    return (
      <div>{mainWrapper}</div>
    );
  }
}

LeftSideMenu.defaultProps = {
  content: [],
  noBuiltInClassNames: false,
  reduxStoreName: 'metisMenuStore',
  LinkComponent: Link,
  classNameItemHasActiveChild: null,
  className: null,
  classNameIcon: null,
  iconNamePrefix: 'fa fa-',
  iconNameStateHidden: 'caret-left',
  classNameItemHasVisibleChild: null,
  iconNameStateVisible: 'caret-left rotate-minus-90',
}

LeftSideMenu.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  noBuiltInClassNames: PropTypes.bool,
  reduxStoreName: PropTypes.string,
  classNameItemHasActiveChild: PropTypes.string,
  className: PropTypes.string,
  LinkComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
  classNameIcon: PropTypes.string,
  iconNamePrefix: PropTypes.string,
  iconNameStateHidden: PropTypes.string,
  classNameItemHasVisibleChild: PropTypes.string,
  iconNameStateVisible: PropTypes.string,
}

LeftSideMenu.childContextTypes = {
  developer : PropTypes.string.isRequired,
  classStore: PropTypes.object.isRequired,
  LinkComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
};

export default LeftSideMenu;
