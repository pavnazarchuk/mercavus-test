import { UserData } from 'UsersTable/types';
import {
  SelectActiveUser,
  SetActiveUserActionType,
} from 'UsersTable/usersSlice';

export interface IUserCol {
  name: UserData['name'];
  id: UserData['id'];
  setActiveUser: SetActiveUserActionType;
  activeUser: SelectActiveUser;
}
