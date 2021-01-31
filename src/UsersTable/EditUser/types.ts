import { Hobby, PassionType } from 'UsersTable/types';
import { AddNewUserActionType } from 'UsersTable/usersSlice';

export interface IAddUserProps {
  addUser: (name: string) => void;
}

export interface IEditUser {
  usersLength: number;
  addNewUser: AddNewUserActionType;
}

export interface IAddHobbiesState {
  hobby: string;
  year: string;
  passion?: OptionType;
}

export interface IAddHobbiesProps {
  addHobbies: (hobbies: Omit<Hobby, 'id' | 'userId'>) => void;
}

export type OptionType = {
  value: PassionType;
  label: PassionType;
};
