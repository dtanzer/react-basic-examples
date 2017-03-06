import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import User from './User';

import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
chai.use(chaiEnzyme());

describe("<User />", () => {
  it("renders the first name in a span", () => {
    const user = shallow(<User firstName="John"/>);
    expect(user).to.contain(<span className="first-name">John</span>);
  });

  it("renders the email address when available", () => {
    const user = shallow(<User email="test@example.com"/>);
    expect(user).to.contain(<span className="email">test@example.com</span>);
  });

  it("does not render the email address when it is not available", () => {
    const user = shallow(<User/>);
    expect(user).to.not.have.descendants('.email');
  });

  it('renders the active flag as "flase" when no active flag is given', () => {
    const user = shallow(<User/>);
    expect(user).to.contain(<span className="active">active: {false.toString()}</span>);
  });
});
