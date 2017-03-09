import React from 'react';
import ReactDOM from 'react-dom';
import User, { FirstName } from './User';

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());
import { shallow } from 'enzyme';
import { expect } from 'chai';

describe('<User/> UserComponent Test', () => {
  it('renders first name in a span', () => {
    const user = shallow(<User firstName="John" lastName="Doe" email="john.doe@example.com" active={true} />);

    expect(user).to.contain(<FirstName name="John" />)
  });

    it('renders active as false if not avail', () => {
    const user = shallow(<User firstName="John" lastName="Doe" email="john.doe@example.com" />);

    expect(user.find('span').last().text()).to.equal(' active: false')
  });
});