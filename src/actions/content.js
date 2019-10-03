/**
 * @file actions/content.js
 * @author H.Alper Tuna <halpertuna@gmail.com>
 * Date: 16.12.2016
 */

export const updateContent = (reduxUid, content) =>console.log('content action of type ','UPDATE_CONTENT') || ({
  type: 'UPDATE_CONTENT',
  reduxUid,
  content,
});

export const changeSubMenuVisibility = (reduxUid, id, trace, subMenuVisibility) => console.log('content action of type ','CHANGE_SUBMENU_VISIBILITY') || ({
  type: 'CHANGE_SUBMENU_VISIBILITY',
  reduxUid,
  id,
  trace,
  subMenuVisibility,
});

export const changeActiveLinkId = (reduxUid, value) => console.log('content action of type ','CHANGE_ACTIVE_LINK') || ({
  type: 'CHANGE_ACTIVE_LINK',
  reduxUid,
  propName: 'id',
  value,
});
export const changeActiveLinkTo = (reduxUid, value) => console.log('content action of type ','CHANGE_ACTIVE_LINK') || ({
  type: 'CHANGE_ACTIVE_LINK',
  reduxUid,
  propName: 'to',
  value,
});
export const changeActiveLinkLabel = (reduxUid, value) => console.log('content action of type ','CHANGE_ACTIVE_LINK') || ({
  type: 'CHANGE_ACTIVE_LINK',
  reduxUid,
  propName: 'label',
  value,
});
export const changeActiveLinkFromLocation = reduxUid => console.log('content action of type ','CHANGE_ACTIVE_LINK_FROM_LOCATION') || ({
  type: 'CHANGE_ACTIVE_LINK_FROM_LOCATION',
  reduxUid,
});
