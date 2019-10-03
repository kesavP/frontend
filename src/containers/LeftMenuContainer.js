/**
 * src/containers/LeftMenuContainer.js
 * Author: kesav chaitanya
 * Date: 28.09.2019
 */

import { connect } from 'react-redux';
import LeftMenuContainer from '../components/LeftMenuContainer';

const mapStateToProps = (store, ownProps) => console.log('map state to props in leftmenu container') ||({
  items: (
    store[ownProps.reduxStoreName]
      .content[ownProps.reduxUid]
      .filter(item => item.parentId === ownProps.itemId)
  ),
});

export default connect(mapStateToProps)(LeftMenuContainer);
