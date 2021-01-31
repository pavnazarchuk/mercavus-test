import { AxiosResponse } from 'axios';

export type PassionType = 'Low' | 'Medium' | 'High' | 'Very-High';

export type Hobby = {
  passion: PassionType;
  hobby: string;
  year: number;
};

export type UserData = {
  id: number;
  hobbies: Hobby[];
};

export type GetUsers = () => Promise<AxiosResponse<UserData>>;
