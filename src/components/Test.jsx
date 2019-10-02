/**
 * src/components/Test.jsx
 * Author: kesav chaitanya p
 * Date: 29.09.2019
 */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

class Test extends React.Component {
  render() {
    console.log(this.context);
    return (
      <div className="body">
        <p>
          Activate link with ref using <b> changeActiveLinkLabel </b> method{" "}
          <br />
          <button
            onClick={() => {
              this.changeActiveLinkLabel("Test");
            }}
          >
            Test{" "}
          </button>{" "}
        </p>{" "}
      </div>
    );
  }

  changeActiveLinkLabel(value) {
    console.log("in the change active link label ", value);
    this.store.dispatch(changeActiveLinkLabel(this.reduxUid, value));
  }
}

Test.defaultProps = {};

Test.propTypes = {};

Test.contextTypes = {
  store: PropTypes.object.isRequired,
};

export default Test;
