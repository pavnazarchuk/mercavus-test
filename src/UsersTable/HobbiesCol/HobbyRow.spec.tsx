import React from 'react';

import { shallow } from 'enzyme';
import Button from '../Components/Button';

import HobbyRow from './HobbyRow';

describe('HobbyRow', () => {
  let component: any;
  const mockRemove = jest.fn();
  const fakeHobby = [{
    id: 1,
    passion: 'passion',
    hobby: 'hobby',
    year: '123',
    userId: 1
  }]

  beforeEach(() => {
    component = shallow(<HobbyRow hobby={fakeHobby} removeHobby={mockRemove} />);
  });

  it('should call remove on click', () => {
    const removeButton = component.find(Button);
    expect(removeButton).toHaveLength(1);
    removeButton.simulate('click');
    expect(mockRemove.mock.calls.length).toEqual(1);
  });
});
