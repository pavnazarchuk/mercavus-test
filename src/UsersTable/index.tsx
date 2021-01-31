import * as React from 'react';

import { getUsers } from './services';

class UsersTable extends React.Component {
  componentDidMount() {
    this.handleData();
  }

  handleData = async () => {
    const { data } = await getUsers();
    console.log(data, 'data');
  };

  render() {
    return null;
  }
}

export default UsersTable;
