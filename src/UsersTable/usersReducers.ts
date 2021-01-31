import { SetUsers } from './types';

const setUsers: SetUsers = (state, action) => {
  state.users = action.payload;
};

export default { setUsers };
