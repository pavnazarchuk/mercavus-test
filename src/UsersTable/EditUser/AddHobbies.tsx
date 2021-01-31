import * as React from 'react';
import Select, { ValueType } from 'react-select';

import Input from 'UsersTable/Components/Input';

import Button from '../Components/Button';
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
    const { hobby, year, passion } = this.state;
    const passionValue = passion?.value;

    if (hobby && year && passionValue) {
      this.props.addHobbies({
        year,
        hobby,
        passion: passionValue,
      });
    }
  };

  render() {
    const { hobby, year } = this.state;

    return (
      <div className={styles.usersTableHobbiesCol}>
        <div className={styles.usersTableHobbiesRow}>
          <div className={styles.usersTableUsersCell}>
            <Select options={options} onChange={this.selectPassion} />
          </div>
          <p className={styles.usersTableUsersCell}>
            <Input
              value={hobby}
              onChange={this.handleHobby}
              placeholder="Enter hobby"
            />
          </p>
          <p className={styles.usersTableUsersCell}>
            <Input
              value={year}
              onChange={this.handleYear}
              placeholder="Enter year"
            />
          </p>
          <Button onClick={this.addHobbies}>Add</Button>
        </div>
      </div>
    );
  }
}

export default AddHobbies;
