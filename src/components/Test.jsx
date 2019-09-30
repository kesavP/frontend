/**
 * src/components/Test.jsx
 * Author: kesav chaitanya p
 * Date: 29.09.2019
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Test extends React.Component {

  render() {
    return ( <
      div className = "body" >
      <
      p >
      Activate link with ref using < b > changeActiveLinkLabel < /b> method <
      br / >
      <
      button onClick = {
        () => {
          this.menu.changeActiveLinkLabel('Test');
        }
      } >
      Test <
      /button> < /
      p > <
      /div>
    )
  }
}

Test.defaultProps = {
  itemId: null,
  visible: false,
};

Test.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  visible: PropTypes.bool,
  reduxStoreName: PropTypes.string.isRequired,
  reduxUid: PropTypes.number.isRequired,
};

export default Test;
