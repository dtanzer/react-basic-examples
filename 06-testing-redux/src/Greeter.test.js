import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { Greeter, GreeterContainer } from './Greeter';

let event = "no event was registered";
describe('<Greeter />', () => {
  it('calls toGreetChanged when the input field changes', () => {
    const greeter = shallow(<Greeter toGreet="ignore" toGreetChanged={e => event=e} />);

    greeter.find('input').simulate('change', 'expected change event');

    expect(event).to.equal('expected change event');
  });
});

import { createStore } from 'redux';
import { provider } from 'react-redux';
import { shallowWithStore } from 'enzyme-redux';

const initialState = {
  welcome: {
    toGreet: 'expectedToGreet',
    greeting: 'expectedGreeting'
  }
}
const store = createStore(state => state, initialState);

describe('<GreeterContainer />', () => {
  it('uses the initial state from the store', () => {
    const greeter = shallowWithStore(<GreeterContainer />, store);

    expect(greeter.props().greeting).to.equal('expectedGreeting');
  });
});
