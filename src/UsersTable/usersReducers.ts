import {
  AddNewHobby,
  AddNewUser,
  RemoveHobby,
  SetActiveUser,
  SetHobbies,
  SetUsers,
} from './types';

const setUsers: SetUsers = (state, action) => {
  state.usersData = action.payload;
};

const setHobbies: SetHobbies = (state, action) => {
  state.hobbies = action.payload;
};

const addNewUser: AddNewUser = (state, action) => {
  state.usersData = [...state.usersData, action.payload];
};

const setActiveUser: SetActiveUser = (state, action) => {
  const activeUser =
    state.activeUser === action.payload ? null : action.payload;
  state.activeUser = activeUser;
};

const addNewHobby: AddNewHobby = (state, action) => {
  state.hobbies.push(action.payload);
};

const removeHobby: RemoveHobby = (state, action) => {
  state.hobbies = state.hobbies.filter(({ id }) => action.payload !== id);
};

export default {
  setUsers,
  addNewUser,
  setActiveUser,
  addNewHobby,
  removeHobby,
  setHobbies,
};
