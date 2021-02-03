import * as React from 'react';

import Button from 'UsersTable/Components/Button';

import styles from '../UsersTable.module.scss';
import { IHobbyRowProps } from './types';

const HobbyRow: React.FC<IHobbyRowProps> = ({ hobby, removeHobby }) => {
  const onClickHandler = () => removeHobby(hobby.id);

  return (
    <div className={styles.usersTableHobbiesRow} key={hobby.id}>
      <div className={styles.usersTableHobbiesSubRow}>
        <p className={styles.usersTableUsersCell}>{hobby.passion}</p>
        <p className={styles.usersTableUsersCell}>{hobby.hobby}</p>
        <p className={styles.usersTableUsersCell}>Since {hobby.year}</p>
      </div>
      <Button mode="secondary" onClick={onClickHandler}>
        remove
      </Button>
    </div>
  );
};

export default HobbyRow;
