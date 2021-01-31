import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import { SetUsersActionType } from './usersSlice';

export type PassionType = 'Low' | 'Medium' | 'High' | 'Very-High';

export type Hobby = {
  id: number;
  passion: PassionType;
  hobby: string;
  year: number;
};

export type UserData = {
  id: number;
  name: string;
  hobbies: Hobby[];
};

export type GetUsers = () => Promise<AxiosResponse<UserData[]>>;

// UserTable Types
export interface IUsersTableProps {
  setUsers: SetUsersActionType;
}

export interface IUsersTableState {
  error?: boolean;
}

// Redux Types

export type UsersStateType = {
  users: UserData[];
};

type ReducerType<T> = CaseReducer<UsersStateType, PayloadAction<T>>;

export type SetUsers = ReducerType<UserData[]>;
