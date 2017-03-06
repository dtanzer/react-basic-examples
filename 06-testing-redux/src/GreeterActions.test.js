import { expect } from 'chai';
import { actionCreators } from './Greeter';

import GreeterActions from './GreeterActions';

describe('Action creators for <Greeter />', () => {
  it('creates a greeting changed action from an onChanged event', () => {
    const event = {
      target: { value: "expectedValue" }
    }

    const action = actionCreators.toGreetChanged(event);

    expect(action.type).to.equal(GreeterActions.greetingChanged);
    expect(action.toGreet).to.equal("expectedValue");
  });
});
