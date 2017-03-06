import { reducer } from './Reducer';
import { expect } from 'chai';
import GreeterActions from './GreeterActions';

describe('Main Reducer', () => {
  it('sets toGreet when toGreetChanged', () => {
    const expectedToGreet = "expected";

    const newState = reducer({}, { type: GreeterActions.greetingChanged, toGreet: expectedToGreet});

    expect(newState.welcome.toGreet).to.equal(expectedToGreet);
  });

  it('sets greeting when toGreetChanged', () => {
    const expectedGreeting = "Hello you";

    const newState = reducer({}, { type: GreeterActions.greetingChanged, toGreet: "you"});

    expect(newState.welcome.greeting).to.equal(expectedGreeting);
  });
});
