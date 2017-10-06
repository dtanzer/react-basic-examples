import React from 'react';
import { shallow } from 'enzyme';

import { User, ActiveInfo } from './User';

describe('<User />', () => {
  it('renders the first name of the user', () => {
    const user = shallow(<User firstName="John" />);

    const expectedFirstName = <span className="first-name">John</span>;
    expect(user).toContainReact(expectedFirstName);
  });

  it('renders active as "false" when not present in the props', () => {
    const user = shallow(<User />);

    expect(user).toContainReact(<ActiveInfo active={false} />);
  });
});
