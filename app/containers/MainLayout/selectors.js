import { createSelector } from 'reselect';

/**
 * Direct selector to the mainLayout state domain
 */
const selectMainLayoutDomain = () => (state) => state.get('mainLayout');

/**
 * Other specific selectors
 */


/**
 * Default selector used by MainLayout
 */

const makeSelectMainLayout = () => createSelector(
  selectMainLayoutDomain(),
  (substate) => substate.toJS()
);

export default makeSelectMainLayout;
export {
  selectMainLayoutDomain,
};
