import React from 'react'
import { Greeter, GreeterContainer } from './Greeter';
import GreeterActions from './GreeterActions';
import { expect } from 'chai';
import { shallow } from 'enzyme'
import { shallowWithStore } from 'enzyme-redux'
import { createStore } from 'redux'

describe('<Greeter />', () => {
  let actualGreetChangedResult = "Event was not triggered";
  const expectedGreetChangedResult = "Event was triggered"
  it('rendered when input field changes', () => {
    const greeter = shallow(<Greeter toGreetChanged={event => actualGreetChangedResult = event} />);

    greeter.find('input').simulate("change", expectedGreetChangedResult);
    
    expect(actualGreetChangedResult).to.equal(expectedGreetChangedResult)
  });
});

describe('<GreeterContainer />', () => {
  it('show greeting from store', () => {
    const store = createStore(state => state,{
      welcome: {
        toGreet: "To Greet",
        greeting: "Hello To Greet"
      }
    });
    const component = shallowWithStore(<GreeterContainer />, store);
    expect(component.props().toGreet).to.equal("To Greet");
    expect(component.props().greeting).to.equal("Hello To Greet");
  });
});
