import { api } from 'api';

import { AddUser, GetUsers } from './types';

export const getUsers: GetUsers = () => api.get('/users?_embed=hobbies');

export const addUser: AddUser = data => api.post('/users', data);
