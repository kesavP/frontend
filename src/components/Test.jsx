/**
 * src/components/Test.jsx
 * Author: kesav chaitanya p
 * Date: 29.09.2019
 */
import React from 'react';
 import PropTypes from "prop-types";

const Test = ({ lsMenuRef }, { store })  => console.log(lsMenuRef) ||  (
  <div className="body">
    <p>
      Activate link with ref using <b> changeActiveLinkLabel </b> method <br />
      <button
        onClick={() => {
          lsMenuRef.changeActiveLinkLabel("Test", store);
        }}
      >
        Test{" "}
      </button>{" "}
    </p>{" "}
  </div>
);

Test.defaultProps = {};

Test.propTypes = {
  lsMenuRef: PropTypes.object.isRequired,
};

Test.contextTypes = {
  store: PropTypes.object.isRequired,
  menuRef : PropTypes.object.isRequired,
};

export default Test;
