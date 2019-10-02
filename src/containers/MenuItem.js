/**
 * src/containers/Item.js
 * Author: kesav chaitanya p
 * Date: 29.09.2019
 */

import { connect } from 'react-redux';
import { changeSubMenuVisibility, changeActiveLinkId } from '../actions/content';
import { emitSelected } from '../actions/emitters';
import MenuItem from '../components/MenuItem';

export const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleSubMenu(e) {
    if (!ownProps.hasSubMenu) return;
    e.preventDefault();
    dispatch(changeSubMenuVisibility(
      ownProps.reduxUid,
      ownProps.id,
      ownProps.trace,
      !ownProps.subMenuVisibility,
    ));
  },
  activateMe(e) {
    dispatch(emitSelected(ownProps.reduxUid, e));
    if (!e || !e.isDefaultPrevented || !e.isDefaultPrevented()) {
      dispatch(changeActiveLinkId(ownProps.reduxUid, ownProps.id));
    }
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(MenuItem);
