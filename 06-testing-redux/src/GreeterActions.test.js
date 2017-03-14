import { expect } from 'chai';
import { actionCreators } from './Greeter';

import GreeterActions from './GreeterActions';

describe('Action creators for <Greeter />', () => {
  it('creates a toGreetChanged action when the greeting input changes', () => {
    const expectedToGreet = "expected toGreet";

    const event = {
      target: {
        value: expectedToGreet
      }
    };
    const action = actionCreators.toGreetChanged(event);

    expect(action).to.deep.equal({ type: GreeterActions.greetingChanged, toGreet: expectedToGreet });
  });
});
