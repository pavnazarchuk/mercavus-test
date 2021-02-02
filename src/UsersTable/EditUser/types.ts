import { Hobby, PassionType } from 'UsersTable/types';
import {
  AddNewHobbyActionType,
  AddNewUserActionType,
  SelectActiveUser,
} from 'UsersTable/usersSlice';

export interface IAddUserProps {
  addUser: (name: string) => void;
}

export interface IEditUser {
  usersLength: number;
  addNewHobby: AddNewHobbyActionType;
  addNewUser: AddNewUserActionType;
}

export interface IAddHobbiesState {
  hobby: string;
  year: string;
  passion?: OptionType;
}

export type Hobbies = Omit<Hobby, 'id' | 'userId'> & {
  activeUser: SelectActiveUser;
};
export interface IAddHobbiesProps {
  addHobbies: (hobbies: Hobbies) => void;
  activeUser: SelectActiveUser;
}

export type OptionType = {
  value: PassionType;
  label: PassionType;
};
