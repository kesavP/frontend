/**
 * src/components/LeftMenuContainer.jsx
 * Author: kesav chaitanya p
 * Date: 29.09.2019
 */
/* eslint react/prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import MenuItem from '../containers/MenuItem';

class LeftMenuContainer extends React.Component {

  render(){
    const {developer,classStore} = this.context;
    const {items,reduxStoreName,reduxUid,visible} = this.props;
    return (
      <ul
      className={classnames(
      typeof classStore.classContainer === 'function'
        ? classStore.classContainer({ itemId, visible, items })
        : classStore.classContainer,
        visible && classStore.classContainerVisible,
      )}
      >
      {items.map((item, i) =>(
        <MenuItem key={item.id || `_${i}`} reduxStoreName={reduxStoreName} reduxUid={reduxUid} {...item} />
      ))}
      </ul>
    );
  }
}

LeftMenuContainer.defaultProps = {
  visible: false,
};

LeftMenuContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  visible: PropTypes.bool,
  reduxStoreName: PropTypes.string.isRequired,
  reduxUid: PropTypes.number.isRequired,
};

LeftMenuContainer.contextTypes = {
  classStore: PropTypes.object.isRequired,
};

export default LeftMenuContainer;
