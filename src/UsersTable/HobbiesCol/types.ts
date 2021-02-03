import { Hobby, UserData } from 'UsersTable/types';
import {
  RemoveHobbyActionType,
  SelectActiveUser,
  SelectHobbiesByUserId,
} from 'UsersTable/usersSlice';

export interface IHobbiesColProps {
  activeUser: SelectActiveUser;
  selectHobbiesByUserId: SelectHobbiesByUserId;
  removeHobby: RemoveHobbyActionType;
}

export interface IHobbiesColState {
  hobbies: UserData['hobbies'];
}

export interface IHobbyRowProps {
  hobby: Hobby;
  removeHobby: (id: number) => void;
}
