import * as React from 'react';
import { connect } from 'react-redux';

import classnames from 'classnames';
import { StoreType } from 'store';

import { selectActiveUser, setActiveUser } from '../usersSlice';
import styles from '../UsersTable.module.scss';
import { IUserCol } from './types';

class UserCol extends React.Component<IUserCol> {
  selectUser = () => this.props.setActiveUser(this.props.id);

  render() {
    const { name, activeUser } = this.props;
    const active = activeUser === this.props.id;

    return (
      <button
        onClick={this.selectUser}
        className={classnames(styles.usersTableUsersButtom, {
          active,
        })}
      >
        <span className={styles.usersTableUsersCell}>{name}</span>
      </button>
    );
  }
}

const mapStateToProps = (store: StoreType) => ({
  activeUser: selectActiveUser(store),
});

const mapDispatchToProps = {
  setActiveUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCol);
