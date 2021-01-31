import { AddNewUser, SetActiveUser, SetUsers } from './types';

const setUsers: SetUsers = (state, action) => {
  state.usersData = action.payload;
};

const addNewUser: AddNewUser = (state, action) => {
  state.usersData = [...state.usersData, action.payload];
};

const setActiveUser: SetActiveUser = (state, action) => {
  state.activeUser = action.payload;
};

export default { setUsers, addNewUser, setActiveUser };
