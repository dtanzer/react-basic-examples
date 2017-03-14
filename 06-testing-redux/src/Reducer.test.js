import { expect } from 'chai';
import { reducer } from './Reducer';
import GreeterActions from './GreeterActions';

describe('Main Reducer', () => {
  it('returns a new greeting when toGreet is not empty', () => {
    const expectedToGreet = "expected toGreet";
    const action = { type: GreeterActions.greetingChanged, toGreet: expectedToGreet };

    const newState = reducer({}, action);

    expect(newState.welcome.toGreet).to.equal(expectedToGreet);
    expect(newState.welcome.greeting).to.equal("Hello "+expectedToGreet);
  });
});
