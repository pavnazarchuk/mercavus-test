import * as React from 'react';
import { connect } from 'react-redux';

import _isEqual from 'lodash.isequal';
import { StoreType } from 'store';

import EditUser from './EditUser';
import HobbiesCol from './HobbiesCol';
import { getHobbies, getUsers } from './services';
import { IUsersTableProps, IUsersTableState } from './types';
import UserCol from './UserCol';
import { selectUsers, setHobbies, setUsers } from './usersSlice';
import styles from './UsersTable.module.scss';

class UsersTable extends React.Component<IUsersTableProps> {
  state: IUsersTableState = {
    users: [],
  };

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(_: IUsersTableProps, prevState: IUsersTableState) {
    const { users } = this.props;
    if (!_isEqual(users, prevState.users)) {
      this.setState({ users });
    }
  }

  fetchData = () => {
    this.fetchUsers();
    this.fetchHobbies();
  };

  fetchUsers = async () => {
    try {
      const { data } = await getUsers();
      this.props.setUsers(data);
    } catch (err) {
      this.setState({ error: true });
    }
  };

  fetchHobbies = async () => {
    try {
      const { data } = await getHobbies();
      this.props.setHobbies(data);
    } catch (err) {
      this.setState({ error: true });
    }
  };

  render() {
    const { error, users } = this.state;
    if (error) {
      return <p className={styles.errorTitle}>Something went wrong ...</p>;
    }

    return (
      <div className={styles.usersTable}>
        <EditUser usersLength={users?.length} />
        <div className={styles.usersTable_container}>
          <div className={styles.usersTableUsersCol}>
            {users?.map(user => {
              return (
                <div key={user.id} className={styles.usersTable_row}>
                  <UserCol name={user.name} id={user.id} />
                </div>
              );
            })}
          </div>
          <HobbiesCol />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store: StoreType) => ({
  users: selectUsers(store),
});

const mapDispatchToProps = {
  setUsers,
  setHobbies,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
