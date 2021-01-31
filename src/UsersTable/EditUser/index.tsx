import * as React from 'react';
import { connect } from 'react-redux';

import { Hobby } from 'UsersTable/types';

import { addUser } from '../services';
import { addNewUser } from '../usersSlice';
import styles from '../UsersTable.module.scss';
import AddHobbies from './AddHobbies';
import AddUser from './AddUser';
import { IEditUser } from './types';

class EditUser extends React.Component<IEditUser> {
  addUser = async (name: string) => {
    const data = {
      name,
      id: this.props.usersLength,
    };
    const response = await addUser(data);
    this.props.addNewUser({
      ...response.data,
      hobbies: [],
    });
  };

  addHobbies = async (hobbies: Omit<Hobby, 'id' | 'userId'>) => {
    console.log(hobbies, 'hobbies');
  };

  render() {
    return (
      <div className={styles.usersTable_row}>
        <AddUser addUser={this.addUser} />
        <AddHobbies addHobbies={this.addHobbies} />
      </div>
    );
  }
}
const mapDispatchToProps = {
  addNewUser,
};

export default connect(null, mapDispatchToProps)(EditUser);
