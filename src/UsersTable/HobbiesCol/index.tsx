import * as React from 'react';
import { connect } from 'react-redux';

import _isEqual from 'lodash.isequal';
import { StoreType } from 'store';
import {
  removeHobby,
  selectActiveUser,
  selectHobbiesByUserId,
} from 'UsersTable/usersSlice';

import { deleteHobby } from '../services';
import styles from '../UsersTable.module.scss';
import HobbyRow from './HobbyRow';
import { IHobbiesColProps, IHobbiesColState } from './types';

class HobbiesCol extends React.Component<IHobbiesColProps> {
  state: IHobbiesColState = {
    hobbies: [],
  };

  componentDidUpdate(prevPros: IHobbiesColProps) {
    const { activeUser } = this.props;
    if (activeUser !== null) {
      const hobbies = this.props.selectHobbiesByUserId[activeUser];
      const prevHobbies = prevPros.selectHobbiesByUserId[activeUser];

      if (
        prevPros.activeUser !== activeUser ||
        !_isEqual(hobbies, prevHobbies)
      ) {
        this.setState({ hobbies: hobbies || [] });
      }
    } else if (this.state.hobbies.length) {
      this.setState({ hobbies: [] });
    }
  }

  removeHobby = async (id: number) => {
    await deleteHobby(id);
    this.props.removeHobby(id);
  };

  render() {
    const { hobbies } = this.state;

    return (
      <div className={styles.usersTableHobbiesCol}>
        {!hobbies.length && (
          <p className={styles.emptyHobbiesTitle}>
            There are no hobbies for this user
          </p>
        )}
        {hobbies.map(hobby => (
          <HobbyRow
            key={hobby.id}
            hobby={hobby}
            removeHobby={this.removeHobby}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (store: StoreType) => ({
  activeUser: selectActiveUser(store),
  selectHobbiesByUserId: selectHobbiesByUserId(store),
});

const mapDispatchToProps = {
  removeHobby,
};

export default connect(mapStateToProps, mapDispatchToProps)(HobbiesCol);
