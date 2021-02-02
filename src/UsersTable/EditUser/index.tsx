import * as React from 'react';
import { connect } from 'react-redux';

import { addHobbies, addUser } from '../services';
import { addNewHobby, addNewUser } from '../usersSlice';
import styles from '../UsersTable.module.scss';
import AddHobbies from './AddHobbies';
import AddUser from './AddUser';
import { Hobbies, IEditUser } from './types';

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

  addHobbies = async (newHobbies: Hobbies) => {
    const { activeUser, ...rest } = newHobbies;
    if (activeUser !== undefined) {
      const newData = {
        ...rest,
        userId: activeUser,
      };
      const { data } = await addHobbies(newData);
      this.props.addNewHobby(data);
    }
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
  addNewHobby,
  addNewUser,
};

export default connect(null, mapDispatchToProps)(EditUser);
