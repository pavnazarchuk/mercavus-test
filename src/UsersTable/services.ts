import { api } from 'api';

import { AddUser, GetHobbies, GetUsers } from './types';

export const getUsers: GetUsers = () => api.get('/users');

export const getHobbies: GetHobbies = () => api.get('/hobbies');

export const addUser: AddUser = data => api.post('/users', data);

export const addHobbies = (data: any) => api.post(`/hobbies`, data);

export const deleteHobby = (id: number) => api.delete(`/hobbies/${id}`);
