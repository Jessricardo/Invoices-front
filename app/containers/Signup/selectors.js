import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectSignupDomain = () => (state) => state.get('signup');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Login
 */

const makeSelectSignup = () => createSelector(
  selectSignupDomain(),
  (substate) => substate.toJS()
);

export default makeSelectSignup;
export {
  selectSignupDomain,
};
