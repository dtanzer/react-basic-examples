import { reducer } from './Reducer';
import GreeterActions from './GreeterActions';
import { expect } from 'chai';

describe('Main Reducer', () => {
  it('produce state from action', () => {
    const newState = reducer({}, {
      type: GreeterActions.greetingChanged, 
      toGreet: "To Greet"
    });
    expect(newState.welcome.toGreet).to.equal("To Greet")
    expect(newState.welcome.greeting).to.equal("Hello To Greet")
  });
});
