import { actionCreators } from './Greeter';
import GreeterActions from './GreeterActions';
import { expect } from 'chai';

describe('Action creators for <Greeter />', () => {
  it('gretting change function creates gretting change action', () => {
    const expectedToGreet = "My greet";

    const action = actionCreators.toGreetChanged({
      target: {
        value: expectedToGreet
      }
    })

    expect(action.type).to.equal(GreeterActions.greetingChanged)
    expect(action.toGreet).to.equal(expectedToGreet) 
  });
});
