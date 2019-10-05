/*
 * dev/App.js
 * Author: Kesav P 'keshav.pheelkhana@gmail.com'
 * Date: 22.09.2019
 */
/* eslint react/prop-types: 0 */
import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import classnames from "classnames";
import { updateContent,changeActiveLinkLabel } from "../actions/content";
import LeftMenuContainer from "../containers/LeftMenuContainer";

let lastReduxUid = -1;
class LeftSideMenu extends React.Component {
  constructor(props) {
    super(props);
    console.log('lsmenu props',props)
    lastReduxUid += 1;
    this.reduxUid = lastReduxUid;
    this.reduxStoreName = props.reduxStoreName;

    this.classStore = {
      classMainWrapper: classnames(
        { metismenu: !props.noBuiltInClassNames },
        props.className
      ),
      classContainer:
        typeof props.classNameContainer === "function"
          ? props.classNameContainer
          : classnames(
              { "metismenu-container": !props.noBuiltInClassNames },
              props.classNameContainer
            ),
      // to toggle visable class on click
      classContainerVisible: classnames(
        { visible: !props.noBuiltInClassNames },
        props.classNameContainerVisible
      ),
      //add line height and icon
      classItem: classnames(
        { "metismenu-item": !props.noBuiltInClassNames },
        props.classNameItem
      ),
      classLink: classnames(
        { "metismenu-link": !props.noBuiltInClassNames },
        props.classNameLink
      ),
      classLinkActive: classnames(
        { active: !props.noBuiltInClassNames },
        props.classNameLinkActive
      ),
      //add indication of parent on click
      classLinkHasActiveChild: classnames(
        { "has-active-child": !props.noBuiltInClassNames },
        props.classNameLinkHasActiveChild
      ),
      // to show icon and allign
      classIcon: classnames(
        { "metismenu-icon": !props.noBuiltInClassNames },
        props.classNameIcon
      ),
      // to show arrow at parent have childs and toggle
      classStateIcon: classnames(
        { "metismenu-state-icon": !props.noBuiltInClassNames },
        props.classNameStateIcon
      ),
      // to prefix icon in item group
      iconNamePrefix: props.iconNamePrefix,
      //to add css class open if menu item has subchilds in open
      classItemHasVisibleChild: props.classNameItemHasVisibleChild,
      // show arrow placeholder at parent having child menu
      iconNameStateHidden: props.iconNameStateHidden,
      //toggle haschildren placeholder
      iconNameStateVisible: props.iconNameStateVisible
    };
  }

  componentWillReceiveProps(props) {
    this.changeActiveLinkLabel('Test',this.context.store);
  }

  componentWillMount() {
    if (this.props.content) {
      this.updateContent(this.props.content, this.context.store);
    }
  }

  updateContent(content, store) {
    store.dispatch(updateContent(this.reduxUid, content));
  }

  changeActiveLinkLabel(value,store) {
  console.log('update menu current value ',value);
      store.dispatch(changeActiveLinkLabel(this.reduxUid, value));
    }

  getChildContext() {
    return {
      classStore: this.classStore,
    };
  }

  render() {
    const mainWrapper = (
      <div className={this.classStore.classMainWrapper}>
        <LeftMenuContainer
          reduxStoreName={this.reduxStoreName}
          reduxUid={this.reduxUid}
        />
      </div>
    );
    return <div>{mainWrapper}</div>;
  }
}

LeftSideMenu.defaultProps = {
  content: [],
  noBuiltInClassNames: false,
  reduxStoreName: "metisMenuStore",
  classNameItemHasActiveChild: null,
  className: null,
  classNameIcon: null,
  iconNamePrefix: "fa fa-",
  iconNameStateHidden: "caret-left",
  classNameItemHasVisibleChild: null,
  iconNameStateVisible: "caret-left rotate-minus-90",
  classNameLinkActive: null,
  classNameContainer: null,
  classNameContainerVisible: null
};

LeftSideMenu.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
  noBuiltInClassNames: PropTypes.bool,
  reduxStoreName: PropTypes.string,
  classNameItemHasActiveChild: PropTypes.string,
  className: PropTypes.string,
  LinkComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  classNameIcon: PropTypes.string,
  iconNamePrefix: PropTypes.string,
  iconNameStateHidden: PropTypes.string,
  classNameItemHasVisibleChild: PropTypes.string,
  iconNameStateVisible: PropTypes.string,
  classNameLinkActive: PropTypes.string,
  classNameContainer: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

LeftSideMenu.childContextTypes = {
  classStore: PropTypes.object.isRequired,
};

LeftSideMenu.contextTypes = {
  developer: PropTypes.string.isRequired,
  store : PropTypes.object.isRequired,
  LinkComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
}

export default LeftSideMenu;
