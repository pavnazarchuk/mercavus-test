import * as React from 'react';
import { connect } from 'react-redux';

import { getUsers } from './services';
import { IUsersTableProps, IUsersTableState } from './types';
import { setUsers } from './usersSlice';
import styles from './UserTable.module.scss';

class UsersTable extends React.Component<IUsersTableProps> {
  state: IUsersTableState = {};

  componentDidMount() {
    this.handleData();
  }

  handleData = async () => {
    try {
      const { data } = await getUsers();
      this.props.setUsers(data);
    } catch (err) {
      this.setState({ error: true });
    }
  };

  render() {
    const { error } = this.state;
    if (error) {
      return <p className={styles.errorTitle}>Something went wrong ...</p>;
    }

    return (
      <div className={styles.userTable}>
        <div className={styles.userTable_row}>
          <div className={styles.userTableUsersCol} />
          <div className={styles.usersTableHobbiesCol} />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setUsers,
};

export default connect(null, mapDispatchToProps)(UsersTable);
