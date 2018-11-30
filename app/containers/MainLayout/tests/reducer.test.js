
import { fromJS } from 'immutable';
import mainLayoutReducer from '../reducer';

describe('mainLayoutReducer', () => {
  it('returns the initial state', () => {
    expect(mainLayoutReducer(undefined, {})).toEqual(fromJS({}));
  });
});
