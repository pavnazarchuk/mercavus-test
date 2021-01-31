import * as React from 'react';

import styles from '../UsersTable.module.scss';
import { IHobbiesCol } from './types';

class HobbiesCol extends React.Component<IHobbiesCol> {
  render() {
    const { hobbies } = this.props;

    return (
      <div className={styles.usersTableHobbiesCol}>
        {hobbies.map(hobby => (
          <div className={styles.usersTableHobbiesRow} key={hobby.id}>
            <p className={styles.usersTableUsersCell}>{hobby.passion}</p>
            <p className={styles.usersTableUsersCell}>{hobby.hobby}</p>
            <p className={styles.usersTableUsersCell}>Since {hobby.year}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default HobbiesCol;
