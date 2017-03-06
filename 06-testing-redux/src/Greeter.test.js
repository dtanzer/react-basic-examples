import chai, { expect } from 'chai';
import { shallow } from 'enzyme';
import { shallowWithStore } from 'enzyme-redux';
import React from 'react';

import { Greeter, GreeterContainer } from './Greeter';

import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

describe('<Greeter />', () => {
  it('Renders the greeting from the properties', () => {
    const greeter = shallow(<Greeter greeting="expected greeting" />);

    expect(greeter).to.contain(<p>expected greeting</p>);
  });

  it('Renders toGreet in the input field', () => {
    const expectedToGreet = "expected toGreet";
    const greeter = shallow(<Greeter toGreet={ expectedToGreet } toGreetChanged="ignore for now"/>);

    expect(greeter).to.contain(<input type="text" value={expectedToGreet} onChange="ignore for now"/>);
  });

  let event = null;
  it('Calls toGreetChanged when input field changes', () => {
    const greeter = shallow(<Greeter toGreet="ignore" toGreetChanged={e => event=e } />);

    greeter.find('input').simulate('change', 'change event');

    expect(event).to.equal('change event');
  });
});

import { createStore } from 'redux';
import { Provider } from 'react-redux';

function reducer(state, action) {
  return state;
}
const initialState={
  welcome: {
    toGreet: 'expected toGreet',
    greeting: 'expected greeting'
  }
};
const store = createStore(reducer, initialState);
//These tests do not reall add any value. In case of the greeter, the tests for the
//presentational component (the tests above) are absolutely sufficient. I have only
//added the tests here as an example to show how to test container components.
describe('<GreeterContainer />', () => {
  it('shows greeting from the store', () => {
    const greeter = shallowWithStore(<GreeterContainer />, store);

    expect(greeter.props().greeting).to.equal('expected greeting');
  });
});
