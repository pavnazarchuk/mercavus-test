import * as React from 'react';

import Button from '../Components/Button';
import Input from '../Components/Input';
import styles from '../UsersTable.module.scss';
import { IAddUserProps } from './types';

const AddUser: React.FC<IAddUserProps> = ({ addUser }) => {
  const [userName, setUserName] = React.useState<string>('');
  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const onAddUserHandler = () => {
    addUser(userName);
    setUserName('');
  };

  return (
    <div className={styles.usersTableUsersCol}>
      <Input
        value={userName}
        onChange={handleUserName}
        placeholder="User name"
      />
      <Button onClick={onAddUserHandler}>Add</Button>
    </div>
  );
};

export default AddUser;
