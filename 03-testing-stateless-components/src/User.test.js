import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

import User, {FirstName} from './User';

describe('<User/>', () => {
  it('renders the first name in a span', () => {
    const user = shallow(<User firstName="John"/>);
    expect(user).to.contain(<FirstName firstName="John" />);
  });
});