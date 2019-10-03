/**
 * src/components/Test.jsx
 * Author: kesav chaitanya p
 * Date: 29.09.2019
 */
import React from "react";
import PropTypes from "prop-types";

class Test extends React.Component {
  render() {
    const { store } = this.context;
    const { parentLabelToogle } = this.props;
    return (
      <div className="body">
        <p>
          Activate link with ref using <b> changeActiveLinkLabel </b> method{" "}
          <br />
          <button
            onClick={() => {
              parentLabelToogle();
            }}
          >
            {this.props.btntext}
          </button>
        </p>
      </div>
    );
  }
}
Test.defaultProps = {};

Test.propTypes = {
  lsMenuRef: PropTypes.object.isRequired
};

Test.contextTypes = {
  store: PropTypes.object.isRequired,
  menuRef: PropTypes.object.isRequired
};

export default Test;
