import React from 'react';

import { shallow } from 'enzyme';
import Button from '../Components/Button';

import AddUser from './AddUser';

describe('AddUser', () => {
  let component: any;
  const mockAddUser = jest.fn();

  beforeEach(() => {
    component = shallow(<AddUser addUser={mockAddUser} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  
  it('should call add new user on click', () => {
    const addNewUserButton = component.find(Button);
    expect(addNewUserButton).toHaveLength(1);
    addNewUserButton.simulate('click');
    expect(mockAddUser.mock.calls.length).toEqual(1);
  });
});
