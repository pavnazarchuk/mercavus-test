import * as React from 'react';
import { connect } from 'react-redux';
import Select, { ValueType } from 'react-select';

import classnames from 'classnames';
import { StoreType } from 'store';
import Input from 'UsersTable/Components/Input';

import Button from '../Components/Button';
import { selectActiveUser } from '../usersSlice';
import styles from '../UsersTable.module.scss';
import { IAddHobbiesProps, IAddHobbiesState, OptionType } from './types';

const options: OptionType[] = [
  { value: 'High', label: 'High' },
  { value: 'Low', label: 'Low' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Very-High', label: 'Very-High' },
];

class AddHobbies extends React.Component<IAddHobbiesProps> {
  state: IAddHobbiesState = {
    hobby: '',
    year: '',
  };

  handleHobby = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      hobby: e.target.value,
    });
  };

  handleYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      year: e.target.value,
    });
  };

  selectPassion = (e: ValueType<OptionType, false>) => {
    this.setState({ passion: e });
  };

  addHobbies = () => {
    const { activeUser } = this.props;
    const { hobby, year, passion } = this.state;
    const passionValue = passion?.value;

    if (hobby && year && passionValue && activeUser !== null) {
      this.props.addHobbies({
        year,
        hobby,
        passion: passionValue,
        activeUser,
      });
    }
  };

  render() {
    const { activeUser } = this.props;
    const { hobby, year, passion } = this.state;
    const disabled = activeUser === null || !hobby || !year || !passion?.value;

    return (
      <div className={styles.usersTableHobbiesCol}>
        <div className={styles.usersTableHobbiesRow}>
          <div className={styles.usersTableHobbiesSubRow}>
            <div
              className={classnames([
                styles.usersTableUsersCell,
                styles.userTableSelect,
              ])}
            >
              <Select options={options} onChange={this.selectPassion} />
            </div>
            <div className={styles.usersTableUsersCell}>
              <Input
                value={hobby}
                onChange={this.handleHobby}
                placeholder="Enter hobby"
                className={styles.usersTableInput}
              />
            </div>
            <div className={styles.usersTableUsersCell}>
              <Input
                value={year}
                onChange={this.handleYear}
                placeholder="Enter year"
                className={styles.usersTableInput}
              />
            </div>
          </div>
          <Button disabled={disabled} onClick={this.addHobbies}>
            Add
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (store: StoreType) => ({
  activeUser: selectActiveUser(store),
});

export default connect(mapStateToProps)(AddHobbies);
