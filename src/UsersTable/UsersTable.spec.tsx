import React from 'react';

import { shallow } from 'enzyme';

import UsersTable from './index';

jest.mock('react-redux', () => ({
  connect() {
    return WrappedComponent => {
      function FakeConnect() {
        return <WrappedComponent />;
      }
      const name =
        WrappedComponent.displayName || WrappedComponent.name || 'Component';
      FakeConnect.displayName = `Connect(${name})`;
      return FakeConnect;
    };
  },
}));

describe('UsersTable', () => {
  let component: any;

  beforeEach(() => {
    component = shallow(<UsersTable />);
  });

  it('should fetchData on componentDidMount', () => {
    const instance = component.dive().instance();
    jest.spyOn(instance, 'fetchData');
    instance.componentDidMount();
    expect(instance.fetchData).toHaveBeenCalledTimes(1);
  });
});
